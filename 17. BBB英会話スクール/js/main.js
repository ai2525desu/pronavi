// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $("").on("click", function () {
    $("").toggleClass("");
  });
  // メニューのリンクをクリックした時
  $("").on("click", function () {
    $("").toggleClass("");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $("").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("");
      }
    });
  });
  // これを複数使う
});






