/**
 * Created by danny on 9/10/14.
 */

$(document).ready(function(){
    /**
     * 因为这时的 fadeBG 层 在 z-index = -1
     * 所以不会触及到 按钮
     */
    $("#changeColor").click(function(){
        $('#changeColor').colorpicker(
            format : 'hex'
        );
    });
});