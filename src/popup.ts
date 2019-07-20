import { IOptions } from "./i-options";
import { send } from "./messenger";

let count = 0;
const urlSpan = document.getElementById("url") as HTMLSpanElement;
const timeSpan = document.getElementById("time") as HTMLSpanElement;
const countUpButton = document.getElementById("countUp") as HTMLButtonElement;
const changeBackgroundButton = document.getElementById("changeBackground") as HTMLButtonElement;

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    const queryInfo = {
      active: true,
      currentWindow: true,
    };

    const tabs = await chrome.tabs.query(queryInfo);
    urlSpan.innerText = tabs[0].url || "";
    timeSpan.innerText = new Date().toLocaleTimeString();

    chrome.browserAction.setBadgeText({ text: count.toString() });

    countUpButton.addEventListener(
      "click",
      () => {
        chrome.browserAction.setBadgeText({ text: (++count).toString() });
      });

    changeBackgroundButton.addEventListener(
      "click",
      async () => {
        const options: IOptions = {
          color: "#555555",
        };

        const msg = await send(options);

        console.log("result message:", msg);
      });
  });
