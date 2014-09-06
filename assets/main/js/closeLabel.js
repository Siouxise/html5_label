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
        }
    });
});
