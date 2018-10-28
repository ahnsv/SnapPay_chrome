const urlsGetter = () => {
  let a = null
  chrome.storage.sync.get((res) => {
    console.log(res.value)
    a = res.value
  })
  return a
}
const registeredURLs = urlsGetter()

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

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: registeredURLs[0] },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
