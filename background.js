/* This code is adding a listener to the browser action button (the icon in the browser toolbar) that
executes a script when clicked. The script toggles the `contenteditable` attribute of the
`document.body` element, which allows the user to edit the text in the page and also turns off and on
the spellcheck feature to ensure the spellchecking checks the page. */

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: `
      var isContentEditable = document.body.getAttribute("contenteditable");
      if (isContentEditable === "true") {
        document.body.removeAttribute("contenteditable");
      } else {
        document.body.setAttribute("contenteditable", "true");
        document.body.spellcheck = false;
        document.body.spellcheck = true;
      }
    `
  });
});
