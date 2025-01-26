// セレクタ名（.js-pagetop）に一致する要素を取得
const topBtn = document.querySelector(".js-pagetop");

// まず、スクロールされたらボタンを表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.scrollY > 100) {
    topBtn.style.opacity = "1";
  } else if (window.scrollY < 100) {
    topBtn.style.opacity = "0";
  }
}

// そして、.js-pagetopをクリックしたら
topBtn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scrollTo(0, 0);
}