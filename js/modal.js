//modal controller of youtube iframe
//referrence: https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/dialog
const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showModal");
const closeButton = document.querySelector("dialog button");

// ［ダイアログを表示］ボタンでダイアログがモーダルに開く
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// ［閉じる］ボタンでダイアログを閉じる
closeButton.addEventListener("click", () => {
  dialog.close();
});
