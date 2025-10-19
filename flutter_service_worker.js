'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cc43f0df1749c85cffe99467932e6371",
"main.dart.js_69.part.js": "eef47a6f7d7496f503ff417c74d307f5",
"main.dart.js_24.part.js": "0b8742a5ba4c75c8a13b7838173b9895",
"main.dart.js_34.part.js": "e90cedc4aeffb751becba5f219bcac85",
"main.dart.js_46.part.js": "3505821bfdd95ba66d83646bfd1a8189",
"main.dart.js_56.part.js": "ba5100ec015aa2cc974f1cd09b322e6a",
"version.json": "5b83396e294a82512e07a58de748c9ae",
"main.dart.js_7.part.js": "261183b96853256c803cf772b6471e2a",
"main.dart.js_60.part.js": "9d33ab51d75bee41baa5e41fb98e47ea",
"main.dart.js_70.part.js": "a30f645514737104e28f6d69f4bd38c2",
"main.dart.js_12.part.js": "6568986980bff85d2ace2e49abc8bad7",
"main.dart.js_71.part.js": "49c7f5aed493b1f23484001d4ee4ae4e",
"main.dart.js_61.part.js": "e81f093684558875aeca57da3dcf8ff9",
"main.dart.js_6.part.js": "0d262cd5a55b1b81dd4e23b8ef16c27f",
"index.html": "b66dafd9daad242bd037a3b29b27ba93",
"/": "b66dafd9daad242bd037a3b29b27ba93",
"main.dart.js_13.part.js": "37955136ce7cce791c76f3158fdaaa28",
"main.dart.js_68.part.js": "a9218b4e0fc913b803ecc8ebb6661cfe",
"main.dart.js_78.part.js": "63f19d9e42ffd3dc215c0c5765d54da1",
"main.dart.js_25.part.js": "31c113cc432f0b4f85d007d7d8f27d6f",
"main.dart.js_57.part.js": "90471cf0bf9be27f27c26e3886419380",
"main.dart.js_47.part.js": "e501d597f03bd20232f3748559c1c1bc",
"main.dart.js_11.part.js": "e609c889b3653787059da8dbcc177e5a",
"main.dart.js_63.part.js": "0182fa72958a630c4fce497382d48650",
"main.dart.js_4.part.js": "0c456a2f05df555736c8f28f8c4bef01",
"main.dart.js_73.part.js": "715aa7fc3e77ca6609e477964c5e87eb",
"main.dart.js": "8a18601c552c4cc8f22c3848101cc36a",
"main.dart.js_18.part.js": "51dc634c175e0d28492efb78cba9fcfe",
"main.dart.js_45.part.js": "e2081285f7260bd9807ddde9ba92bbcf",
"main.dart.js_55.part.js": "eb70bc1a1d6554b0bc6c45d7634590ee",
"main.dart.js_27.part.js": "e55f7581540b43895e7594402111c832",
"main.dart.js_37.part.js": "336245fe90a6de69719c628c9e0e86eb",
"main.dart.js_19.part.js": "41e8f677b4092e2b69c3574374f12ffa",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_54.part.js": "289a392aa5a64136c97b96cf6bf7623b",
"main.dart.js_44.part.js": "5090c78da948ddc82d07663c15fff825",
"main.dart.js_36.part.js": "a9b3a21a5d2cf9f19e0fb49fc5a298a6",
"main.dart.js_26.part.js": "e0c9f955b78eb73a064165d77a29b347",
"main.dart.js_10.part.js": "f258b6049db1e37d8f14fc743f429727",
"main.dart.js_72.part.js": "2be1ec6307fd482010d0762cf97f5c8d",
"main.dart.js_5.part.js": "582b4e65835c2fcdf27c32c84c1ec791",
"main.dart.js_62.part.js": "2bd30dee8b209f28305488ae8515e048",
"script/main-screen.js": "d5c926f9f38aa35390df4895a8b28605",
"script/load_app_translation.js": "35e86075afdea7ca34174b6e16f4a908",
"script/app-translation.js": "1874c108a80fce9614696174349e5d11",
"script/status-bar-color.js": "45fc9024aec9d4d78e4b07fa0cdcb299",
"main.dart.js_58.part.js": "b3b2b37e00f9cb4513af495250f223c7",
"main.dart.js_48.part.js": "cba20a72ca04feeed7214333bb1309dc",
"main.dart.js_15.part.js": "780d2ab4be4cf01026057c77fdf316a6",
"main.dart.js_67.part.js": "34f9b6859df2c214f43678c1dc145201",
"main.dart.js_77.part.js": "3cc9d3cd71cde9ab693b7881aa050751",
"favicon.png": "d9d685201888843a506d557025c4624a",
"main.dart.js_41.part.js": "d81179fa794311a5dbdf2301d2fab13f",
"main.dart.js_51.part.js": "9d8f56e95c6323e47db732814cc51f90",
"main.dart.js_23.part.js": "5603749e39a57944392bd83ab101f7f3",
"main.dart.js_33.part.js": "03045dc592f266b2aafbac1904052600",
"main.dart.js_9.part.js": "59db1ab911a9492e157865849a27f26e",
"main.dart.js_50.part.js": "17efc1d6013343fb6676f82ae737878f",
"main.dart.js_40.part.js": "57ef2ee5318d8cea982031e5c57e876f",
"main.dart.js_32.part.js": "cb8037669679e61e252f4b3870a5a12c",
"main.dart.js_22.part.js": "65ffdbda6732856ee92d1ccde81ecdb0",
"main.dart.js_8.part.js": "01e768847049fa766eeee1f2bf5177b0",
"icons/pateh_name.svg": "d3319d5fe9989cae99da7e93e2c4f4c4",
"icons/qrcode.png": "cd38a62abbc9ebe920481ff9700bffdf",
"icons/Icon-192.png": "13ecad1c923db10d19b0eb4f4d1c45f1",
"icons/Icon-maskable-192.png": "13ecad1c923db10d19b0eb4f4d1c45f1",
"icons/bazaar.svg": "43fbfde52a4be5337d03b76a48bd186e",
"icons/myket.svg": "e8a262ee05935988bcbbb568d385c50f",
"icons/iranicard.svg": "26fee8b26f80c519dc2d9da989ff8326",
"icons/google_play.svg": "7c0da843b1fc5c18d7dfff458181789c",
"icons/pateh.svg": "f7a2df9a34d793a5f72dc69f6e41b43d",
"icons/Icon-maskable-512.png": "b248a129ebeac2b3e6acfbd441cf37eb",
"icons/Icon-512.png": "b248a129ebeac2b3e6acfbd441cf37eb",
"style.css": "6326b11195251d6c4b203e1b0720dd58",
"manifest.json": "c6ce223e80bff974b5a2aa2ff3ac6362",
"main.dart.js_59.part.js": "2a2fc0e14735edd0509ae93813e2de0d",
"main.dart.js_14.part.js": "fa99fd22d43ddbfdb73f08eb9b1db0f7",
"main.dart.js_76.part.js": "4093145e9bae7d6efd2fdf0c8e56ad8c",
"main.dart.js_66.part.js": "28127f53d147e83ad21e0be3882f75bb",
"main.dart.js_1.part.js": "a4ff63ec8eb6849ceec2b4eb0e8c8fb8",
"main.dart.js_20.part.js": "de970c436d60f4d4158f9219422bbb2a",
"main.dart.js_42.part.js": "8264ace054c6b6978c201236d70e2a02",
"main.dart.js_52.part.js": "d5b433e26d46f47a09c1804535f44b84",
"main.dart.js_39.part.js": "6876822b4dd6ef2ae986bf3d2dc18bf3",
"main.dart.js_29.part.js": "22895b1ee5ee80dd2f26c57fdc6e4508",
"main.dart.js_64.part.js": "b3c6da4094aa69efdf6966cf3f46d719",
"main.dart.js_3.part.js": "a71c06889af1d92e8d5d09ad18a34bd7",
"main.dart.js_74.part.js": "009672ac86270d28605e34ff74045e8a",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"main.dart.js_16.part.js": "2625f6b002ea7001a8c8c616017bdd37",
"assets/pateh_assets/images/svgs/info_icon.svg": "c8de1bdb95d29383cc38a2391112c8a2",
"assets/pateh_assets/images/svgs/pateh_name.svg": "d3319d5fe9989cae99da7e93e2c4f4c4",
"assets/pateh_assets/images/svgs/success_flight_ticket_black.svg": "02f2245401d67c9ba5477fed6545659a",
"assets/pateh_assets/images/svgs/empty_list_passenger.svg": "db69ab86a52eec6ff81177126a20bef2",
"assets/pateh_assets/images/svgs/ai_character.svg": "dcac19c9d7bb2cc2517ecd5879d56914",
"assets/pateh_assets/images/svgs/credit_card.svg": "0c4bf88b3ccd297a065bdd30ce3e6939",
"assets/pateh_assets/images/svgs/light_bus_ticket_success.svg": "fb761104ccf7ec2c269f1843dac3cb80",
"assets/pateh_assets/images/svgs/profile_avatar.svg": "d655bb5d467294a52c49566958f54ee9",
"assets/pateh_assets/images/svgs/light_ticket_fail.svg": "484df8aff954e5bceca0507beeb06c62",
"assets/pateh_assets/images/svgs/avatar_ring.svg": "7484c4fa410f19d527cb79a0d2c2effa",
"assets/pateh_assets/images/svgs/close_circle.svg": "5324d1e28bb3ae63c9c6b86a89bafd28",
"assets/pateh_assets/images/svgs/ticket_fail_black.svg": "8f89c076a9c6f5e317cdc9daf6393aac",
"assets/pateh_assets/images/svgs/info_circle.svg": "f6c9d3be44a3f09565c5742eca168afb",
"assets/pateh_assets/images/svgs/iranicard.svg": "26fee8b26f80c519dc2d9da989ff8326",
"assets/pateh_assets/images/svgs/success_bus_ticket_black.svg": "31ff4c4f72033219b57b2fffd8d000c8",
"assets/pateh_assets/images/svgs/light_flight_ticket_success.svg": "57055d019ad29775a05e3fa0e229fd61",
"assets/pateh_assets/images/svgs/pateh.svg": "f7a2df9a34d793a5f72dc69f6e41b43d",
"assets/pateh_assets/images/svgs/success_circle.svg": "100cb7330243335b630f1e9042ba57fc",
"assets/pateh_assets/images/weather/sleet.png": "5d8c6b2541de541e06a29ebaf755a116",
"assets/pateh_assets/images/weather/fog.png": "8e9a34b77b1981704b7134cabf86b1fe",
"assets/pateh_assets/images/weather/rain-snow-showers-night.png": "946cbf528d4a6a24b1459398def8c75d",
"assets/pateh_assets/images/weather/showers-night.png": "c8be175a538c31f44c547a83c3777221",
"assets/pateh_assets/images/weather/partly-cloudy-night.png": "ba5a87c369b4bb53f5f27eca521461ab",
"assets/pateh_assets/images/weather/thunder.png": "e7ab8abd6d11fa25360f1dce5ada5e70",
"assets/pateh_assets/images/weather/thunder-showers-night.png": "c6d0f49366b1d17553d52f5a43adae74",
"assets/pateh_assets/images/weather/snow.png": "a1416d7d2dc3f748a596295a9d10c1b2",
"assets/pateh_assets/images/weather/rain-snow-showers-day.png": "190379c73737bbb06bc4041d62628908",
"assets/pateh_assets/images/weather/wind.png": "a01fa76412f2c917fca5da61327adc2c",
"assets/pateh_assets/images/weather/clear-night.png": "3810d1191230f994f0a290b63dcd86f6",
"assets/pateh_assets/images/weather/snow-showers-day.png": "6574e3ac9ecc96b32c97db44c58c6efa",
"assets/pateh_assets/images/weather/showers-day.png": "a0f681956aca495c0076bae080d0029e",
"assets/pateh_assets/images/weather/cloudy.png": "8ea16a0c352cbd7ee2e955c6876516a1",
"assets/pateh_assets/images/weather/thunder-showers-day.png": "524eb0e59e01e641b43413da38ec71c7",
"assets/pateh_assets/images/weather/rain-snow.png": "bd0328efdc861c6153e004e8c751a4f9",
"assets/pateh_assets/images/weather/partly-cloudy-day.png": "e7d2f4d5b9c1676e352f162cccdf7ad3",
"assets/pateh_assets/images/weather/hail.png": "2cde678a2c491952d9e3f3ee6bbec352",
"assets/pateh_assets/images/weather/thunder-rain.png": "7c8c803f176b0d09ce6453194b3922f2",
"assets/pateh_assets/images/weather/snow-showers-night.png": "cd8f126cf6f4db11308b6c267a750565",
"assets/pateh_assets/images/weather/rain.png": "9e06de898b60daaec69e8a6aaef67aba",
"assets/pateh_assets/images/weather/clear-day.png": "f8c51965dda5de4b42bf4390e9ff64eb",
"assets/pateh_assets/images/default.png": "9ae1ed52feef50c9f933f1c9a3fbf9c5",
"assets/pateh_assets/gifs/pateh.gif": "4f79243d4624065f8b742d3f4f065bb9",
"assets/pateh_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/pateh_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/pateh_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/pateh_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/pateh_assets/fonts/Flutter-Iconsax.ttf": "a89bb3f765fedd823b808f2608bc3cdf",
"assets/pateh_assets/fonts/icons/Pateh.ttf": "bdd78cdfc3197b38a5fb2b8fb7fff3e0",
"assets/pateh_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/pateh_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/pateh_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/AssetManifest.json": "e519434b365384f13c9b6518f81462a1",
"assets/NOTICES": "2f91232fab30ce13784ed979be4882ee",
"assets/pubspec.yaml": "7e3cc16018b1ebcfc6d3d8fa68abe27b",
"assets/FontManifest.json": "00c41edbb649a0dcaa06ca458833f076",
"assets/AssetManifest.bin.json": "f72654849987ccad5596184993a38b67",
"assets/android/app/build.gradle": "ed68f0c5fbb8d8f31c95c590327c0144",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d4e731501dab897a9e0a34fcc2f19692",
"assets/packages/dual_custom_date_picker/screenshots/single_date_picker.jpg": "666e6cf9371a70948b5ede76a7e88635",
"assets/packages/dual_custom_date_picker/screenshots/simple_date_picker.png": "bc9166344807bdf0cafb131c5ab7b94d",
"assets/packages/dual_custom_date_picker/screenshots/range_date_picker.jpg": "87326a21281ded78393d4b43d1683eb3",
"assets/packages/dual_custom_date_picker/fonts/Iconsax.ttf": "a0aa06d53dd93e64bc783d921264ea0e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2012eebcce500c815a1d28ed82ad7f90",
"assets/fonts/MaterialIcons-Regular.otf": "57c3634cf46e9d884cb305c44277af58",
"main.dart.js_28.part.js": "e9094af4bdc63ec1d9d438cb2999da81",
"main.dart.js_38.part.js": "833f1891b5b1307cf626313dc9f029c9",
"main.dart.js_75.part.js": "3b99612076c951df5f421ce6ef2d82ed",
"main.dart.js_2.part.js": "ec9ef72cdcc882d3d3efd7a0b6c525e7",
"main.dart.js_65.part.js": "656a305ec950813c2502728514fcc9fc",
"main.dart.js_17.part.js": "b294ece8bfba8db613054c6bcfaf13b4",
"main.dart.js_31.part.js": "07d13770820b7d5136938edc63fea5ea",
"main.dart.js_21.part.js": "cd9538e962d03cb907948374395d1073",
"main.dart.js_53.part.js": "7bf08b58e1bde1dbec4aa3acb54aaf7d",
"main.dart.js_43.part.js": "dd0fed5f7ff0c0ccba50f4f6fe2f226a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
