// お弁当一覧のクラス出し分け
$(function () {
    // スライドショーの設定
    var slideshowOptionsPc = {
        src: [
            { url: "/img/bg-mv01-pc.jpg" },
            { url: "/img/bg-mv02-pc.jpg" },
            { url: "/img/bg-mv03-pc.jpg" },
        ],
        duration: 6,
        fade: 2,
        scaling: 1.2,
        rotating: false,
        overlay: "",
    }
    var slideshowOptionsSp = {
        src: [
            { url: "/img/bg-mv01.png" },
            { url: "/img/bg-mv02.png" },
            { url: "/img/bg-mv03.png" },
        ],
        duration: 6,
        fade: 2,
        scaling: 1.2,
        rotating: false,
        overlay: "",
    }

    // window size
    var width = 0
    var height = 0
    var preHeight = -1

    // スライドショー初期化
    $.sublime_slideshow(slideshowOptionsSp);
    $("ul.sm-slider").appendTo("#container");

    // サイズ変更時イベント
    $(window).on('load resize', function () {
        width = $(window).width()
        preHeight = height
        height = $(window).height()

        // 高さ変更のみの場合は何もしないよ
        console.log(`${preHeight}:${height}`)
        if (preHeight !== height) {
            return
        }

        if (800 <= width) {
            // PC
            // メニューの切り替え
            $("#sp-lunch-list").hide()
            $("#pc-lunch-list").show()

            // スライドショーの切り替え
            $.sublime_slideshow.changeOptions(slideshowOptionsPc)
        } else {
            // SP
            // メニューの切り替え
            $("#sp-lunch-list").show()
            $("#pc-lunch-list").hide()

            // スライドショーの切り替え
            $.sublime_slideshow.changeOptions(slideshowOptionsSp)
        }
    });
});
