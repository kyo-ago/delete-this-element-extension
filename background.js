chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "deleteElement",
      title: chrome.i18n.getMessage("contextMenuTitle"),
      contexts: ["all"]
    });
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== "deleteElement") {
        return;
    }
    chrome.tabs.sendMessage(tab.id, { action: "deleteElement" });
});
