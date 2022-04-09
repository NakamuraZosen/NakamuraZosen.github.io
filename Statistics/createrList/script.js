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
  //append thead and tbody
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  output_csv_element.appendChild(thead);
  output_csv_element.appendChild(tbody);

  //create thead  
  const thead_tr = document.createElement('tr');
  thead.appendChild(thead_tr);
  data_array[0].forEach(element => {
    let th = document.createElement('th');
    th.innerText = element
    thead_tr.appendChild(th);
  });

  //create tbody
  data_array.shift();

  data_array.forEach((elements,index) => {
    let tr = document.createElement('tr');
    tr.id = 'no' + (index + 1);
    tbody.appendChild(tr);

    elements.forEach(element => {
      let td = document.createElement('td');
      if (element.startsWith('https://') === true) {
        let anchor = document.createElement('a');
        anchor.href = element
        anchor.target = '_blank'
        anchor.innerText = element
        td.appendChild(anchor);
      } else {
        td.innerText = element
      };
        tr.appendChild(td);
    });
  });
  //channel quantity
  document.getElementById('channels').innerText = '調査済みチャンネル数：' + data_array.length;
  //tablesorter
  $(function() {
    $(".sort-table").tablesorter();
  });
}

//select research date form url query parameter
const params = new URLSearchParams(window.location.search);
const target = document.getElementById('researchDate');
if (params.has("date") == true) {
  target.innerHTML = "調査日時：" + params.get("date");
  import_csv('https://NakamuraZosen.github.io/Statistics/createrList/createrList_' + params.get("date") + '.csv');
} else {
  target.innerHTML = "調査日時が選択されていません。";
}

//reference: freelance321.com/javascript/load-csv/
//reference: www.ipentec.com/document/javascript-get-url-parameter
