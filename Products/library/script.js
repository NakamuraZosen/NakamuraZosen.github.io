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

import_csv('https://zosen.nnz-design.com/Products/library/shipsLibrary.csv');

//reference: freelance321.com/javascript/load-csv/

//modal controller
const dialog = document.querySelector("dialog");
// When Open 
document.addEventListener('click', function(e) {
  //avoid matches closebutton
  if (e.target.matches('td')) {
    var clickedTr = e.target.parentNode;
    //load ship name
    var shipName = clickedTr.children[1].textContent;
    var shipClass = clickedTr.children[3].textContent;
    //load img
    var shipNo = clickedTr.id;
    var imgElement = document.createElement('img');
    imgElement.src = './img/' + shipNo + '.webp';
    imgElement.alt = shipName + '級' + shipClass + 'の画像';
    imgElement.title = shipName + '級' + shipClass;
    imgElement.id = 'img';
    //post
    document.getElementById('shipName').insertAdjacentText('afterbegin',shipName + '級' + shipClass);
    closeButton.before(imgElement);
    // show modal
    dialog.showModal();
  };
});

// When Close 
const closeButton = document.querySelector("dialog button");
// ［閉じる］ボタンでダイアログを閉じる
closeButton.addEventListener("click", () => {
  dialog.close();
});
// 閉じられたら内容を削除する。ボタンのクリックで発動させると、それ以外の方法で閉じた場合に削除できない。
dialog.addEventListener("close", () => {
  document.getElementById('img').remove();
  document.getElementById('shipName').textContent = '';
});
