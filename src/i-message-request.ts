export interface IMessageRequest<T> {
    message: T;
    sender: chrome.runtime.MessageSender;
    sendResponse: (response?: any) => void;
}
