$bili=640/1029;
$height = $(window).height();
$width = $height*$bili;
var $h = $height +"px";
$(".page").css({"width":$width,"height":$h});
$("body, .slide3").css({"height":$h});
var audioTap = document.getElementById('audioTap');	
var LoadArr = [];
LoadArr.push("images/bg.jpg","images/bg1.jpg","images/bianFu1.png","images/bianFu2.png","images/bird.png","images/bomPic.png","images/btn_again.png","images/btn_close.png","images/btn_find.png","images/btn_share.png","images/Car.png","images/eyeBg.png","images/fire.png","images/kmh.png","images/logo.png","images/menu.png","images/pkDown.png","images/pkNG.png","images/pkSZ.png","images/pkUp.png","images/quanbg.png","images/rulepic.png","images/shareText.png","images/Story1.png","images/succes.png","images/sun.png","images/text1.png","images/text2.png","images/timeLine.png","images/topPic.png","images/tree.png");

/*设备的翻转状态*/
function orientationchange() {
    if (window.orientation == 0 || window.orientation == 180) {
        document.getElementById("horizontal").style.display = 'none';
        window.OBJ360 && window.OBJ360.play()

    } else {
        document.getElementById("horizontal").style.display = 'block';
        window.OBJ360 && window.OBJ360.stop()
    }
};

$(function(){

	var FristImg = ["images/kmh.png","images/loadWitch.png","images/loadCar.png","images/wheel.png","images/phone.png"];
		
	var loader = new PxLoader();
	for(var i=0; i <FristImg.length;i++ ) {
		loader.addImage(FristImg[i]);
	}
	loader.start();
	loader.addCompletionListener(function() {
		loader = null;
		loader = new PxLoader();
		for(var i=0; i <LoadArr.length;i++ ) {
		loader.addImage(LoadArr[i]);
		}
		loader.start();
		loader.addProgressListener(function(e) {

			var NUM = Math.ceil(e.completedCount/e.totalCount*100);
			//alert(NUM);
			//$(".percentN").html(NUM+"%");
			$(".percentN").html(NUM);
		});
		loader.addCompletionListener(function() {
			bipinit();
		});
	});
	
	  setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
		window.onorientationchange = function() {
		orientationchange();
	  };
	  
	  document.body.addEventListener('touchmove', function(e) {
			e.stopPropagation();
			e.preventDefault();
	  }); 
		
	function clickTap(){audioTap.play();}
	function bipinit(){
	  $("#newloading").css({"display":"none"});
	  $(".slide0").addClass("active").fadeIn();
	 
	 $(".btn_rule").click(function(){
		  clickTap();
		  $(".rule").fadeIn();
	  });
	  
	  $(".btn_close").click(function(){
		  clickTap();
		  $(".rule").fadeOut();
	  });
	  
	  $(".btn_start").click(function(){
		  clickTap();
		  $(".slide1").addClass("active").fadeIn();
		  $(".slide0").removeClass("active").fadeOut();
	  });
	  
	  $(".btn_share").click(function(){
		  clickTap();
		  $(".share").addClass("active1").fadeIn();
	  });
	  
	  $(".share").click(function(){
		  clickTap();
		  $(this).removeClass("active1").fadeOut();
	  });
	  
	  $(".btn_sub").on("click", function(){   /*提交*/
	        clickTap();
			var $tel=$(".telinput").val();
			var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if(!$tel){
				alert("请填写您的电话");
				$(".telinput").focus();
			}else if(!mobile.test($tel)){
				alert("请填写完整的11位合法手机号");
				$(".telinput").focus();
			}else{
				//srollTop();
				$(".btn_sub, .telinput, .succes, .sucText").fadeOut();
				$(".slide3 .pkUp").animate({"top":"25.5%"},1000);
				$(".slide3 .pkDown").animate({"top":"53%"},1000);
				setTimeout(function(){
				   $(".quanbg").fadeIn();	
				},1000);
			}
		});

	}
	
	/*音乐控制*/
       /*var browser = {
			versions: function() {
				var u = navigator.userAgent,
					app = navigator.appVersion;
				return {
					webKit: u.indexOf('AppleWebKit') > -1,
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
					weixin: u.indexOf('MicroMessenger') > -1,
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		};*/
		var audioAuto = document.getElementById('audio');
		//audioAuto.play();
		
		var flag = 0;
		
		$(".music_btn").css({
				"animation": "music_rotate 5s linear 0s infinite forwards",
				"-webkit-animation": "music_rotate 5s linear 0s infinite forwards"
			});
		/*if(browser.versions.android) {
			$(".music_btn").css({
				"animation": "none",
				"-webkit-animation": "none"
			});
			var slide0 = document.getElementById('slide0');
			slide0.addEventListener('touchstart', function(event) {
				audioAuto.play();
				$(".music_btn").css({
					"animation": "music_rotate 5s linear 0s infinite forwards",
					"-webkit-animation": "music_rotate 5s linear 0s infinite forwards"
				});
				flag = 0;
			}, false);
		} else {
			audioAuto.play();
			$(".music_btn").css({
				"animation": "music_rotate 5s linear 0s infinite forwards",
				"-webkit-animation": "music_rotate 5s linear 0s infinite forwards"
			});
			flag = 0;
		}*/
	
		$(".music_btn").click(function() {
			if(flag) {
				$(this).css({
					"animation": "music_rotate 5s linear 0s infinite forwards",
					"-webkit-animation": "music_rotate 5s linear 0s infinite forwards"
				});
				flag = 0;
				audioAuto.play();
			} else {
				flag = 1;
				audioAuto.pause();
				$(this).css({
					"animation": "none",
					"-webkit-animation": "none"
				});
			}
		});
			
			/*音乐结束*/
		
});
