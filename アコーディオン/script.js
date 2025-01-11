// 1. .js-acクラスのボタン（質問部分.qa__question）を全部取得する。
//    これでアコーディオンのボタン全体を操作できるようにする。
const question = document.querySelectorAll(".js-ac");

// 2. ボタンがクリックされた時に開閉を制御する関数を作る。
function acToggle() {
  // this：現在の要素(5.で選択されるクリックされたボタン)
  // closestメソッドを使うことで、現在の要素（this）から親要素を遡って、
  // その親要素の中でqa__item（項目部分.qa__item）というクラスを持つ最初の要素を要素を返す。

  const item = this.closest(".qa__item"); // クリックされたボタンの親要素 .qa__item を取得
  // 次に、その親要素内で .qa__answer クラスを持つ要素を取得。
  // .qa__item の中にある .qa__answer を選択することで、アコーディオンの回答部分をターゲットにする。
  const answer = item.querySelector(".qa__answer"); // 親要素内の .qa__answer を取得

  // 3. コンテンツを開け閉めする。
  // is-openクラスで表示/非表示を切り替え。
  // toggle：あるクラスが要素に存在する場合はそのクラスを削除し、存在しない場合は追加するとメソッド。
  answer.classList.toggle("is-open");

  // 4. ボタン自体も開閉状態を切り替える。
  // 見た目に変化をつけるためにクラスを追加/削除。
  this.classList.toggle('is-open');
}

// 5. 関数完成後、全てのボタンに対してクリックイベントを設定する。
//    クリックされたら「acToggle」関数を呼び出す。
question.forEach(button => {
  button.addEventListener("click", acToggle);
});
