'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

  // 1,DOM取得
  // ※まず「DOMツリー全体」に対してアクセスを行い、そこから目的の要素を探している。
  const allTabButtons = document.querySelectorAll('.js-tab__menu-button');
  // (動作してるか確認したい際はここにconsole.log(allTabButtons);記述)



  // 2,イベント付加
  // 取得した全てのタブメニューボタン要素にクリックイベント追加
  // click：ボタンがクリックされたときに発生するイベント。
  allTabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', tabSwitch);
  })



  // 3,関数作成
  // イベントの処理(タブ切り替え)
  // ※e は、イベントオブジェクト
  // イベントが発生したときにブラウザから自動的に渡され、イベントに関する情報を提供
  function tabSwitch(e) {
    // 4,クリックされた要素のデータ属性を取得
    // （e.currentTarget: イベントが現在処理されている要素（クリックされた要素））
    // （.dataset: data属性にアクセスするためのプロパティ）
    const clickedTabId = e.currentTarget.dataset.tab;



    // 5,クリックされた要素の親要素と、その子要素を取得
    // closestでクリックされた要素の親要素
    const clikedTabMenu = e.currentTarget.closest('.js-tab__menu');
    console.log(clikedTabMenu);
    // querySelectorAllで、子要素のjs-tab__menu-buttonをすべて取得
    const clickedAllTabButtons = clikedTabMenu.querySelectorAll('.js-tab__menu-button');
    console.log(clickedAllTabButtons);
    // クリックされた要素の親要素の兄弟要素の子要素を取得
    // nextElementSiblingで兄弟要素(次の隣の要素)を取得
    const clickedAllTabPanels = clikedTabMenu.nextElementSibling.querySelectorAll('.js-tab__panel-box');
    console.log(clickedAllTabPanels);



    // 6,クリックされたtabの同階層のmenuとpanelのクラスを削除
    // ※ここで一旦表示するクラス（tab__menu-selectedとtab__panel-visible）を全部削除する
    // ※他のクリックされてないtabには適応しない
    // forEach文で、clickedAllTabButtons（タブメニューボタン）から一つずつ取り出し、「tab__menu-selected」のクラスが付いていたら、削除する
    clickedAllTabButtons.forEach((clickedTabMenu) => {
      clickedTabMenu.classList.remove('tab__menu-selected');
    })
    // forEach文で、clickedAllTabPanels（タブパネル）から一つずつ取り出し、「tab__panel-visible」クラスを削除
    clickedAllTabPanels.forEach((clickedTabPanel) => {
      clickedTabPanel.classList.remove('tab__panel-visible');
    })



    // 7,クリックイベントが発生したメニューボタンのクラスに、tab__menu-selectedクラスを付加
    // ※ここでクリックされた箇所だけに表示するクラス（tab__menu-selectedとtab__panel-visible）をつける
    e.currentTarget.classList.add('tab__menu-selected');
    // forEach文で、clickedAllTabPanels（タブパネル）から一つずつ取り出し
    clickedAllTabPanels.forEach((clickedTabPanel) => {
    // クリックされたメニューボタンのデータ属性と、等しい値を持つパネルのクラス にtab__panel-visibleクラスを付加
    if (clickedTabPanel.dataset.panel ===  clickedTabId) {
      clickedTabPanel.classList.add('tab__panel-visible');
    }
  })

  }
}