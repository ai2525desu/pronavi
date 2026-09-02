// 全てのページ共通のheaderとfooterを読み込む＋header内部のハンバーガーメニューの挙動処理
$(function () {
    // この中のパスは読み込み先のindex.html等のファイルから見たパスを指定
    $("#header").load("layouts/header.html", function () {
        /*=================================================
  ハンバーガーメニュー
  ===================================================*/

        // 一つ目の処理はheader__toggle-btnを押したときにheaderにopenクラスがあるかどうかを判定し、ない場合とある場合にopenクラスの付け加えと削除の挙動

        // openクラスを付けたときと削除したときの動きはCSSでdisplay:none;やblock;で管理するのでJSではその挙動に必要となるopenクラスの付け外しを動的に処理
        $(".header__toggle-btn").on("click", function () {
            // headerにopenクラスがあるか判定する
            if ($("header").hasClass("open")) {
                // headerにopenクラスが存在する場合、openクラスを削除する
                $("header").removeClass("open");

                // attr()メソッド.attr(attributeName, value) は「指定した属性に値を設定する」メソッド
                // aria-expandedの部分を閉じた状態の値に更新
                $(this).attr("aria-expanded", "false");
                // aria-labelの部分を閉じた状態の値に更新
                $(this).attr("aria-label", "メニューを開く");
            } else {
                // headerにopenクラスが存在しない場合、openクラスを加える
                $("header").addClass("open");

                // attr()メソッド.attr(attributeName, value) は「指定した属性に値を設定する」メソッド
                // aria-expandedの部分を開いた状態の値に更新
                $(this).attr("aria-expanded", "true");
                // aria-labelの部分を開いた状態の値に更新
                $(this).attr("aria-label", "メニューを閉じる");
            }
        });

        // 二つ目の処理はメニューが表示されている時に画面をクリックした場合
        // メニュー表示中に、nav内のリンクがクリックされたら、headerのopenクラスを削除してメニューを閉じる
        // 今回の模写ではリンクを押すとその先のページを読み込むのでこの処理は必須ではない。しかし、ページ遷移前に明示的にメニューを閉じる処理を経験することで、今後の処理の幅も広がる
        $(".header__nav").on("click", function () {
            $("header").removeClass("open");
            // メニューが閉じたときにはtoggle-btnの支援技術の状態を閉じた状態に戻す
            // 「aria-expanded は表示/非表示を切り替えるコントロール側に設定する」もののため、この関数内部ではheader__toggle-btnに設定するのが正しい
            $(".header__toggle-btn").attr("aria-expanded", "false");
            $(".header__toggle-btn").attr("aria-label", "メニューを開く");
        });
    });
    $("#footer").load("layouts/footer.html");
});

// 下記を.load()メソッド内部に移動し、headerを共通で読み込んだ後にハンバーガーの挙動の読み込みを行うことですべてのページでハンバーガーメニューの挙動を実行

// 穴埋め形式です。空いている箇所を埋めて実装してください
// $(function () {
//     /*=================================================
//   ハンバーガーメニュー
//   ===================================================*/
//     $("").on("click", function () {
//         // headerにopenクラスがあるか判定する
//         if ($("").hasClass("")) {
//             // headerにopenクラスが存在する場合、openクラスを削除する
//             $("").removeClass("");
//         } else {
//             // headerにopenクラスが存在しない場合、openクラスを加える
//             $("").addClass("");
//         }
//     });

//     // メニューが表示されている時に画面をクリックした場合
//     $("").on("click", function () {
//         $("").removeClass("");
//     });
// });
