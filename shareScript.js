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
//include header
//------------------------------------------------------------------------------
let header = document.getElementById('header');
header.insertAdjacentHTML('afterbegin', `
<div class="header__container">
<div class="header__logo">
  <a href="https://zosen.nnz-design.com/">
    <span class="header__logo-ja">
      <img src="/img/中丸中村造船.svg" />
    </span>
    <span class="header__logo-en">
      NNZ SHIPBUILDING
    </span>
  </a>

  <button type="button" id="header__nav-button">
    <span class="header__nav-button-line"></span>
  </button>
</div>
<nav id="header__nav">
  <ul class="header__list">
    <li class="header__item"><a href="https://zosen.nnz-design.com/Products/index.html" class="header__item-link"><span>作品</span><small>products</small></a></li>
    <li class="header__item"><a href="https://zosen.nnz-design.com/Events/index.html" class="header__item-link"><span>イベント情報</span><small>events</small></a></li>
    <li class="header__item"><a href="https://zosen.nnz-design.com/Statistics/createrList/index.html?date=20250521" class="header__item-link"><span>中村センサス</span><small>census</small></a></li>
    <li class="header__item"><a href="https://zosen.nnz-design.com/News/index.html" class="header__item-link"><span>ニュース</span><small>news</small></a></li>
    <li class="header__item"><a href="https://zosen.nnz-design.com/About/index.html" class="header__item-link"><span>中村とは</span><small>about</small></a></li>
  </ul>
</nav>
</div>
`);

//------------------------------------------------------------------------------
//include footer
//------------------------------------------------------------------------------
let footer = document.getElementById('footer');
footer.insertAdjacentHTML('afterbegin', `
<div class="footer__logo">
  <img src="img/NNZ-Logo.svg" />
</div>
<div class="footer__wrapper">
  <div class="footer__content">
    <span class="footer__content-index">SNS</span>
    <ul class="footer__content-list">
      <li class="footer__item">
        <a href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g" target="_blank" rel="noopener noreferrer" class="footer__item-link">
          公式YouTube
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path>
          </svg>
        </a>
      </li>
      <li class="footer__item">
        <a href="https://twitter.com/NHI_nakamura" target="_blank" rel="noopener noreferrer" class="footer__item-link">
          公式Twitter
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
  <div class="footer__content">
    <span class="footer__content-index">HPの不具合等</span>
    <ul class="footer__content-list">
      <li class="footer__item">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh8NzM_RGn50L5WsNhh13nltpO50aodwJcDDqJiKV-cVgtsA/viewform?usp=sf_link">
          Google forms          
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
  <!-- 切り替えスイッチ -->
  <div class="footer__content">
    <span class="footer__content-index">暗い背景（Beta）</span>
    <input
      type="checkbox"
      name="onoffswitch"
      class="onoffswitch-checkbox"
      id="myonoffswitch"
      tabindex="0"
    />
    <label class="onoffswitch-label" for="myonoffswitch">
    </label>
  </div>
</div>
<span class="footer__copyright">©2024-2025 NNZ Shipbuilding, All rights reserved.</span>
`);

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
const currentCat = location.pathname.split("/")[4];
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
