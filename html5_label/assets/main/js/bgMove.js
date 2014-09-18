/**
 * Created by danny on 9/8/14.
 */
/**
 * 背景的 移动
 */

// 最大限制

_bg_move = false; //移动标记

$(document).ready(function () {
    // bg scroll
    var _move_x, _move_y; //鼠标离控件左上角的相对位置
    /*
     如果是 label 的话 我们就直接跳过 上面的
     */
    var _isLabel = false;
    $(".bg_show").mousedown(function (e) {
        if (_isLabel) {
            _bg_move = false;
            return;
        } else {
            _bg_move = true;
        }
        _move_x = e.pageX - parseInt($(".bg_show").css("left"));
        //   _move_y = e.pageY - parseInt($(".bg_show").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_bg_move) {
            var x = e.pageX - _move_x; //移动时根据鼠标位置计算控件左上角的绝对位置
            //var y = e.pageY - _move_y;
            if (x > 0 || x <= -window.innerWidth) {
                return;
            }
            $(".bg_show").css({ /*top: y, */ left: x }); //控件新位置
        }
    }).mouseup(function () {
        _bg_move = false;
    });
});
