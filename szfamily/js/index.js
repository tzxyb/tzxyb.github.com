var LoadArr = [];
LoadArr.push("images/loading.png",
             "images/banner.png",
             "images/bom.png",
			 "images/bomBorder.png",
             "images/btn_close.png",
			 "images/btn_down.png",
             "images/btn_share.png",
			 "images/btn_lq.png",
             "images/desc.png",
			 "images/hand.png",
             "images/kuangbg.png",
			 "images/quan_bg.png",
			 "images/quan_yi.png",
			 "images/s1Text.png",
             "images/s2Text.png",
             "images/s3Text.png",
			 "images/s4Text.png",
			 "images/s11.jpg",
			 "images/s12.jpg",
			 "images/s21.jpg",
			 "images/s22.jpg",
			 "images/s31.jpg",
			 "images/s32.jpg",
			 "images/s41.jpg",
			 "images/s42.jpg",
			 "images/share.png",
			 "images/title.png",
			 "images/xin.png"
			);

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

	function is_weixn(){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				return true;
			} else {
				return false;
			}
		}
	if(is_weixn())
	{
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
			WeixinJSBridge.call('hideToolbar');
		});	
		
	}
	
$(function(){
	
	    $bili=640/1029;
		$height = $(window).height();
		$width = $height*$bili;
		var $h = $height +"px";
		$(".page").css({"width":$width,"height":$h});
		$("body, .slide5").css({"height":$h});
		
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
		
		document.body.addEventListener('touchmove', function(e) {
    		  //e.stopPropagation();
    		 // e.preventDefault();
		}); 
		
	var loader = new PxLoader();
	for(var i=0; i <LoadArr.length;i++ ) {
		loader.addImage(LoadArr[i]);
	}
	 
	  loader.start();
		loader.addProgressListener(function(e) {

			var NUM = Math.ceil(e.completedCount/e.totalCount*100);
			//alert(NUM);
			$(".percentN").html(NUM+"%");
			
		});
		loader.addCompletionListener(function() {
			    bipinit();
		});
	var Swiper_index;
	function bipinit() {
		var audioAuto = document.getElementById('audio');
		$("#newloading").css({"display":"none"});
		//$("body").css({"background":"url('http://img.h5clouds.com/i6f4c4e1af8be70052.jpg') no-repeat","background-size":"100% 100%"});
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			speed: 1000,
			direction: 'vertical',
			effect : 'fade',
			noSwiping : true,
            noSwipingClass : 'stop-swiping',
			fade: {
			  crossFade: true,
			},
			onSlideChangeEnd :function(){
				Swiper_index = swiper.activeIndex;
				$(".xin").addClass("scaleXin");	
				$(".arrow_b").hide();
				if(Swiper_index==4){
					$(".arrow_b").hide();
				}	
			}
		});
		
		$(".slide0 .btn_lq").tap(function(){
			swiper.slideTo(1, 1000, false);
			$(".xin").addClass("scaleXin");
		});
		
		$(".xin").tap(function(){
			//Swiper_index = swiper.activeIndex;
			//var urlTop = "images/s"+Swiper_index+"2.jpg";
			//$(".sTop").attr({"src":urlTop});
			$(this).parent().parent().children(".sTop1").addClass("fadeOut");
			$(".xin").removeClass("scaleXin");
			setTimeout(function(){$(".arrow_b").show();},100);
		});
				  
		  $(".slide5 .btn_lq").tap(function(){
			  var $tel=$(".telinput").val();
			  var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
			  if(!$tel){
				  alert("请填写您的手机号码");
				  $(".telinput").focus();
			  }else if(!mobile.test($tel)){
				  alert("请填写完整的11位合法手机号");
				  $(".telinput").focus()
			  }
			  else{
				  $(".quan").show();
				  var first_tel= $tel.substr(0, 3);
				  var last_tel= $tel.substr(7);
				  var telphone=first_tel+"****"+last_tel;
				  $(".quan_text span").html(telphone);
				  
				  $(".btn_down").click(function(){
					  alert("下载神州专车APP");
				  });
				  
				  $(".btn_share").tap(function(){
					  $(".share").show();
				  });
				  
				  $(".share").tap(function(){
					  $(".share").hide();
				  });
				  
				  $(".btn_close").tap(function(){
					  $(".quan").hide();
				  });
				  
			  }
		  });           
	}
		
		
/*音乐控制*/

		var browser = {
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
		};
		var audioAuto = document.getElementById('audio');
		//audioAuto.play();
		var flag = 1;
		if(browser.versions.android) {
			$(".music_btn").css({
				"animation": "none",
				"-webkit-animation": "none"
			});
			var btn_lq = document.getElementById('btn_lq');
			btn_lq.addEventListener('touchstart', function(event) {
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
		}
	
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
