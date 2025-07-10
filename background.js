const targetPatterns = [
    /^https:\/\/www\.reddit\.com\/\?feed=home$/,
    /^https:\/\/www\.reddit\.com\/user\/[^/]+\/?$/,
    /^https:\/\/www\.youtube\.com\/feed\/trending\?bp=[^/]+$/,
    /^https:\/\/www\.youtube\.com\/shorts\/[^/]+\/?$/,
    /^https:\/\/www\.instagram\.com\/.*$/
];

function matchesPattern(url) {
    const redditSubreddit = /^https:\/\/www\.reddit\.com\/r\/(?!comments\/)[^/]+\/?$/;
    const redditHome = /^https:\/\/www\.reddit\.com\/?$/;

    // Allow all Instagram direct links
    const instagramDirect = /^https:\/\/www\.instagram\.com\/direct\/.*$/;
    if (instagramDirect.test(url)) {
        return false; // Don't block it
    }

    if (redditSubreddit.test(url) || redditHome.test(url)) {
        return true;
    }

    return targetPatterns.some(regex => regex.test(url));
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        console.log("Navigated to:", changeInfo.url);
        console.log(matchesPattern(changeInfo.url));
        if (matchesPattern(changeInfo.url)) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["content.js"]
            }).then(() => {
                chrome.tabs.sendMessage(tabId, { action: "runFunction" })
                    .catch(err => console.warn("Content script not available:", err));
            }).catch(err => console.warn("Failed to inject content script:", err));
        }
    }
});
chrome.webNavigation.onCommitted.addListener((details) => {
    if (["reload", "link", "typed", "generated"].includes(details.transitionType)) {
        console.log("Navigated to:", details.url);
        console.log(matchesPattern(details.url));
        if (matchesPattern(details.url)) {
            chrome.scripting.executeScript({
                target: { tabId: details.tabId },
                files: ["content.js"]
            }).then(() => {
                chrome.tabs.sendMessage(details.tabId, { action: "runFunction" })
                    .catch(err => console.warn("Content script not available:", err));
            }).catch(err => console.warn("Failed to inject content script:", err));
        }
    }
});
