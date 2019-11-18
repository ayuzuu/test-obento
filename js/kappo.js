// $('.center').slick({
//   infinite: true, //スライドのループ有効化
//   dots:true, //ドットのナビゲーションを表示
//   centerMode: true, //要素を中央寄せ
//   centerPadding:'10%', //両サイドの見えている部分のサイズ
//   autoplay:true, //自動再生
// });
$(function () {
    $(window).on('load resize', function () {
        var w = $(window).width()
        if (800 <= w) {
            // PC
            $("#nav1 ul").removeClass("slick-slider")
            $("#nav1 ul").removeClass("slick-initialized")

            $("#nav1 ul").addClass("lunch-list")
        } else {
            // SP
            $("#nav1 ul").addClass("slick-slider")
            $("#nav1 ul").addClass("slick-initialized")

            $("#nav1 ul").removeClass("lunch-list")
        }
    });
});
