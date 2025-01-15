// 1. .js-accordion-buttonクラスのボタン（質問部分.qa__question）を全部取得する。
//    これでアコーディオンのボタン全体を操作できるようにする。
const question = document.querySelectorAll(".js-accordion-button");



// 2. クリックされたボタンに応じてアコーディオンの開閉を制御する関数
const acToggle = (event) => {
  // 3. 現在クリックされたボタンの要素を取得
  // event.currentTargetはイベントが発生したhtml要素（この場合はボタン）
  const button = event.currentTarget;

  // 4. クリックされたボタンの親要素で、.js-accordionMenuクラスを持つ要素を探す
  // closest()メソッドは、現在の要素から親要素を遡って指定されたセレクタに一致する最初の要素を取得する
  // この場合、アコーディオン全体を包む要素（.js-accordionMenu）を取得する
  const accordionMenu = button.closest(".js-accordionMenu");
  // 5. 親要素 (.js-accordionMenu) 内にある .js-answer 要素を取得
  // querySelector()は指定したセレクタに一致する最初の子要素を取得する
  // ここでは、アコーディオンの「回答部分」にあたる .js-answer を取得する
  const answer = accordionMenu.querySelector(".js-answer");

  // 6. アコーディオンの開閉を切り替える
  // classList.toggle()を使って、.is-openクラスを追加・削除する
  // .is-openが追加されると「開く」動作になり、削除されると「閉じる」動作になる
  answer.classList.toggle("is-open");
  // 7. クリックされたボタン自体の状態を切り替える
  // ボタンの見た目（スタイル）を変化させるため、ボタンにも.is-openクラスを付けたり外したりする
  button.classList.toggle("is-open");

  // 8. アコーディオンの高さを設定
  // アコーディオンが開く場合（.is-openが付いた場合）はコンテンツの高さを計算して設定する
  // scrollHeightプロパティは、要素内のコンテンツ全体の高さを取得する
  // ※cssで実現しようとするとtransitionのheightが機能しないため。
  // ※普段はCSSで書く。必要な際のみ。
  if (answer.classList.contains("is-open")) {
    // 高さをコンテンツ全体の高さ（scrollHeight）に設定してアニメーションで開く
    answer.style.height = `${answer.scrollHeight}px`;
  } else {
    // アコーディオンを閉じる場合、高さを0に設定して非表示にする
    answer.style.height = 0;
  }
};



// 9. 関数完成後、全てのボタンに対してクリックイベントを設定する。
//    クリックされたら「acToggle」関数を呼び出す。
question.forEach(button => {
  button.addEventListener("click", acToggle);
});
