
// 最大限制
_big_limit = 400;

$(document).ready(function () {
    /*
     * 下面是 图标的移动
     */
    var _label_x, _label_y;
    var _label_move = false;
    // 保存 父类 就是整个标签
    var _parent_label;

// 当在 用 标题的时候， 我们不移动
    $("#labelList")
        .on("mousedown", ".label_button_list", function (e) {
            // 背景 不 移动
            _bg_move = false;
        })

        //这一行是 为了动态绑定  具体 查看 on 方法
        .on("mousedown", ".label_main", function (e) {
            _isLabel = true;
            _label_move = true;
            _bg_move = false;
            // $(this) 选择的是 点击的那个
            // 这里只让  label_main 来进行移动 ， 这样的话， 我们就 直接
            // 改变 父元素的 class 添加 mouseMove
            _parent_label = $(this).offsetParent();
            _parent_label.addClass("mouseMove");
            _label_x = e.pageX - parseInt(_parent_label.css("left"));
            _label_y = e.pageY - parseInt(_parent_label.css("top"));
            // 结束了 -->  移动所需要的数据

            // 开始了 z-index 的一些改变
            // z-index 的一些 改变
            var _min = 9999;
            var _max = -1;
            $(".label_tag").each(function () {
                // 获取 标签  和 标签的 z-index 值
                var _label = $(this);
                var _label_z_index = parseInt(_label.css("z-index"));

                if (_label_z_index < _min) {
                    _min = _label_z_index;
                }
                // 这个地方 是为了防止放大后调整 z-index = 1000 的时候 产生的问题

                if (_label_z_index > _max && _label_z_index < _big_limit) {
                    _max = _label_z_index;
                }
            });
            // 调整 z-index  为了 保持在 400 一下
            if (_min > 10) {
                // 没到最小的 大于10 的时候, 我们就直接减小 10 这样能解决以部分问题
                // 最正宗的解决办法 是 每一次 添加 图片 都能 排序 ,,  然后 缩小 z-index 的值
                $(".label_tag").each(function () {
                    $(this).css("z-index", parseInt($(this).css("z-index")) - 10);
                });
            }

            //  改变点击的 成为 _max + 1 这样就能在最上面了
            // 改变 父div
            // 但是 如果是 在放大的时候 就会失效
            // 所以在这里判断 是不是 最大化
            if (parseInt($(this).offsetParent().css("z-index")) < _big_limit) {
                $(this).offsetParent().css("z-index", _max + 1);
            }
        });

    $(document).mousemove(function (e) {
        // 500 是 一个 zindex 的限制 如果说再上面的话, 说明现在 在放大的那个阶段 不应该 更改位置,
        // 应该可以白编辑
        if (_label_move && _parent_label.css("z-index") < 500) {

            _bg_move = false;
            var x = e.pageX - _label_x; //移动时根据鼠标位置计算控件左上角的绝对位置
            var y = e.pageY - _label_y;
            $(".mouseMove")
                //控件新位置
                .css({ top: y, left: x })
                // 去除数据 不让他 平滑
                .removeClass("label_transform");
        }
    }).mouseup(function () {
        _isLabel = false;
        _label_move = false;
        $(".mouseMove")
            .addClass("label_transform")
            //松开鼠标后停止移动
            .removeClass("mouseMove");
    });

});
