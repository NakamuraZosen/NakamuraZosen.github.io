function hamburger() {
    document.getElementById('header__nav').classList.toggle('header__nav-open');
  }
  document.getElementById('header__nav-button').addEventListener('click' , function() {
    hamburger();
  } , false);

function writecookie() {
  document.cookie = 'visited=true';
}

function readcookie() {
  if (document.cookie == 'visited=true') {
    
  } else {
    alert('初めて');
  }
}
