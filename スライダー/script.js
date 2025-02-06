// HTMLの読み込みが完了したら、スクリプトを実行
document.addEventListener("DOMContentLoaded", () => {
  
  /*** === ①スライダーの動作設定 ===
  * スライダーの動作を決めるための設定値（定数）を定義する*/

  // スライドが自動で切り替わるまでの時間（ミリ秒単位で設定）
  const slideIntervalMs = 4000; // 4秒ごとに次のスライドへ
  // 画面サイズがこの値（ピクセル）以下になったら、モバイル用の設定に切り替える
  const mobileBreakpointPx = 768; // 768px以下はスマートフォン表示
  // 通常の画面サイズ（PCやタブレット）で一度に表示するスライドの数
  const slidesPerPageDefault = 3; // 3枚のスライドを同時に表示
  // モバイル画面サイズ（スマートフォン）で一度に表示するスライドの数
  const slidesPerPageMobile = 1; // 1枚ずつ表示

  /*** === ②Splide.js スライダーの初期化 ===
  * 「Splide」というスライダーライブラリを使って、動くスライダーを作成する*/

  const splide = new Splide(".splide", {
    type: "loop", // スライドをループさせる（最後のスライドの次に最初のスライドへ戻る）
    perPage: slidesPerPageDefault, // 初期表示時に表示するスライドの数を設定
    focus: "center", // 現在のスライドを中央に配置する
    pagination: true, // ページネーション（スライドの下のドットボタン）を表示する
    autoplay: true, // スライドを自動的に切り替える
    interval: slideIntervalMs, // 自動スライドの切り替え間隔を設定
    breakpoints: {
      // 画面幅が `mobileBreakpointPx` 以下になった場合の設定
      [mobileBreakpointPx]: {
        perPage: slidesPerPageMobile // モバイルでは1枚ずつスライドを表示
      }
    }
  });

  /*** === ③タイマーリング（進行状況を示す円）を追加する関数 ===
  * 各ページネーション（スライド下のドットボタン）に「タイマーリング」という
  * 円形のアニメーションを追加し、スライドの進行状況を視覚的に表示する*/

  const updateTimerRing = () => {
    // すべてのページネーション（ドットボタン）を取得する
    document.querySelectorAll(".splide__pagination__page").forEach((paginationDot) => {
      // すでにタイマーリングが追加されているか確認する
      if (!paginationDot.querySelector(".timerRing")) {
        // タイマーリング用の要素を作成する
        const timerRing = document.createElement("span"); // <span>タグを作成
        timerRing.classList.add("timerRing"); // 作成したタグにクラスを付与（デザイン用）
        paginationDot.appendChild(timerRing); // 作成した要素をドットボタンの中に追加
      }
    });
  };

  /**
   * === スライダーの動作時にタイマーリングを更新する ===
   * 1. スライダーが初めて画面に表示されたとき（mountedイベント）
   * 2. スライドが移動したとき（moveイベント）
   * → 上記のタイミングで、タイマーリングを追加する*/

  splide.on("mounted move", updateTimerRing);

  // スライダーを起動して、画面に適用する
  splide.mount();
});
