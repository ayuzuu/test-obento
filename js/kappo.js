// お弁当一覧のクラス出し分け
$(function () {
    $(window).on('load resize', function () {
        var w = $(window).width()
        if (800 <= w) {
            // PC
            $("#sp-lunch-list").hide()
            $("#pc-lunch-list").show()
        } else {
            // SP
            $("#sp-lunch-list").show()
            $("#pc-lunch-list").hide()
        }
    });
});
