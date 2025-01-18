'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll('.tab__menu-item');
  // (動作してるか確認したい際はconsole.log(tabMenus);記述)

  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
  })

  // イベントの処理
  // ※e は、イベントオブジェクト
  // イベントが発生したときにブラウザから自動的に渡され、イベントに関する情報を提供
  function tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    // （e.currentTarget: イベントが現在処理されている要素（クリックされた要素））
    // （.dataset: data属性にアクセスするためのプロパティ）
    const tabTargetData = e.currentTarget.dataset.tab;



    // クリックされた要素の親要素と、その子要素を取得
    // closestで親要素取得
    const tabList = e.currentTarget.closest('.tab__menu');
    console.log(tabList);
    // querySelectorAllで、子要素のtab__menu-itemをすべて取得
    const tabItems = tabList.querySelectorAll('.tab__menu-item');
    console.log(tabItems);



    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems = tabList.
    // nextElementSiblingで兄弟要素を取得
    nextElementSibling.querySelectorAll('.tab__panel-box');
    console.log(tabPanelItems);



    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    // ※ここで一旦表示するクラス（is-activeとis-show）を全部削除する
    // forEach文で、tabItems（タブメニュー）から一つずつ取り出し、「is-active」のクラスが付いていたら、削除する
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove('is-active');
    })
    // forEach文で、tabPanelItems（タブパネル）から一つずつ取り出し、「is-show」クラスを削除
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove('is-show');
    })



    // クリックされたmenu要素にis-activeクラスを付加
    // ※ここでクリックされた箇所だけに表示するクラス（is-activeとis-show）をつける
    e.currentTarget.classList.add('is-active');
    // forEach文で、tabPanelItems（タブパネル）から一つずつ取り出し
    tabPanelItems.forEach((tabPanelItem) => {
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

  }
}