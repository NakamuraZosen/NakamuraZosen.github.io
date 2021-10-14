function hamburger() {
    document.getElementById('header__nav').classList.toggle('header__nav-open');
  }
  document.getElementById('header__nav-button').addEventListener('click' , function() {
    hamburger();
  } , false);

  document.cookie = 'visited=true';
  console.log(document.cookie);
