// ===============================
// 設定（マジックナンバーを変数化）
// ===============================
const scrollThreshold = 100; // ボタンを表示するスクロール位置（px）
const debounceDelay = 200;   // debounceの遅延時間（ms）

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
  if (window.scrollY > scrollThreshold) {
    topBtn.classList.add("is-show");  // 表示
    console.log(`ボタンを表示しました（${scrollThreshold}px超え）`);  // デバッグ用メッセージ（開発者向け）
  } else {
    topBtn.classList.remove("is-show"); // 非表示
    console.log(`ボタンを非表示にしました（${scrollThreshold}px以下）`);  // デバッグ用メッセージ（開発者向け）
  }
};

// スクロールイベントを監視し、debounceを適用（200msの遅延）
// 連続スクロール時に処理を最適化し、負荷を軽減
// 20ms（0.02秒）は、ユーザー体験（UX）を損なわない程度の遅延
// ※必ず使う関数を宣言したあとに記述。未定義（undefined）のまま処理されるから
// ※JavaScriptの「変数の巻き上げ（Hoisting）」について調べる。
window.addEventListener("scroll", debounce(scrollEvent, debounceDelay));

