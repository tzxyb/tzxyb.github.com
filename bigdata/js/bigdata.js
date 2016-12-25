var LoadArr = [];
	LoadArr.push(
		"images/phone.png",
		"images/music.png",
		"images/arrow.png",
		"images/bg.mp3"
		);

var  loader = new PxLoader();

for(var i=0;i<LoadArr.length;i++){
	loader.addImage(LoadArr[i]);
}

loader.start();
loader.addCompletionListener(function(){
	goPage();
});
function goPage(){
	$("#newloading").css({"display":"none"});
};

var _w = $(window).width();
var _h = $(window).height();
var bili = 640/1029;
$(".slide,.getcon,.newcomer,.old").css({
	"height":_h +'px'
});
$(".slide .wrap,.getcon .inner,.newcomer .wrap,.old .wrap").css({
	"-webkit-transform" :"scale("+_h/1029+")",
	"transform" :"scale("+_h/1029+")",
	"left": (_w - _h*bili)/2+"px"
});

var abc=$('.hidden').val();
$('.btn-check').on('click',function(){
	if(!abc){
		window.location.href="slide.html";
		$('.slide-1').addClass('current-slide').removeClass('hide');
	}else{
		$('.getcon').hide();
		$('.newcomer').show();
	}
});
$('.btn-label').click(function(){
	window.location.href = 'getcon.html';
})

/*去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作*/
setTimeout(scrollTo,0,0,0);

/*设备的翻转状态*/

window.onorientationchange = function(){
	onorientationchange();
};

function orientationchange() {
    if (window.orientation == 0 || window.orientation == 180) {
        document.getElementById("horizontal").style.display = 'none';
    } else {
        document.getElementById("horizontal").style.display = 'block';
    }
};





/*分享弹层 控制*/

$('.btn-share').click(function(){
	$('.alcon,.alcon .p-s').show();
});
$('.alcon').click(function(){
	$('.alcon,.alcon .p-s').hide();
});

/*音乐图片控制*/
/*var audio= document.getElementsByTagName('audio')[0];
document.addEventListener('touchstart',function(){
	audio.play();
});*/
$('.music').on('touchstart', function() {
	if ($(this).hasClass('gray')) {
		$('audio').get(0).play();
		$(this).removeClass('gray');
	} else {
		$('audio').get(0).pause();
		$(this).addClass('gray');
	}
});
$(".btn-dld").on('click',function(){
	var tdpg = ucar.uitls.getUrlParam("tdpg");
	var tdaz = ucar.uitls.getUrlParam("tdaz");
	var m = window.location.search;
	if(tdaz || tdpg){
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html"+m;
	}else{
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html";
	}
});


function checkTel(){
	var tel =  $.trim($(".input-tel").val());
	if (null === tel || "" === tel || tel.length === 0 || tel==='请输入11位手机号') {
		 ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}
	if(! mobileValidate(tel) ){
		ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}else{
		return true;
	}
};

