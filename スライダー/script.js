'use strict';

// 定数を定義
const autoplayDelayInitial = 5000; // 初期の自動再生待機時間（ミリ秒）
const autoplayDelayAfterFirstSlide = 4500; // 最初のスライド以外での自動再生待機時間（ミリ秒）
const circleRadius = 11; // 円の半径（SVG）
const paginationBulletWidth = 25; // ページネーションボタンの幅
const paginationBulletHeight = 25; // ページネーションボタンの高さ

// Swiperインスタンスを作成し、circlePaginationSwiperクラスのスライダーを適用
const circlePaginationSwiper = new Swiper('.circlePaginationSlider', {
    loop: true, // スライドをループさせる（最後のスライドの次は最初に戻る）
    speed: 500, // スライドの切り替え速度（ミリ秒単位）
    effect: 'fade', // フェードアニメーションを適用
    autoplay: {
        delay: autoplayDelayInitial, // 自動再生の待機時間（5秒）
        disableOnInteraction: false, // ユーザー操作後も自動再生を続行
    },
    pagination: {
        el: '.swiper-pagination', // ページネーションの要素を指定
        clickable: true, // ページネーションをクリック可能にする
        renderBullet: function (index, className) { // ページネーションのカスタマイズ
            let pageNumber = index + 1; // インデックスを1から始まるように調整
            return (
                '<div class="' + className + ' circle-pagination' + '"><div class="circle-pagination__inner"><svg width="' + paginationBulletWidth + '" height="' + paginationBulletHeight + '"><circle cx="' + (paginationBulletWidth / 2) + '" cy="' + (paginationBulletHeight / 2) + '" r="' + circleRadius + '"></circle></svg>' + '0' + pageNumber + '</div></div>'
            ); // ページネーションボタンをSVG円と番号でデザイン
        },
    },
    on: {
        slideChange: function () { // スライドが変更されたときのイベント
            if (this.realIndex > 0) { // 最初のスライド以外のとき
                this.params.autoplay.delay = autoplayDelayAfterFirstSlide; // 自動再生の間隔を4.5秒に変更
            }
        },
    },
});
