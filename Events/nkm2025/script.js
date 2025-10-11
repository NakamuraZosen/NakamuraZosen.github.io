//date count down
var now = new Date();
var point = new Date("2025/10/14");
var countdown = Math.ceil((point.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
console.log(countdown);
if (countdown > -1) {
  var deadline = '応募締め切りまであと' + countdown + '日です。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
} else {
  var deadline = '応募は' + (-1 * countdown) + '日前に締め切られました。';
  document.getElementById('deadline').insertAdjacentHTML('afterbegin',deadline);
};

// download
const releases = document.getElementById('releases').innerHTML;
const indexes = document.getElementById('index').textContent.split(",");

function createButton(obj) {
  console.log(obj);
  const dlButton = document.querySelectorAll('.dlButton');//getElementsByClassName使用不可
  console.log(dlButton);
  console.log(indexes);

  dlButton.forEach((item, i) => {
    const j = indexes[i]; //内容が0のときinnerHTML, textContentなど使用不可
    console.log(j);
    const url = obj["assets"][j]["browser_download_url"];
    console.log(obj["assets"][j]["browser_download_url"]);

    item.setAttribute('href', url);
  });
}

function populateData(obj) {
  const dlStatus = document.getElementById('dlStatus');

  indexes.forEach((item, i) => {
    const newElement = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = obj["assets"][item]["name"];

    const td2 = document.createElement("td");
    td2.textContent = obj["assets"][item]["download_count"];

    newElement.appendChild(td1);
    newElement.appendChild(td2);
    dlStatus.appendChild(newElement);
  });
}

async function populate() {
  const requestURL = "https://api.github.com/repos/NakamuraZosen/Scematics-distribution/releases/tags/" + releases;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();

  createButton(data);
  populateData(data);
};
populate();
// references: https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON
// https://github.com/NakamuraZosen/Scematics-distribution/releases/download/v1.2.0/Full.ISE_v2.schematic
// https://api.github.com/repos/NakamuraZosen/Scematics-distribution/releases/tags/v1.2.0
