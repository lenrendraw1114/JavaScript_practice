"use strict";

$(document).ready(function () {

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

  // ハンバーガーメニューのクリックイベント
  $(".hamburger_force_clicked").click(function () {
    $(".hamburger_action_clicked").toggleClass('_emergent');
  });

  // header__inner のスクロール追従
  const headerInner = document.querySelector('.header__inner');
  if (headerInner) {
    const headerOffset = headerInner.offsetTop;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > headerOffset) {
        headerInner.classList.add('fixed');
      } else {
        headerInner.classList.remove('fixed');
      }
    });
  }

  // アコーディオンのクリックイベント
  $(".header__box").click(function () {
    var headerBox = $(this);
    var detail = headerBox.find(".header__detail");
    var plus = headerBox.find(".header__btn_plus");
    var minus = headerBox.find(".header__btn_minus");
  
    if (detail.is(":visible")) {
      detail.slideUp(); // 詳細を非表示
      plus.show(); // プラスボタンを表示
      minus.hide(); // マイナスボタンを非表示
    } else {
      detail.slideDown(); // 詳細を表示
      plus.hide(); // プラスボタンを非表示
      minus.show(); // マイナスボタンを表示
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
