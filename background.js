chrome.browserAction.onClicked.addListener(tab => {
  const url = tab.url;
  const id = url.substr(url.lastIndexOf("/") + 1);
  const newUrl = `https://twitter.com/i/videos/${id}`;
  if (id.match(/[0-9]/g)) {
    chrome.tabs.create({ url: newUrl });
  } else {
    alert("We didn't find a video.");
  }
});
