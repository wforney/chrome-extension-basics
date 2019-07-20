import { IOptions } from "./i-options";
import { receive } from "./messenger";

// content script is like a server in users' current page
// we wait for extension to send a message, then react to it
receive<IOptions>(({message, sender, sendResponse}) => {
    const originalColor = document.body.style.backgroundColor;
    if (message.color) {
        document.body.style.backgroundColor = message.color;
        sendResponse("Change color to " + message.color);
    } else {
        document.body.style.backgroundColor = originalColor;
        sendResponse("Color message is none.");
    }
});
