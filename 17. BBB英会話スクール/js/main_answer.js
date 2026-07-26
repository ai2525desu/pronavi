$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#navi a").on("click", function () {
    $("header").toggleClass("open");
  });

  /*=================================================
  画面に表示されたタイミングで処理を実行
  ===================================================*/

  // BBBが選ばれる理由

  $(window).scroll(function () {
    $(".inview-slide-left").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-left");
      }
    });
  });

  $(window).scroll(function () {

    $(".inview-slide-right").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-right");
      }
    });
  });

  // 受講生の声（ふきだし）

  $(window).scroll(function () {

    $(".inview-balloon").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("balloon");
      }
    });
  });



  // 配列とfor文を使えば簡略化できる
  // $(window).scroll(function () {
  //   var classes = ["inview-slide-left", "inview-slide-right", "inview-balloon"];
  //   var addClasses = ["slide-left", "slide-right", "balloon"];

  //   var scroll = $(window).scrollTop();
  //   var windowHeight = $(window).height();

  //   for (var i = 0; i < classes.length; i++) {
  //     $("." + classes[i]).each(function () {
  //       var target = $(this).offset().top;
  //       if (scroll > target - windowHeight + $(this).outerHeight()) {
  //         $(this).addClass(addClasss[i]);
  //       }
  //     });
  //   }
  // });

});