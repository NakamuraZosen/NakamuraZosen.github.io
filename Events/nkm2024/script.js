//date count down
var now = new Date();
var point = new Date("2024/10/14");
var countdown = Math.ceil((point.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
console.log(countdown);
if (countdown > -1) {
  var deadline = '応募締め切りまであと' + countdown + '日です。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
} else {
  var deadline = '応募は' + (-1 * countdown) + '日前に締め切られました。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
};
