//------------------------------------------------------------------------------
//bookmark alart of cookie
//------------------------------------------------------------------------------
/*window.onload = function () {
  var CookieData = document.cookie + ';';
  var StartPositionOfVisited = CookieData.indexOf('visited=', 0);
  if (StartPositionOfVisited == -1) {
    alert('なかむらのホームページへようこそ。もしよければブックマークしてください。検索しても出てきませんから( ﾉД`)ｼｸｼｸ…');
    var expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * 365);
    document.cookie = 'visited=true; path=/; secure; expires=' + expire;
  } else {
  }
  console.log(document.cookie);
};
*/

//------------------------------------------------------------------------------
//humburger menu controller on phone
//------------------------------------------------------------------------------
document.getElementById('header__nav-button').addEventListener('click', function () {
  this.classList.toggle('active');
  hamburger();
}, false);
function hamburger() {
  document.getElementById('header__nav').classList.toggle('header__nav-open');
};
//------------------------------------------------------------------------------
// highlight nav
//------------------------------------------------------------------------------
const currentCat = location.pathname.split("/")[1];
console.log(location.pathname);
console.log(currentCat);
const navLists = document.getElementsByClassName("header__item");
const cats = ["Products", "Events", "Statistics", "News", "About"];
for (let i = 0; i < cats.length; i++) {
  if (currentCat === cats[i]) {
    navLists[i].classList.add("selectedNav");
    console.log(i + "th element is selected");
    break;
  }
};
//------------------------------------------------------------------------------
//toggle darkmode reference: https://zenn.dev/chabatake_i/articles/darkmode_introductions
//------------------------------------------------------------------------------
// スイッチのinput要素（checkbox）
const modeSwitch = document.getElementById("myonoffswitch");

// スイッチの操作に応じて切り替え処理
modeSwitch.addEventListener("change", () => {
  console.log("chage theme to");
  if (modeSwitch.checked) {
    darkModeOn();
    localStorage.setItem("darkMode", "on");
    console.log("dark");
    } else {
    darkModeOff();
    localStorage.setItem("darkMode", "off");
    console.log("not dark");
  }
});

// ダークモードがオンの時に実行する処理
function darkModeOn() {
  document.documentElement.classList.add("darkmode"); // ルート要素<html>にクラスを追加
  modeSwitch.checked = true;
};
// ダークモードがオフの時に実行する処理
function darkModeOff() {
  document.documentElement.classList.remove("darkmode"); // クラスの削除
  modeSwitch.checked = false;
};

//MediaQueryList Start
// OSの設定がダークモード
const osDark = window.matchMedia("(prefers-color-scheme: dark)");

// イベントリスナー
const listener = (event) => {
  console.log("prefers-color-scheme is");
  if (event.matches) {
    darkModeOn();
    console.log("dark");
  } else {
    darkModeOff();
    console.log("not dark");
  }
};

// リスナー登録
osDark.addEventListener("change", listener);
// 初期化処理
listener(osDark);
//MediaQueryList End

// ロード時の状況に応じて切り替え
if (localStorage.getItem("darkMode") === "on") {
  console.log("theme is set as dark");
  darkModeOn();
} else if (localStorage.getItem("darkMode") === "off") {
  darkModeOff();
    console.log("theme is set as not dark");
}



/*
var openButton = document.getElementById('header__nav-button');
var closeButton = document.getElementById('header__nav-button');
var modalBackground = document.getElementById('header__nav');

openButton.addEventListener('click', openModal);
function openModal() {
  modalBackground.style.display = 'block';
};

//closeButton.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);
function closeModal() {
  modalBackground.style.display = 'none';
};
*/
