"use strict";

  /** ========================
  * モーダル: 今回の課題
  ========================= */

  const modalButton = document.querySelector(".js-modal-button")
  const modalContent = document.querySelector(".js-modal-contents")
  const modalMask = document.querySelector(".js-modal-mask")
  const modalClose = document.querySelectorAll(".js-close-button")
  const body = document.querySelector("body")
  
  modalButton.addEventListener("click", () => {
    modalContent.classList.toggle("is-modal-open")
    modalMask.classList.toggle("is-modal-open")
    body.classList.toggle("is-modal-open")
  })
  
  // 複数件取れるため、繰り返し処理で中の要素に対いてaddEventListenerする
  modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalContent.classList.remove("is-modal-open")
      modalMask.classList.remove("is-modal-open")
      body.classList.remove("is-modal-open")
    })
  })
  
  modalMask.addEventListener("click", () => {
    modalContent.classList.remove("is-modal-open")
    modalMask.classList.remove("is-modal-open")
    body.classList.remove("is-modal-open")
  })

  /* モーダル終了 */







  /** ========================
 * フェードイン効果: 特定のクラスにのみ適用
 ========================= */
  const fadeSections = $(".fade-section"); // クラス "fade-section" を持つセクションだけを取得

  // 初期状態をJavaScriptで設定
  fadeSections.css({
    opacity: 0,
    transform: "translateY(20px)", // 下からスライドする効果
  });

  // スクロール時にフェードインを実行
  $(window).on("scroll", function () {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    fadeSections.each(function () {
      const sectionTop = $(this).offset().top;
      if (scrollTop + windowHeight > sectionTop + 50) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)", // 元の位置に戻す
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        });
      }
    });
  });
