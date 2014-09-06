/**
 * Created by danny on 9/6/14.
 */
$(document).ready(function () {
    var _isClick = this;

    // 为了防止在 拖动时 也会打开
    $(".label_list").on("mousedown", ".label_main", function () {
        _isClick = true;
    })
        // 绑定 click
        .on("click", ".label_main", function () {
            if (_isClick) {
                $('#labelChange').modal('toggle');
            }
            _isClick = true;
        });

    $(document).mousemove(function (e) {
        _isClick = false;
    });

});