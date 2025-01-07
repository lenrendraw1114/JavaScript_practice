"use strict";

$(document).ready(function () {

  /** ========================
  * モーダル: 今回の課題
  ========================= */

  const modalControls = [
    {
      closeButton: document.querySelector('#modal1 .close-button'),
      close: document.querySelector('#modal1 .close'),
      modal: document.getElementById('modal1'),
      mask: document.getElementById('mask1'),
      newsContentBox: document.getElementById('newsContentBox1'),
    },
    {
      closeButton: document.querySelector('#modal2 .close-button'),
      close: document.querySelector('#modal2 .close'),
      modal: document.getElementById('modal2'),
      mask: document.getElementById('mask2'),
      newsContentBox: document.getElementById('newsContentBox2'),
    },
    {
      closeButton: document.querySelector('#modal3 .close-button'),
      close: document.querySelector('#modal3 .close'),
      modal: document.getElementById('modal3'),
      mask: document.getElementById('mask3'),
      newsContentBox: document.getElementById('newsContentBox3'),
    }
  ];

  modalControls.forEach(control => {
    // 要素が存在するか確認（モーダルがないページで他のJavaScriptが停止しないように）
    if (control.newsContentBox && control.modal && control.mask) {
      // モーダルを表示
      control.newsContentBox.addEventListener('click', function () {
        control.modal.classList.remove('hidden');
        control.mask.classList.remove('hidden');
      });

      // close-buttonでモーダルを閉じる
      if (control.closeButton) {
        control.closeButton.addEventListener('click', function (event) {
          event.stopPropagation();
          control.modal.classList.add('hidden');
          control.mask.classList.add('hidden');
        });
      }

      // closeでモーダルを閉じる
      if (control.close) {
        control.close.addEventListener('click', function (event) {
          event.stopPropagation();
          control.modal.classList.add('hidden');
          control.mask.classList.add('hidden');
        });
      }
    }
  });






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
});
