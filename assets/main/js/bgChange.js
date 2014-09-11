/**
 * Created by danny on 9/11/14.
 */
$(document).ready(function(){
   $("#changeMainGround").click(function(){
        $("#bgChangeModal").modal("show");
   });
    $(".bg_image_id").click(function(){
        var _img_url= $(this).children("img").attr("src");
        $("#bgShow").css("background-image","url("+_img_url+")");
    });
});