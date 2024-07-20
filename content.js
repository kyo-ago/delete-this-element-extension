let selectedElement = null;

document.addEventListener('contextmenu', function(e) {
  selectedElement = e.target;
}, true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "deleteElement" && selectedElement) {
    selectedElement.remove();
    selectedElement = null;
  }
});
