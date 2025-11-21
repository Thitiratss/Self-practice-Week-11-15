async function displayDialog() {
  return new Promise((resolve) => {
    const dialogMessageEl = document.getElementById("messageDialog");

    const okBtn = document.getElementById("okBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    okBtn.addEventListener("click", () => {
      dialogMessageEl.close();
      resolve(okBtn.textContent)
    });
    cancelBtn.addEventListener("click", () => {
      dialogMessageEl.close();
    });
    dialogMessageEl.showModal();
    resolve(cancelBtn.textContent)

  });

}
