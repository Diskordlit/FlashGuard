async function fetchData(){
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
        target: { tabId: tab.id }, 
        function: getShowName,
    });
}

var showTitle;

function getShowName(){
    
    showTitle = document.querySelector("div[class=about-header] > h3 > strong").innerHTML; //get show name
    
    console.log(`Show Title: ${showTitle}`);
    chrome.storage.sync.set({ showTitle });
}

fetchData();