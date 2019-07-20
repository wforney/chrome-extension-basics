import { IMessageRequest } from "./i-message-request";

export function receive<T>(callback: (request: IMessageRequest<T>) => void): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        callback({ message, sender, sendResponse });
    });
}

export async function send(payload: any): Promise<any> {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tabs[0].id || 0, payload);

    return response;
}
