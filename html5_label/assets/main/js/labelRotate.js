/**
 * Created by danny on 9/6/14.
 */

$(document).ready(function () {
    var _isRotate = false;
    var _rotateLabel;
    $(".label_list").on("mousedown",".rotate_button",function (e) {
        _isRotate = true;
        // 全局变量 的 改变
        _bg_move = false;
        // 取出将要移动的类
        _rotateLabel = $(this).offsetParent();
    });
    $(document).mousemove(function (e) {
        //
        // 判断 是不是 然后移动
        if (_isRotate) {
            // 全局变量
            // 控制 背景部移动
            _bg_move = false;

            // 勾股定理
            var _labelX = _rotateLabel.width() / 2 + _rotateLabel.offset().left;
            var _labelY = _rotateLabel.height() / 2 + _rotateLabel.offset().top;
            var _x = e.pageX - _labelX;
            var _y = e.pageY - _labelY;

            /**
             * 这里 帮我处理一下数据
             * @type {number}
             * @private
             */
            // 将这个换算成角度
            var _rotate = Math.atan(_y / _x) / ((Math.PI)/360);
            // 在最开始的时候因为 位置的原因 角度有问题.
            var _del = Math.atan(_rotateLabel.height()/_rotateLabel.width()) / ((Math.PI)/360);
            // tan 问题
            _rotate = (_rotate -_del) /2;
            if(_x>0){
                // tan  角度 问题
                _rotate = 180 +_rotate;
            }

            /**
             * 最后的结果
             */
            // 添加 css
            _rotateLabel
                .removeClass("label_transform")
                // 添加旋转的效果
                .css("transform", "rotate(" + _rotate + "deg)");

        }
    }).mouseup(function (e) {
        if(_isRotate) {
            _isRotate = false;
            _rotateLabel.addClass("label_transform");
        }
    });
});