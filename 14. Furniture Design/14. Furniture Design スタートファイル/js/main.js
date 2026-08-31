// 全てのページ共通のheaderとfooterを読み込む
$(function () {
  // この中のパスは読み込み先のindex.html等のファイルから見たパスを指定
    $("#header").load("layouts/header.html");
    $("#footer").load("layouts/footer.html");
});

// 穴埋め形式です。空いている箇所を埋めて実装してください
$(function () {
    /*=================================================
  ハンバーガーメニュー
  ===================================================*/
    $("").on("click", function () {
        // headerにopenクラスがあるか判定する
        if ($("").hasClass("")) {
            // headerにopenクラスが存在する場合、openクラスを削除する
            $("").removeClass("");
        } else {
            // headerにopenクラスが存在しない場合、openクラスを加える
            $("").addClass("");
        }
    });

    // メニューが表示されている時に画面をクリックした場合
    $("").on("click", function () {
        $("").removeClass("");
    });
});
