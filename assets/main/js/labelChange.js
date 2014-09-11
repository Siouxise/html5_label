/**
 * Created by danny on 9/10/14.
 */

$(document).ready(function () {
    /**
     * 因为这时的 fadeBG 层 在 z-index = -1
     * 所以不会触及到 按钮
     */
    // 更改颜色  用的是一个插件 bootstrap colorPicker
    $('#colorChange').colorpicker().on('changeColor', function (ev) {
        $(".labelBig").css("background-color", ev.color.toHex());
    });

    // 就对方离开;阿斯顿解放路看;撒等你疯了看;大煞风景;啦收到
    // 下一个就是 弄 .......... 背景
});