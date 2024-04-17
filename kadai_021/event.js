// 定義値
const clicked_announce = 'ボタンをクリックしました', change_text_id = 'text';
// 2秒後(2000ミリ秒)
const late_response = 2000;
// タグを取得
const change_btn = document.getElementById('btn');
change_btn.addEventListener('click', ()=>{
  const change_txt = document.getElementById(change_text_id);
  setTimeout(()=>{ change_txt.textContent=clicked_announce; }, late_response);
});