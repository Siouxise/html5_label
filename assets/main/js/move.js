

$(document).ready(function () {
    // bg scroll
    var _bg_move = false; //移动标记
    var _move_x, _move_y; //鼠标离控件左上角的相对位置
    /*
        如果是 label 的话 我们就直接跳过 上面的
     */
    var _isLabel=false;
    $(".bg_show").mousedown(function (e) {
        if(_isLabel) {
            _bg_move = false;
            return;
        }else{
            _bg_move = true;
        }
        _move_x = e.pageX - parseInt($(".bg_show").css("left"));
     //   _move_y = e.pageY - parseInt($(".bg_show").css("top"));
    });
    $(document).mousemove(function (e) {
        if (_bg_move) {
            var x = e.pageX - _move_x; //移动时根据鼠标位置计算控件左上角的绝对位置
            //var y = e.pageY - _move_y;
            if(x>0 || x<=-window.innerWidth){
                return;
            }
            $(".bg_show").css({ /*top: y, */ left: x }); //控件新位置
        }
    }).mouseup(function () {
        _bg_move = false;
    });



// 下面是 图标的移动
    var _label_x,_label_y;
    var _label_move = false;


// 当在 用 标题的时候， 我们不移动
    $("body").on("mousedown",".label_button_list",function(e){
        _bg_move =false;
    });

    //这一行是 为了动态绑定  具体 查看 on 方法
    $("body").on("mousedown",".label_main",function(e){
//    $(".label_tag").mousedown(function(e){
        _isLabel =true;
        _label_move = true;
        _bg_move =false;
        // $(this) 选择的是 点击的那个
        // 这里只让  label_main 来进行移动 ， 这样的话， 我们就 直接
        // 改变 父元素的 class 添加 mouseMove
        $(this).offsetParent().addClass("mouseMove");
        _label_x = e.pageX - parseInt($(this).offsetParent().css("left"));
        _label_y = e.pageY - parseInt($(this).offsetParent().css("top"));
    });
    $(document).mousemove(function(e) {
        if (_label_move) {
            _bg_move = false;
            var x = e.pageX - _label_x; //移动时根据鼠标位置计算控件左上角的绝对位置
            var y = e.pageY - _label_y;
            $(".mouseMove").css({ top: y, left: x }); //控件新位置
        }
    }).mouseup(function() {
        _isLabel = false;
        _label_move = false;
        $(".mouseMove").removeClass("mouseMove"); //松开鼠标后停止移动并恢复成不透明
    });

});
