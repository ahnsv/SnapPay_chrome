# chrome_ext_url_detection
A SnayPay test repo for url detection and hooks

## Data Flow
### Basic
```text
onStart put getRegisteredURL() from shopping app server in localStorage
=> chrome.tabs.onCreated/onUpdated 
=> check URL if registered 
=> Notification / Extension Activated
```
#### Issue
- How to update storage.sync data? 
- Can we watch and compare `chrome.storage.sync` and `axios.get` data?
### Authentication
```text

```
