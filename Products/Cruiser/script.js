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
