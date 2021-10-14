document.getElementById('header__nav-button').addEventListener('click' , function() {
  hamburger();
} , false);
function hamburger() {
  document.getElementById('header__nav').classList.toggle('header__nav-open');
}

window.onload = function() {
  var CookieData = document.cookie + ';';
  var StartPositionOfVisited = CookieData.indexOf('visited=',0);

  if (StartPositionOfVisited == -1) {
    alert('初めまして');
    document.cookie = 'visited=true; max-age=365*24*60*60; path=/';
  } else {
  }
  console.log(document.cookie);
}
