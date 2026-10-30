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
    $(".header__mask, .header__nav a").on("click", function () {
        $("header").removeClass("open");
        $(".header__toggle-btn").attr("aria-expanded", "false");
        $(".header__toggle-btn").attr("aria-label", "メニューを開く");
    });

    /*=================================================
  スムーススクロール
  ===================================================*/
    $(function () {
        // ネガティブマージンでのタイトルとのかぶりの解消による他のレイアウトへのデメリットを無くすためにJQueryにてヘッダーの高さ分を引くように設定することで自動的にレイアウトが整い、タイトルとのかぶりを無くすことができる
        const headerHeight = 80;
        $('a[href^="#"]').click(function () {
            let href = $(this).attr("href");
            let target = $(href == "#" || href == "" ? "html" : href);
            let position = target.offset().top - headerHeight;
            $("html, body").animate({ scrollTop: position }, 600, "swing");
            return false;
        });
    });

    /*=================================================
  PICK UP スライダー
  ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $(".pick-up__slick-list").slick({
        // 左右の矢印の表示
        arrows: false,
        // センターモード（両端見切れ状態になるかどうか）
        centerMode: true,
        // センターモード時に見切れたコンテンツの幅指定
        centerPadding: "100px",
        // 1スライダーの表示数
        slidesToShow: 3,
        // 自動再生
        autoplay: true,
        // 再生速度
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".feature__article-image img").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});
