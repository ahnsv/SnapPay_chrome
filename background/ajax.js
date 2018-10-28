const SERVER_ADDRESS = "http://localhost:9000/products"
const xhr = new XMLHttpRequest();
const loadRegisteredURLData = () => {
    xhr.open("GET", SERVER_ADDRESS, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const res = JSON.parse(xhr.responseText)
            // put this into storage
            for (let i in res){
                chrome.storage.sync.set({i: res[i]}, () => {
                    console.log('Registered URL saved to sync storage id:', i)
                })
            }
        }
        else {
            throw Error('Error: cannot get registered url data from server')
        }
    }
    xhr.send()
}
chrome.runtime.onStartup.addListener(loadRegisteredURLData())


