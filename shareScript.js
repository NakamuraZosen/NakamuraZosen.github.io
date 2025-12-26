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
    <div class="footer-in wrap">
      <div class="PageTop">
        <a href="#" aria-label="PageTop">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z"/></svg>
        </a>
      </div>
      <img class="footer-logo" src="/img/NNZ-Logo.svg" alt="nnz design ロゴ">
      <div class="links">
        <a class="link" href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g" aria-label="youtube" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
          </svg>
          <span>YouTube</span>
        </a>
        <a class="link" href="https://twitter.com/NHI_nakamura" aria-label="x" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
          <span>X</span>
        </a>
        <a class="link" href="https://blog.nnz-design.com/" aria-label="blog" target="_blank" rel="noopener noreferrer">
          <img src="https://zosen.nnz-design.com/img/icon-blog.webp" alt="ブログのアイコン">
          <span>公式 Blog</span>
        </a>
        <div class="link inactive">
          <img src="https://zosen.nnz-design.com/img/icon-zosen.webp" alt="マイクラ部門のアイコン">
          <span>マイクラ作品 いまここ</span>
        </div>
      </div>
      <div class="footer__wrapper">
        <!-- 切り替えスイッチ -->
        <div class="footer__content">
          <span class="footer__content-index">暗い背景</span>
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
        <div class="footer__content">
          <span class="footer__content-index">問い合わせ</span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh8NzM_RGn50L5WsNhh13nltpO50aodwJcDDqJiKV-cVgtsA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            サイトの不具合等報告フォーム
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <span class="copyright">© 2024-2025 NNZ Design, All rights reserved.</span>
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
