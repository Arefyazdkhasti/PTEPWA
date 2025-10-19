// Use window.globalStrings to update the content and attributes of HTML elements


//desktop => load show unsupported mode strings
document.getElementById("install_the_pateh_app_version").innerHTML = window.globalStrings.install_the_pateh_app_version;
document.getElementById("install_the_pateh_pwa_version").innerHTML = window.globalStrings.install_the_pateh_pwa_version;
document.getElementById("install_the_pateh_with_QrCode").innerHTML = window.globalStrings.install_the_pateh_with_QrCode;

// android => load show available markets strings
document.getElementById("android_install_title").innerHTML = window.globalStrings.android_install_title;
document.getElementById("android_install_description").innerHTML = window.globalStrings.android_install_description;
document.getElementById("downloadButton").innerHTML = window.globalStrings.downloadButton;
document.getElementById("marketBottomSheetTitle").innerHTML = window.globalStrings.marketBottomSheetTitle;
document.getElementById("marketDownloadFromBazaar").innerHTML = window.globalStrings.marketDownloadFromBazaar;
document.getElementById("marketDownloadFormGooglePlay").innerHTML = window.globalStrings.marketDownloadFormGooglePlay;
document.getElementById("marketDownloadFormMyket").innerHTML = window.globalStrings.marketDownloadFormMyket;

//ios but not safari =>load show use safari strings
document.getElementById("ios_but_not_safari_install_title").innerHTML = window.globalStrings.ios_but_not_safari_install_title;
document.getElementById("ios_but_not_safari_install_description_1").innerHTML = window.globalStrings.ios_but_not_safari_install_description_1;
document.getElementById("ios_but_not_safari_install_description_2").innerHTML = window.globalStrings.ios_but_not_safari_install_description_2;

//ios and safari => load show add to Home instruction strings
document.getElementById("ios_safari_install_title").innerHTML = window.globalStrings.ios_safari_install_title;
document.getElementById("ios_safari_install_description").innerHTML = window.globalStrings.ios_safari_install_description;

document.getElementById("safari_instructions_1_1").innerHTML = window.globalStrings.safari_instructions_1_1;
document.getElementById("safari_instructions_1_2").innerHTML = window.globalStrings.safari_instructions_1_2;

document.getElementById("safari_instructions_2_1").innerHTML = window.globalStrings.safari_instructions_2_1;
document.getElementById("safari_instructions_2_2").innerHTML = window.globalStrings.safari_instructions_2_2;

document.getElementById("safari_instructions_3_1").innerHTML = window.globalStrings.safari_instructions_3_1;
document.getElementById("safari_instructions_3_2").innerHTML = window.globalStrings.safari_instructions_3_2;

//loading messages
document.getElementById("splash_loading_title").innerText = window.globalStrings.splash_loading_title;
document.getElementById('pateh_name').innerText = window.globalStrings.pateh_name;
document.getElementById('pateh_desc').innerText = window.globalStrings.pateh_desc;
document.getElementById('powered_by').innerText = window.globalStrings.powered_by;
document.getElementById('splash_loading_title').innerText = window.globalStrings.splash_loading_title;


// Select all <img> tags and set their alt attribute
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('alt', window.globalStrings.app_name);
});
