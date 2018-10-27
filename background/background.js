const registeredURL = ["https://www.naver.com/"]

chrome.tabs.onCreated.addListener((t) => {
    if (registeredURL.includes(t.url)) {
        console.log('====================================');
        console.log('url checked');
        console.log('====================================');
        chrome.tabs.sendMessage(t.id, {
            from: 'popup',
            page: t.url
        }, (res) => {})
        return;
    }
    console.log('url is not matched')
    return;
})
chrome.tabs.onUpdated.addListener((tId, changeInfo, t) => {console.log(t.url)})
