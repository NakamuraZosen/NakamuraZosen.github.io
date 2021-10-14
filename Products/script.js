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
    alert('なかむらのホームページへようこそ。もしよければブックマークしてください。検索しても出てきませんから( ﾉД`)ｼｸｼｸ…');
    var expire = new Date();
    expire.setTime( expire.getTime() + 1000 * 3600 * 24 * 365 );
    document.cookie = 'visited=true; path=/; expires='+ expire;
  } else {
  }
  console.log(document.cookie);
}
