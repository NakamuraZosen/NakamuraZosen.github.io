const output_csv_element = document.querySelector('.output_csv');

// CSVの読み込み
function import_csv(csv_path) {
  fetch(csv_path)
    .then((res) => {
      if (!res.ok) {
        console.log('正常にリクエストを処理できませんでした。');
      }
      return res.text();
    })
    .then((csv_data) => {
      convert_array(csv_data);
    })
    .catch((error) => {
      console.log('エラーが発生しました。');
    })
}

// テキストデータを配列に変換
function convert_array(csv_data) {
  let data_array = [];
  const data_string = csv_data.split('\n');
  for (let i = 0; i < data_string.length-1; i++) {
    data_array[i] = data_string[i].split(',');
  }
  //cancel auto generated break on gituhb; add lengh-1
  draw_table(data_array);
}

// テーブル描画
function draw_table(data_array) {
  data_array.forEach((elements,index) => {
    const tr = document.createElement('tr');
    tr.id = 'no' + (index + 1);
    output_csv_element.appendChild(tr);
    elements.forEach(element => {
      let td = document.createElement('td');
      td.innerText = element
      tr.appendChild(td);
    });
  });
  //tablesorter
  $(function() {
    $(".sort-table").tablesorter();
  });
}

import_csv('https://NakamuraZosen.github.io/Products/library/shipsLibrary.csv');

//reference: freelance321.com/javascript/load-csv/

//modal controller of iframe
const closeButton = document.getElementById('iframeModal__closeButton');
const modalBackground = document.getElementById('iframeModal__background');

document.addEventListener('click', function(e) {
  if (e.target.matches('td')) {
    //avoid matches closebutton
    var shipNo = e.target.parentNode.id;
    modalBackground.style.display = 'flex';
    var imgElement = document.createElement('img');
    imgElement.src = shipNo + '.webp';
    imgElement.alt = shipNo + 'の画像はありません。';
    imgElement.title = shipNo;
    imgElement.id = 'img';
    closeButton.before(imgElement);
  };
});

modalBackground.addEventListener('click', closeModal);
function closeModal() {
  document.getElementById('img').remove();
  modalBackground.style.display = 'none';
};
