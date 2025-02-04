document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",          // ループスライダー
    perPage: 3,            // 1画面に3枚表示
    focus: "center",       // 常に中央にフォーカス
    pagination: true,      // ドットナビゲーションを表示
    autoplay: true,        // 自動再生を有効にする
    interval: 10000,       // 10秒間隔で自動スクロール
    breakpoints: {
      768: { perPage: 1 }  // 画面幅768px以下では1枚表示
    }
  });

  splide.on("mounted move", function () {
    const pages = document.querySelectorAll(".splide__pagination__page");
    const progressRings = document.querySelectorAll(".progress-ring");
    
    pages.forEach((page, index) => {
      // すべての進行状況リングをリセット
      const ring = page.querySelector(".progress-ring");
      if (!ring) {
        const newRing = document.createElement("span");
        newRing.classList.add("progress-ring");
        page.appendChild(newRing);
      }
    });
  });

  splide.mount();
});
