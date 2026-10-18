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
    const pageTop = $("#to-top");
    // 始めの穴埋めはletだったが、自身でかんがえてconstに変更->letでは再代入することができるが、今回の pageTop は再代入せず、取得した要素に対して操作を行うため const が適しています
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pageTop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pageTop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            pageTop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pageTop.click(function () {
        // 0.5秒かけてページトップへ移動
        $("html,body").animate({ scrollTop: 0 }, 500);

        // イベントが親要素へ伝播しないための記述
        // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
        return false;
        // return false; の意味（jQueryのイベントハンドラー内）
        // 1. aタグのデフォルト動作（href="#" による移動）をキャンセルする
        // 2. イベントの親要素への伝播（バブリング）を停止する
        //
        // 親要素への伝播を止める必要がなく、
        // aタグの標準動作だけをキャンセルしたい場合は、e.preventDefault(); を使用すればよい
    });
});
