// 穴埋め形式です。空いている箇所を埋めてスクーススクロールを実装してください

// HTMLが終了したらこの中の処理を実行してくださいという記述
$(function () {
    /*=================================================
  スムーススクロール
  ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    // hrefが#から始まる(^=)aタグを取得し、.click(function())の内部の処理を実行
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        // this=今クリックされた要素
        let href = $(this).attr("href");

        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        // 変数target = 今クリックされたものがhref=#またはhref=""の場合、html=index.htmlを返す。それ以外の場合はhref(#menu等)を返す
        let target = $(href == "#" || href == "" ? "html" : href);

        // ページトップからジャンプ先の目的地の要素までの距離を取得(何pxあるのかを取得している)
        // この取得した値がpositionに格納される
        // offset() => 対象HTML要素のdocument上での位置を座標として取得
        // 取得結果は { top: Y座標, left: X座標 } のオブジェクト
        // .top => offset()で取得した座標のうち、Y座標（縦方向）の値を取得し、topの値のみを使用している
        let position = target.offset().top;

        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        // $("html,body")=>htmlとbodyを対象にする
        // .animate=>CSS等の値を時間をかけて変化させる
        // { scrollTop: position }=>スクロール位置をposition(letで格納されたジャンプ先の目的地までのpx値)まで変化させる
        // 600=>0.6s
        // swing=>スクロールの加速と減速の仕方を設定
        $("html, body").animate({ scrollTop: position }, 600, "swing");

        // urlが変化しないようにfalseを返す
        // このfalseで本来aタグではURLに#=menu等がURL上につくが、そのクリックの動きをJSで止めている。そうすることでスムーススクロールの動きが反映される
        return false;
    });
});
