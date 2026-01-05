const output_csv_element = document.querySelector('.output_csv');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
output_csv_element.appendChild(thead);
output_csv_element.appendChild(tbody);
let data_array = [];

// jsonの読み込み
function import_json(json_path) {
  fetch(json_path)
    .then((res) => {
      if (!res.ok) {
        console.log('正常にリクエストを処理できませんでした。');
      }
      return res.json();
    })
    .then((data) => {
      memorise_json(data);
    })
}
// jsonをグローバル変数に代入
function memorise_json(data) {
  console.log(data);
  data_array = data;
  first_draw();
}

//　検索とフィルタを読み取り
const refresh_button = document.querySelector('#refresh_table');
const and_search = document.querySelector('#and_search');
//OR検索
refresh_button.addEventListener('click', function() {
  const isIncludes = (arr, target) => arr.some(el => target.includes(el));
  refresh_table(isIncludes);
});
//AND検索
and_search.addEventListener('click', function() {
  const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));
  refresh_table(isSubset);
  //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every
});
// テーブルを更新
function refresh_table(isMatch) {
  // チェックボックスを読み取り
  const chk1 = document.form1.tag;
  let selectedTags = [];
  for (let i = 0; i < chk1.length; i++) {
    if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
      selectedTags.push(chk1[i].value);
    }
  }

  //現在のテーブルを削除
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // テーブル本体を作成
  draw_table(selectedTags, isMatch);

  document.getElementById('hit_channels').innerText = 'ヒットしたチャンネル数：' + tbody.children.length;
  //tablesorter更新
  $(".sort-table").trigger("update");
}

// テーブルを描画
function first_draw() {
  let selectedTags = [];

  // ヘッダーを作成
  const thead_tr = document.createElement('tr');
  for (var key in data_array[0]) {
    console.log(key + ': ' + data_array[0]);
    // th要素を生成
    var th = document.createElement('th');
    // th要素内にテキストを追加
    th.textContent = key;
    // th要素をtr要素の子要素に追加
    thead_tr.appendChild(th);
  }
  // tr要素をtable要素の子要素に追加
  thead.appendChild(thead_tr);

  // テーブル本体を作成
  draw_table(selectedTags);

  //channel quantity
  document.getElementById('channels').innerText = '調査済みチャンネル数：' + data_array.length;
  //tablesorter
  $(function () {
    $(".sort-table").tablesorter();
  });
}

// テーブル本体を作成
function draw_table(selectedTags, isMatch) {
  console.log(selectedTags);
  // リンク化の条件
  const urlRegex = /(https?:\/\/[^\s<>"]+)/g;
  for (var i = 0; i < data_array.length; i++) {// 列の処理
    
    if (selectedTags.length !== 0) {// 検索条件を満たしてい無ければ飛ばす。  
      if (isMatch(data_array[i]['tags'], selectedTags) === false) {
        continue;
      }
    }
    // tr要素を生成
    var tr = document.createElement('tr');
    tr.id = 'no' + (i + 1);
    // th・td部分のループ
    for (var key in data_array[0]) {// 行の処理
      // td要素を生成
      var td = document.createElement('td');
      // td要素内にテキストを追加
      td.innerHTML = data_array[i][key];
      // td内が
      td.innerHTML = td.innerHTML.replace(urlRegex, url => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">開く</a>`;
      });
      // td要素をtr要素の子要素に追加
      tr.appendChild(td);
    }
    // tr要素をtable要素の子要素に追加
    tbody.appendChild(tr);
  }
}

//select research date form url query parameter
const params = new URLSearchParams(window.location.search);
const target = document.getElementById('researchDate');

if (params.has("date") == true) {
  target.innerText = "調査日時：" + params.get("date");
  let json_path = 'https://zosen.nnz-design.com/Statistics/createrList/createrList_' + params.get("date") + '.json';
  import_json(json_path);  
} else {
  const latestDate = document.getElementById("latest").href;
  window.location.href = latestDate;
  // target.innerText = "調査日時が選択されていません。";
}
// 古い調査ではタグ検索を隠す
console.log(Number(params.get("date")));
if (Number(params.get("date")) < 20230000 ) {
  document.getElementById('filter__container').style.display = "none";
}

//reference: freelance321.com/javascript/load-csv/
//reference: www.ipentec.com/document/javascript-get-url-parameter
//reference: qiita.com/kunihiro9216/items/15339509604d66fdb961
//reference: itsakura.com/js-checkbox
//reference(array includes): qiita.com/mtoutside/items/e34e06c674a8e6623ba4
