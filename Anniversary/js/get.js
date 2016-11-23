/*设备的翻转状态*/
function orientationchange() {
    if (window.orientation == 90 || window.orientation == 270) {
        document.getElementById("horizontal").style.display = 'none';

    } else {
        document.getElementById("horizontal").style.display = 'block';
        
    }

};
$(function(){
	    $bili=1180/640;
		$height = $(window).height();
		$width = $height*$bili;
		var $h = $height +"px";
		$(".page").css({"width":$width,"height":$h});
		$("body, .slide5").css({"height":$h});
		
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
})
