// 各 .js-box 要素を初期位置（y=-100, 回転=-30度, 透明）から

// 箱がポップに跳ねる＆回転するアニメーション
// アニメーションで y=0, 回転=0度, 透明度=1 にする
gsap.fromTo(
  ".js-box", // 対象の要素（複数選択可）
  { 
    y: -100, // Y軸方向に上へ100pxずらす（開始位置）
    rotation: -30, // -30度回転させた状態から開始
    opacity: 0 // 最初は透明
  },
  {
    y: 0, // 最終的に元の位置に戻す
    rotation: 0, // 回転も元に戻す
    opacity: 1, // 透明度を完全に表示
    duration: 1, // アニメーション時間（1秒）
    ease: "elastic.out(1, 0.5)", // バネのような動きで戻る
    stagger: 0.2, // 0.2秒ずつずれて順番にアニメーション実行
  }
);

// 箱がクリックで弾けるエフェクト
// すべての .js-box に対してクリックイベントを設定
document.querySelectorAll(".js-box").forEach((box) => {
  box.addEventListener("click", () => {
    gsap.to(box, { // クリックされたボックスに対してアニメーション
      scale: Math.random() * 2 + 1, // ランダムなサイズに拡大（1〜3倍）
      rotation: Math.random() * 360, // 0〜360度のランダム回転
      opacity: 0, // 完全に透明にする（消える）
      duration: 0.8, // アニメーション時間（0.8秒）
      ease: "back.in(1.5)", // 勢いよく縮むような動き
    });
  });
});
