//modal controller of youtube iframe
var openButton = document.getElementById('relatedMovie__button');
var closeButton = document.getElementById('iframeModal__closeButton');
var modalBackground = document.getElementById('iframeModal__background');
var loaded = false;

openButton.addEventListener('click', openModal);
function openModal() {
  modalBackground.style.display = 'flex';
  if (loaded == false) {
    closeButton.insertAdjacentHTML('beforebegin','<iframe width="560" height="315" src="https://www.youtube.com/embed/woVdxUrqNvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    loaded = true;
  };
};

closeButton.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);
function closeModal() {
  modalBackground.style.display = 'none';
};

//date count down
var now = new Date();
var point = new Date("2022/06/19");
var countdown = Math.ceil((point.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
console.log(countdown);
if (countdown > -1) {
  var deadline = '応募締め切りまであと' + countdown + '日です。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
} else {
  var deadline = '応募は' + (-1 * countdown) + '日前に締め切られました。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
};
