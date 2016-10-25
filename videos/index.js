$(function(){
    //点击播放事件
    $('#advideo').hide();
    $('.p-img').off().on('click',function(){
        var $that = $(this);
        $that.hide();
        $("#p-box").hide();
        $('#advideo').show();
        document.getElementById("advideo").play();
    });
    document.getElementById("advideo").addEventListener('ended',function(){
        $('#advideo').hide();
        $('.p-img, #p-box').show(); 
    });
    //$('#advideo').attr('src','+view+'.mp4');
    var $height=$(window).height();
    var vTop = $('.videos').height()/2;
    $('.videos').css({'top':$height/2+'px','marginTop':-vTop+'px'});
    
    
    var fullscreen = function(elem) {
        var prefix = 'webkit';
          if ( elem[prefix + 'EnterFullScreen'] ) {
            return prefix + 'EnterFullScreen';
          } else if( elem[prefix + 'RequestFullScreen'] ) {
            return prefix + 'RequestFullScreen';
          };
        return false;
    };
    function autoFullScrenn(v){
        var ua   = navigator.userAgent.toLowerCase();  
        var Android = String(ua.match(/android/i)) == "android";
        // if(!Android) return;//非android系统不使用;
        var video  = v,doc = document;
        var fullscreenvideo = fullscreen(doc.createElement("video"));
        if(!fullscreen) {
            alert("不支持全屏模式");
            return;
        }
        video.addEventListener("webkitfullscreenchange",function(e){
            if(!doc.webkitIsFullScreen){//退出全屏暂停视频
                this.pause();
            };
        }, false);
        video.addEventListener("click", function(){
            this.play();
            video[fullscreenvideo]();
        }, false);

        video.addEventListener('ended',function(){
            doc.webkitCancelFullScreen(); //播放完毕自动退出全屏
        },false);

    };
    var v = document.getElementById("advideo");
    autoFullScrenn(v);
});
    