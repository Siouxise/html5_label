/**
 * Created by danny on 9/5/14.
 */

$(document).ready(function () {
    $("#addLabel").click(function (e) {

        var label_left;
        // 添加一个元素  这里的 id 属性是临时的
<<<<<<< HEAD
        $("#labelList").append('<div class="label_tag" id="labelTagAdded" style="top: 80px;"></div>');
=======
        $("#labelList").append('<div class="label_tag" id="labelTagAdded" style="top: 80px;"><div class="label_button_list"><button class="glyphicon glyphicon-remove close_button">'+
            '</button><button class="glyphicon glyphicon-refresh rotate_button"></button></div><div class="label_main"></div></div>');
>>>>>>> gh-pages

        // 这个地方填写 left 的值 ， 用 鼠标的位置 + bgShow 的 left 的值 然后减去一个常数。
        // 这个地方的 bgShow 是 负值
        label_left = e.pageX + (-$("#bgShow").offset().left) - 300;

        // 更改刚添加的 label 的 left
        $("#labelTagAdded").css("left",label_left+"px")
            // 删除 临时的 id 属性
            .attr("id",null);
    });
});