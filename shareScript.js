//bookmark alart of cookie
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

//include header
let header = document.getElementById('header');
header.insertAdjacentHTML('afterbegin', `
<div class="header__container">
<div class="header__logo">
  <a href="https://NakamuraZosen.github.io/">
    <span class="header__logo-ja">
      中丸・中村造船
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
    <li class="header__item"><a href="https://NakamuraZosen.github.io/Products/index.html" class="header__item-link"><span>作品</span><small>products</small></a></li>
    <li class="header__item"><a href="https://NakamuraZosen.github.io/Events/index.html" class="header__item-link"><span>イベント情報</span><small>events</small></a></li>
    <li class="header__item"><a href="https://NakamuraZosen.github.io/Statistics/createrList/index.html?date=20230317" class="header__item-link"><span>中村センサス</span><small>census</small></a></li>
    <li class="header__item"><a href="https://NakamuraZosen.github.io/News/index.html" class="header__item-link"><span>ニュース</span><small>news</small></a></li>
    <li class="header__item"><a href="https://NakamuraZosen.github.io/About/index.html" class="header__item-link"><span>中村とは</span><small>about</small></a></li>
  </ul>
</nav>
</div>
`);

//include footer
let footer = document.getElementById('footer');
footer.insertAdjacentHTML('afterbegin', `
<div class="footer__sns">
  <p class="footer__sns-index">SNS</p>
  <ul class="footer__sns-list">
    <li class="footer__item"><a href="https://www.youtube.com/channel/UCzB8_PC3Siup1Zai8EfJC2g" target="_blank"
      rel="noopener noreferrer" class="footer__item-link">公式YouTube<span class="material-symbols-outlined">open_in_new</span></a></li>
    <li class="footer__item"><a href="https://twitter.com/NHI_nakamura" target="_blank" rel="noopener noreferrer"
      class="footer__item-link">公式Twitter<span class="material-symbols-outlined">open_in_new</span></a></li>
  </ul>
</div>
<p class="footer__copyright">©2024 NNZ Shipbuilding, All rights reserved.</p>
`);

//humburger menu controller on phone
document.getElementById('header__nav-button').addEventListener('click', function () {
  this.classList.toggle('active');
  hamburger();
}, false);
function hamburger() {
  document.getElementById('header__nav').classList.toggle('header__nav-open');
};
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
