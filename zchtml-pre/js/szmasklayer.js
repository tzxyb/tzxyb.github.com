var time=3;
var stop;
var zcshowmask;
var Alert;
zcshowmask = {
    //添加内容的
    showMsg:function(popID){
        var popObj = $("#"+popID);
        //var popID = $(this).attr('data-reveal-id');
        var popWidth = popObj.width();
        popObj.fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close maskclose">X</a>');
        var popMargTop = (popObj.height()) / 2;
        var popMargLeft = (popObj.width()) / 2;
        popObj.css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=80)'});
        return false;
    }
};
Alert = {
    //确认、取消
    showConfirmMsg: function (title, obj, callback, value) {
        var subhtml = '<div class="popup_block_alert"><a href="#" class="close maskclose">X</a><h1>' + title + '</h1><p>' + obj + '</p><div class="a_ipt"><input name="button" class="affirmipt" onclick="rec(' + callback + ')" type="button" value="' + value + '"  /><span class="padding"></span></span><input name="button" class="cancelipt" onclick="closedShowMsg()" type="button" value="取消" /></div></div>';
        var alertWidth = $('popup_block_alert').width();
        var alertMargTop = ($('popup_block_alert').height()) / 2;
        var alertMargLeft = ($('popup_block_alert').width()) / 2;
        $('popup_block_alert').css({
            'margin-top' : -alertMargTop,
            'margin-left' : -alertMargLeft
        });
        $("body").append(subhtml);
        $(".popup_block_alert").fadeIn().css({ 'width': Number( alertWidth ),'margin-top' : -alertMargTop,'margin-left' : -alertMargLeft }).prepend('<a href="#" class="close maskclose">X</a>');
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=80)'});
        callback = callback || function () {
        };
    }
};
$('a.maskclose').live('click', function() {
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.maskclose,.popup_block_alert').remove();
    });
    return false;
});
//关闭确认弹出框
function rec(callback){
    $("#fade,.popup_block_alert").remove();
    callback();
}

//关闭弹出框
function closedShowMsg(){
    $("#fade,.popup_block_alert").remove();
}