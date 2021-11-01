//humburger menu controller on phone 
document.getElementById('header__nav-button').addEventListener('click' , function() {
  hamburger();
} , false);
function hamburger() {
  document.getElementById('header__nav').classList.toggle('header__nav-open');
};

//bookmark alart of cookie
window.onload = function() {
  var CookieData = document.cookie + ';';
  var StartPositionOfVisited = CookieData.indexOf('visited=',0);

  if (StartPositionOfVisited == -1) {
    alert('なかむらのホームページへようこそ。もしよければブックマークしてください。検索しても出てきませんから( ﾉД`)ｼｸｼｸ…');
    var expire = new Date();
    expire.setTime( expire.getTime() + 1000 * 3600 * 24 * 365 );
    document.cookie = 'visited=true; path=/; secure; expires='+ expire;
  } else {
  }
  console.log(document.cookie);
};

//modal controller of youtube iframe
var openButton = document.getElementById('relatedMovie__button');
var closeButton = document.getElementById('iframeModal__closeButton');
var modalBackground = document.getElementById('iframeModal__background');
var loaded = false;

openButton.addEventListener('click', openModal);
function openModal() {
  modalBackground.style.display = 'flex';
  if (loaded == false) {
    closeButton.insertAdjacentHTML('beforebegin','<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/eWcYph5I_84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    loaded = true;
  };
};

closeButton.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);
function closeModal() {
  modalBackground.style.display = 'none';
};
