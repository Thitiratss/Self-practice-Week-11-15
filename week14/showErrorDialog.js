export function showErrorDialog(
  message = "",
  { okButton = false, onOk = null, allowEsc = false, confirmDialog = false, onCancel = null,
    onKeep = null,} = {}, res = null ) {

  const existing = document.querySelector(".ecors-dialog");
  if (existing) {
    existing.remove();
  }

  if (document.querySelector(".ecors-dialog")) {
    return;
  }

  if (!message && res) {
    switch (res.status) {
      case 200:
        message = "Declaration successful";
        break;
      case 201:
        message = "Declaration successful";
        break;
      case 401:
        message = "401 - Unauthorized";
        break;
      case 404:
        message = "404 - not found";
        break;
      case 409:
        message =
          "You may have declared study plan already. Please check again.";
        break;
      default:
        message = "There is a problem. Please try again later.";
    }
  } else if (!message) {
    message = "There is a problem. Please try again later.";
  }

  const dialog = document.createElement("dialog");
  dialog.className = "ecors-dialog";

  const msg = document.createElement("p");
  msg.className = "ecors-dialog-message";
  msg.textContent = message;
  dialog.appendChild(msg);

  if (okButton) {
    const okBtn = document.createElement("button");
    okBtn.className = "ecors-button-dialog";
    okBtn.textContent = "OK";
    okBtn.addEventListener("click", () => {
      dialog.close();
      if (typeof onOk === "function") onOk();
    });
    dialog.appendChild(okBtn);
  }

  if (!allowEsc) {
    dialog.addEventListener("cancel", (e) => e.preventDefault());
    dialog.setAttribute("closedby", "none");
  }

  if (confirmDialog) {
    const btnContainer = document.createElement("div");
    btnContainer.className = "ecors-dialog-actions";

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "ecors-button-cancel";
    cancelBtn.textContent = "Cancel Declaration";
    cancelBtn.addEventListener("click", () => {
      dialog.close();
      if (typeof onCancel === "function") onCancel();
    });

    const keepBtn = document.createElement("button");
    keepBtn.className = "ecors-button-keep";
    keepBtn.textContent = "Keep Declaration";
    keepBtn.addEventListener("click", () => {
      dialog.close();
      if (typeof onKeep === "function") onKeep();
    });

    btnContainer.appendChild(cancelBtn);
    btnContainer.appendChild(keepBtn);
    dialog.appendChild(btnContainer);
  }

  document.body.appendChild(dialog);
  dialog.showModal();
}
