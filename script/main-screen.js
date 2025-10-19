
window.addEventListener('load', function (ev) {

    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') == -1 &&
        navigator.userAgent.indexOf('FxiOS') == -1;

    const isIos = (
        ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
            navigator.platform,
        ) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );

    const isAndroid = /android/i.test(navigator.userAgent);



    const { isInstalled, firstLaunchEver, firstLoad } = checkPwaState();

    const isPwaInstalled = isInstalled;
    const isPwaFirstLaunch = firstLaunchEver && firstLoad;

    //! Use with caution for test purposes only, never set to true in production tags
    showPlatformSpecificMessages(true, true, true, true, isPwaFirstLaunch);

    //showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled, isPwaFirstLaunch);
});



function showPlatformSpecificMessages(isIos, isSafari, isAndroid, isPwaInstalled, isPwaFirstLaunch) {

    const splash = document.getElementById('splash-screen');

    splash.style.display = 'flex';

    // Show initial 0%
    updateProgress(0, 'loading', isPwaFirstLaunch);

    if (isIos && isSafari && isPwaInstalled) {
        const progressTracker = createRealProgressTracker(
            (percent, msg) => {
                // Update visual progress
                visualProgress = percent;
                updateProgress(percent, msg, isPwaFirstLaunch);
            },
            ['main.dart.js', 'canvaskit.wasm', 'canvaskit.js']
        );

        // Start visual feedback if no real progress appears
        handleVisualLoading.start();

        // Activate real tracking
        progressTracker.activate();

        //Load Flutter
        _flutter.loader.loadEntrypoint({
            serviceWorker: {
                serviceWorkerVersion: serviceWorkerVersion,
            },
            onEntrypointLoaded: async function (engineInitializer) {
                try {
                    handleVisualLoading.stop();
                    updateProgress(100, 'initializing', isPwaFirstLaunch);

                    const appRunner = await engineInitializer.initializeEngine();
                    await appRunner.runApp();

                    setTimeout(() => {
                        splash.style.display = 'none';
                    }, 300);
                } catch (error) {
                    handleVisualLoading.stop();
                    updateProgress(0, 'error_initializing', isPwaFirstLaunch);
                    setTimeout(() => {
                        splash.style.display = 'none';
                        document.getElementById('unsupported-desktop-message').style.display = 'block';
                    }, 2000);
                } finally {
                    progressTracker.deactivate();
                }

            }
        });

    } else {
        // Handle non-iOS/Safari or non-PWA
        splash.style.display = 'none';

        const elementId = isIos && isSafari
            ? 'supported-safari-message'
            : isIos && !isSafari
                ? 'unsupported-non-safari-message'
                : isAndroid
                    ? 'unsupported-android-message'
                    : 'unsupported-desktop-message';

        document.getElementById(elementId).style.display = isIos && isSafari ? 'flex' : 'block';
    }
}
// src/web/script/utils.mjs

/**
 * Converts English digits (0-9) to Persian (۰-۹)
 */
function toPersianDigits(text) {
    const map = { '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹' };
    return String(text).replace(/[0-9]/g, d => map[d]);
}

/**
 * Translates a key using window.globalStrings
 */
function textToPersian(key, ...args) {
    let str = window.globalStrings?.[key] || key;
    args.forEach((arg, i) => {
        str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), toPersianDigits(arg));
    });
    return toPersianDigits(str);
}

/**
 * Updates the loading text 
 * @param {number} percent of the download
 * @param {string} messageKey key of the message to show
 * @param {boolean} isPwaFirstLaunch whether to show the loading text or not 
 */
function updateProgress(percent, messageKey = 'loading', isPwaFirstLaunch) {
    const loadingTitle = document.getElementById('splash_loading_title');
    const p = Math.round(percent); // show precise percentage 

    console.log("updateProgress", percent, messageKey, isPwaFirstLaunch);

    if (!loadingTitle) {
        console.warn("⚠️ Element with id 'splash_loading_title' not found!");
        return;
    }

    if (!isPwaFirstLaunch) {
        if (loadingTitle) {
            loadingTitle.style.display = 'none';
            loadingTitle.textContent = "";
        }
    } else {
        if (loadingTitle) {
            loadingTitle.style.display = 'block';
            loadingTitle.textContent = textToPersian(messageKey, "");
        }
    }
}


/**
 * Track real-time download progress for tracked files using fetch + streams.
 * @param {Function} updateProgress
 * @param {Array<string>} trackedFiles
 */
function createRealProgressTracker(updateProgress, trackedFiles = ['./main.dart.js'], isPwaFirstLaunch) {
    const originalFetch = window.fetch;

    const activate = () => {
        window.fetch = async (url, options) => {
            const isTracked = trackedFiles.some(f => url.endsWith(f));
            if (!isTracked) {
                return originalFetch(url, options);
            }

            const response = await originalFetch(url, options);
            const contentLength = parseInt(response.headers.get('Content-Length'), 10);
            if (!response.body || isNaN(contentLength)) {
                updateProgress(100, 'initializing', isPwaFirstLaunch);
                return response;
            }

            const reader = response.body.getReader();
            let received = 0;

            const stream = new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                updateProgress(100, 'initializing', isPwaFirstLaunch);
                                controller.close();
                                return;
                            }
                            received += value.byteLength;
                            const percent = (received / contentLength) * 100;
                            updateProgress(percent, 'loading', isPwaFirstLaunch);
                            controller.enqueue(value);
                            push();
                        }).catch(err => {
                            controller.error(err);
                            updateProgress(0, 'error_loading', isPwaFirstLaunch);
                        });
                    }
                    push();
                }
            });

            return new Response(stream, {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText
            });
        };
    };

    const deactivate = () => {
        window.fetch = originalFetch;
    };

    return { activate, deactivate };
}


let visualProgress = 0;
let fakeInterval = null;

const handleVisualLoading = {
    start() {
        visualProgress = 0;
        fakeInterval = setTimeout(() => {
            if (visualProgress < 10) {
                fakeInterval = setInterval(() => {
                    if (visualProgress >= 90) {
                        clearInterval(fakeInterval);
                        return;
                    }
                    visualProgress += Math.random() * 2 + 1; // 1–3%
                    updateProgress(Math.round(visualProgress), 'loading');
                }, 200);
            }
        }, 1000);
    },
    stop() {
        if (fakeInterval) {
            clearTimeout(fakeInterval);
            clearInterval(fakeInterval);
            fakeInterval = null;
        }
    }
};


/**
 * Checks PWA installation status and whether this is the first launch ever.
 * Persists the "first launch" state using localStorage.
 * 
 * @returns {{ installed: boolean, firstLoad: boolean, firstLaunchEver: boolean }}
 */
function checkPwaState() {
    // --- 1. Detect if PWA is installed ---
    const isInstalled =
        window.navigator.standalone == true || // iOS PWA Standalone
        document.referrer.includes('android-app://') || // Android Trusted Web App
        ["fullscreen", "standalone", "minimal-ui"].some(
            (displayMode) => window.matchMedia('(display-mode: ' + displayMode + ')').matches
        );

    // --- 2. Check if this is the very first launch ever ---
    const firstLaunchKey = 'pwa_first_launch_ever';
    const isFirstLaunchEver = !localStorage.getItem(firstLaunchKey);

    // Mark as launched if it's the first time
    if (isFirstLaunchEver) {
        localStorage.setItem(firstLaunchKey, 'true');
    }

    // --- 3. Optional: First load in this session (resets on tab close)
    const sessionFirstLoadKey = 'pwa_first_load_session';
    const hasSeenSession = sessionStorage.getItem(sessionFirstLoadKey) !== null;
    const isFirstLoadInSession = !hasSeenSession;

    if (isFirstLoadInSession) {
        sessionStorage.setItem(sessionFirstLoadKey, 'true');
    }

    return {
        isInstalled: isInstalled,
        firstLaunchEver: isFirstLaunchEver,     // Only true once — ever
        firstLoad: isFirstLoadInSession         // True once per session
    };
}

