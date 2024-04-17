// 定義値
const clicked_announce = 'ボタンをクリックしました', change_text_id = 'text';
// タグを取得
const change_btn = document.getElementById('btn');
change_btn.addEventListener('click', ()=>{
  const change_txt = document.getElementById(change_text_id);
  change_txt.textContent=clicked_announce;
});
