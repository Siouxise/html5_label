/**
 * Created by danny on 9/5/14.
 */

// 为了让生成的错开
// 没生成一个 就 改变一下位置
_recordX = 0;
_recordY = 0;

$(document).ready(function () {
    $("#addLabel").click(function (e) {

        var _label_left;
        // 添加一个元素  这里的 id 属性是临时的
        $("#labelList").append($("#labelTemplets").children(".label_tag").clone());

        // 防止重叠
        _recordX = _recordX + 10;
        _recordY = _recordY + 10;
        if (_recordX > 150) {
            _recordX = 0;
            _recordY = 0;
        }
        // 这个地方填写 left 的值 ， 用 鼠标的位置 + bgShow 的 left 的值 然后减去一个常数。
        // 这个地方的 bgShow 是 负值
        _label_left = e.pageX + (-$("#bgShow").offset().left) - 350 + _recordX;

        // 更改刚添加的 label 的 left
        // 这个地方的 labelTagAdded 充当一个 id
        $("#labelList  .labelTagAdded").css("left", _label_left + "px")
            .css("top",_recordY +"px")
            // 删除 临时的 id 属性
            .removeClass("labelTagAdded");
    });
});