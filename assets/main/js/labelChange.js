/**
 * Created by danny on 9/10/14.
 */

$(document).ready(function () {
    /**
     * 因为这时的 fadeBG 层 在 z-index = -1
     * 所以不会触及到 按钮
     */
        // 更改颜色  用的是一个插件 bootstrap colorPicker
    $('#bgColorChange').colorpicker().on('changeColor', function (ev) {
        $(".labelBig").css("background-color", ev.color.toHex());
    });

    // 下一个就是 弄 .......... 透明度
    $('#slider_label')
        .slider({
            formater: function (value) {

                return 'Current value: ' + value;
            }
        }).on("slide", function () {

            var _temp = $("#slider_label").slider().data("slider").getValue();
            $(".labelBig").css("opacity", _temp / 20 + 0.5);
        });
    // 背景
    $(".label_img")
        .click(function(ev){
            var _img_url= $(this).children("img").attr("src");
            $(".labelBig").css("background-image","url("+_img_url+")");
        });
    // 字体颜色
    $('#fontColorChange').colorpicker().on('changeColor', function (ev) {
        $(".labelBig").css("color", ev.color.toHex());
    });
});