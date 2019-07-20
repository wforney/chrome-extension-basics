import { getStorageData, setStorageData } from "./browser";

// Saves options to chrome.storage.sync.
const colorSelect = document.getElementById("color") as HTMLSelectElement;
const likesInput = document.getElementById("like") as HTMLInputElement;
const statusDiv = document.getElementById("status") as HTMLDivElement;
const saveButton = document.getElementById("save") as HTMLButtonElement;

async function save_options(): Promise<void> {
  const color = colorSelect.value;
  const likesColor = likesInput.checked;

  await setStorageData({
    favoriteColor: color,
    likesColor,
  });

  // Update status to let user know options were saved.
  statusDiv.innerText = "Options saved.";
  setTimeout(
    () => {
      statusDiv.innerText = "";
    },
    750);
}

saveButton.addEventListener("click", save_options);

// Restores select box and checkbox state using the preferences stored in chrome.storage.
async function restore_options(): Promise<void> {
  // Use default value color = "red" and likesColor = true.
  const { favoriteColor, likesColor } = await getStorageData({
    favoriteColor: "red",
    likesColor: true,
  });

  colorSelect.value = favoriteColor;
  likesInput.checked = likesColor;
}

document.addEventListener("DOMContentLoaded", restore_options);
