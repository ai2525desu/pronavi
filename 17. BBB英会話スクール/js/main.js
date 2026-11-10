// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
    /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
    // ハンバーガーメニューをクリックした時
    $(".header__toggle-btn").on("click", function () {
        $(".header").toggleClass("open");
        $(".header__nav").toggleClass("open");

        let expanded = $(this).attr("aria-expanded") === "true";

        $(this).attr("aria-expanded", !expanded);
        $(".header__nav").attr("aria-hidden", expanded);

        if (!expanded) {
            $(this).attr("aria-label", "メニューを閉じる");
        } else {
            $(this).attr("aria-label", "メニューを開く");
        }
    });
    // メニューのリンクをクリックした時
    $(".header__nav a").on("click", function () {
        // $("").toggleClass("");
        $(".header").removeClass("open");
        $(".header__toggle-btn").attr("aria-expanded", "false");
        $(".header__toggle-btn").attr("aria-label", "メニューを開く");
        $(".header__nav").attr("aria-hidden", "true");
    });

    /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
    // reasonのスライドインの挙動
    $(window).scroll(function () {
        $(".reason__list li").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("is-show");
            }
        });
    });
    // これを複数使う
    // feedbackのズームイン
    $(window).scroll(function () {
        $(".feedback__item").each(function () {
            let scroll = $(window).scrollTop();

            let target = $(this).offset().top;

            let windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("is-show");
            }
        });
    });
});
