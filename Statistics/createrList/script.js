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
  draw_table();
}

//　検索とフィルタを読み取り
const refresh_button = document.querySelector('#refresh_table');
refresh_button.addEventListener('click', refresh_table);
// テーブルを更新
function refresh_table() {
  // チェックボックスを読み取り
  const chk1 = document.form1.tag;
  let selectedTags = [];
  for (let i = 0; i < chk1.length; i++) {
    if (chk1[i].checked) {//(chk1[i].checked === true)と同じ
      selectedTags.push(chk1[i].value);
    }
  }
  console.log('filter refreshed: ');
  console.log(selectedTags);

  //現在のテーブルを削除
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // テーブル本体を作成
  for (var i = 0; i < data_array.length; i++) {
    // チェックされている場合、タグが選択されてい無ければ飛ばす。
    if (selectedTags.length !== 0) {
      const isIncludes = (arr, target) => arr.some(el => target.includes(el));
      if (isIncludes(data_array[i]['tags'], selectedTags) === false) {
        console.log('skipped');
        continue;
      }
    }
    // tr要素を生成
    var tr = document.createElement('tr');
    tr.id = 'no' + (i + 1);
    // th・td部分のループ
    for (var key in data_array[0]) {
      // td要素を生成
      var td = document.createElement('td');
      // td要素内にテキストを追加
      // idならリンク化
      if (key === "リンク") {
        let anchor = document.createElement('a');
        anchor.href = data_array[i][key]
        anchor.target = '_blank'
        anchor.innerText = key
        td.appendChild(anchor);
      } else {
        //　リンクでなければ追加
        td.textContent = data_array[i][key];
      }
      // td要素をtr要素の子要素に追加
      tr.appendChild(td);
    }
    // tr要素をtable要素の子要素に追加
    tbody.appendChild(tr);
  }
  document.getElementById('hit_channels').innerText = 'ヒットしたチャンネル数：' + tbody.children.length;
  //tablesorter更新
  $(".sort-table").trigger("update");
}

// テーブルを描画
function draw_table() {

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
  for (var i = 0; i < data_array.length; i++) {
    // tr要素を生成
    var tr = document.createElement('tr');
    tr.id = 'no' + (i + 1);
    // th・td部分のループ
    for (var key in data_array[0]) {
      // td要素を生成
      var td = document.createElement('td');
      // td要素内にテキストを追加
      // idならリンク化
      if (key === "リンク") {
        let anchor = document.createElement('a');
        anchor.href = data_array[i][key]
        anchor.target = '_blank'
        anchor.innerText = key
        td.appendChild(anchor);
      } else {
        //　リンクでなければ追加
        td.textContent = data_array[i][key];
      }
      // td要素をtr要素の子要素に追加
      tr.appendChild(td);
    }
    // tr要素をtable要素の子要素に追加
    tbody.appendChild(tr);
  }

  //channel quantity
  document.getElementById('channels').innerText = '調査済みチャンネル数：' + data_array.length;
  //tablesorter
  $(function () {
    $(".sort-table").tablesorter();
  });
}




//select research date form url query parameter
const params = new URLSearchParams(window.location.search);
const target = document.getElementById('researchDate');

if (params.has("date") == true) {
  target.innerText = "調査日時：" + params.get("date");
  let json_path = 'https://zosen.nnz-design.com/Statistics/createrList/createrList_' + params.get("date") + '.json';
  import_json(json_path);  
} else {
  target.innerText = "調査日時が選択されていません。";
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
