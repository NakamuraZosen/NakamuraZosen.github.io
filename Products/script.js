const releases = document.getElementById('releases').innerHTML;

function createButton(obj) {
  const dlButton = document.getElementById("dlButton");
  const url = obj["assets"][0]["browser_download_url"];
  console.log(obj["assets"][0]["browser_download_url"]);

  dlButton.setAttribute('href', url);
}

function populateData(obj) {
  const dlStatus = document.getElementById('dlStatus');
  console.log(obj["assets"][0]["name"]);

  let newElement = document.createElement("li");
  newElement.textContent = "ファイル名: " + obj["assets"][0]["name"];
  dlStatus.appendChild(newElement);

  let newNewElement = document.createElement("li");
  newNewElement.textContent = "ダウンロード数: " + obj["assets"][0]["download_count"];
  dlStatus.appendChild(newNewElement);
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
