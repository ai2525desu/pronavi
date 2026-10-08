// 穴埋め形式です。空いている個所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".header__toggle-btn").on("click", function () { 
    if ($("header").hasClass("open")) {
      $("header").removeClass("open");
      $(this).attr("aria-expanded", "false");
      $(this).attr("aria-label", "メニューを開く");
    } else { 
      $("header").addClass("open");
      $(this).attr("aria-expanded", "true");
      $(this).attr("aria-label", "メニューを閉じる");
    }
  });
  $(".header__mask").on("click", function () {
      $("header").removeClass("open");
      $(".header__toggle-btn").attr("aria-expanded", "false");
      $(".header__toggle-btn").attr("aria-label", "メニューを開く");
  });
    
  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  .hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($().scrollTop() > ) {
      // トップに戻るボタンを表示する
      .fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      .fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
    .click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop:  }, );

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });
});
