/**
 * Created by danny on 9/6/14.
 */

$(document).ready(function(){

    $(".label_list").on("click",".close_button",function(e){
        var isTrue = confirm("你确定要删除吗？？");
        if(isTrue) {
            // 数据处理
            // ----
            $(this).offsetParent().remove();

            // 这个 地方 和 labelChange.js 中保持一致 然后
            // 如果在放大的情况下 点击删除的话 就会复原
            // 如果不是的话, 就 直接跳过
            $("#fadeBG").css("z-index", "-1")
                .css("opacity","0");
        }
    });
});
