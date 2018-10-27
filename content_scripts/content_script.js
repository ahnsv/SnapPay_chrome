chrome.extension.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg) {
        alert('msg arrived')
    }
})