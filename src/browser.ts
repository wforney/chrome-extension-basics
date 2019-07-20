export function getStorageData(
  keysOrObjectWithDefaults: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }> {
  return new Promise(
    (resolve, reject) =>
      chrome.storage.sync.get(keysOrObjectWithDefaults, (result) =>
        chrome.runtime.lastError
          ? reject(Error(chrome.runtime.lastError.message))
          : resolve(result)));
}

export function setStorageData(data: { [key: string]: any }): Promise<void> {
  return new Promise(
    (resolve, reject) =>
      chrome.storage.sync.set(
        data,
        () => chrome.runtime.lastError
          ? reject(Error(chrome.runtime.lastError.message))
          : resolve()));
}
