document.getElementById('header__nav-button').addEventListener('click' , function() {
  hamburger();
} , false);
function hamburger() {
  document.getElementById('header__nav').classList.toggle('header__nav-open');
}

var CookieData = document.cookie + ';';
var StartPositionOfVisited = CookieData.indexOf('visited=',0);

if (StartPositionOfVisited == -1) {
  alert('初めまして');
  document.cookie = 'visited=true';
} else {
}
console.log(document.cookie);
