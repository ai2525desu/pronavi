$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // //下記も同様の意味となります。
  //   $(".toggle_btn").on("click", function () {
  //     $("header").toggleClass("open");
  //   });




  // メニューが表示されている時に画面をクリックした場合
  $('.mask').on('click', function () {
    // openクラスを削除して、メニューを閉じる
    $('header').removeClass('open');
  });
});







