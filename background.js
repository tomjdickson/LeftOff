// On Installation set variables
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({
        // Set the states of each bookmark, hoping to utilise a bookmark ID instead of duplicating.
        bookmarks: {},

    });
    if (details.reason == "install") {
        // chrome.tabs.create({url: 'install.html'})
        chrome.storage.local.get('signed_in', function(data) {
            if (data.signed_in) {
              chrome.browserAction.setPopup({popup: 'popup.html'});
            } else {
              chrome.browserAction.setPopup({popup: 'popup_sign_in.html'});
            }
        });
    }   

});
