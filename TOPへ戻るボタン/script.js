// セレクタ名（.js-pagetop）に一致する要素を取得
// ページトップに戻るボタンを取得
const topBtn = document.querySelector(".js-pagetop");

// debounce関数の定義（短時間に連続して呼び出される関数の実行回数を制御）
// 指定した時間（delay）が経過するまで新たな呼び出しを抑制し、最後の処理だけを実行
const debounce = (func, delay) => {
  let timeout; // タイマーIDを格納する変数
  return () => {
    // 既存のタイマーがあればクリア（リセット）
    clearTimeout(timeout);
    // 新しくタイマーをセットし、指定時間後に関数を実行
    timeout = setTimeout(func, delay);
  };
};

// スクロールイベントの処理（ページのスクロール位置に応じてボタンの表示を切り替える）
const scrollEvent = () => {
  // 画面のスクロール量（window.scrollY）が100pxを超えた場合
  if (window.scrollY > 100) {
    topBtn.style.opacity = "1";  // ボタンを表示（不透明にする）
    console.log("ボタンを表示しました");  // デバッグ用メッセージ（開発者向け）
  } else {
    topBtn.style.opacity = "0";  // ボタンを非表示（透明にする）
    console.log("ボタンを非表示にしました");  // デバッグ用メッセージ（開発者向け）
  }
};

// スクロールイベントを監視し、debounceを適用（200msの遅延）
// 連続スクロール時に処理を最適化し、負荷を軽減
// 200ms（0.2秒）は、ユーザー体験（UX）を損なわない程度の遅延
// ※必ず使う関数を宣言したあとに記述。未定義（undefined）のまま処理されるから
// ※JavaScriptの「変数の巻き上げ（Hoisting）」について調べる。
window.addEventListener("scroll", debounce(scrollEvent, 200));

// クリックイベントを登録（ボタンがクリックされたとき、ページを最上部へ移動）
topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);  // ページの最上部（座標0,0）へスクロール
});
