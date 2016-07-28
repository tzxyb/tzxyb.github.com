var Detect = (function(){
    var self = {
        isMobile: function() {
            var result = false;
            
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                result = true;
            }
            
            return result;
        },
        //Mobile Phones
        isIPhone: function() {
            return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i));
        },
        isIPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        isAndroid: function() {
            return navigator.userAgent.match(/Android/i)
        },
        who: function() {
            var N= navigator.appName, ua= navigator.userAgent, tem;
            var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
            M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
            return M;
        },
        language: function() {
            var language = window.navigator.userLanguage || window.navigator.language;
            return language;
        }
    };
    return self;
})();	

var LoadArr = [];
LoadArr.push("images/loading.png",
             "images/btn_Wallet.png",
             "images/btn_Wallet_light.png",
			 "images/btn_add.png",
             "images/btn_add_light.png",
			 "images/btn_next.png",
             "images/btn_next_light.png",
			 "images/btn_card.png",
             "images/btn_card_light.png",
			 "images/p4_text.png",
             "images/quan_bg.png",
			 "images/text_gonglue.png",
			 "images/arrow.png",
			 "images/btn_lp.png",
             "images/btn_share.png",
             "images/btn_down.png",
			 "images/applepay.png",
			 "images/p1.jpg",
			 "images/p2.jpg",
			 "images/p3.jpg",
			 "images/p4.jpg",
			 "images/p5.jpg",
			 "music/music.mp3"
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
	
	function bipinit() {
		var audioAuto = document.getElementById('audio');
		$("#newloading").css({"display":"none"});
		//$("body").css({"background":"url('http://img.h5clouds.com/i6f4c4e1af8be70052.jpg') no-repeat","background-size":"100% 100%"});
		$(".slide0").addClass("active");
		
		$(".btn_Wallet, .btn_hand0, .btn_Wallet_light").click(function(){
			audioAuto.play();
			$(".slide0").removeClass("active").hide();
			$(".slide1").addClass("active");
			
		});
		
		$(".btn_add, .btn_hand1, .btn_add_light").click(function(){
			audioAuto.play();
			$(".slide1").removeClass("active").hide();
			$(".slide2").addClass("active");
		});
		
		$(".btn_next, .btn_hand2, .btn_next_light").click(function(){
			audioAuto.play();
			$(".slide2").removeClass("active").hide();
			$(".slide3").addClass("active");
		});
		
		$(".btn_card, .btn_hand3, .btn_card_light").click(function(){
			audioAuto.play();
			$(".slide3").removeClass("active").hide();
			$(".slide4").addClass("active").css({"height":$h});
		});
		  
		  $(".btn_lp").click(function(){
			  var $tel=$(".telinput").val();
			  var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
			  if(!$tel){
				  alert("请填写您的电手机号码");
				  $(".telinput").focus();
			  }else if(!mobile.test($tel)){
				  alert("请填写完整的11位合法手机号");
				  $(".telinput").focus()
			  }
			  else{
				  $(".telinput, .btn_lp").hide();
				  $(".quan_bg, .quan_text, .btn_down, .text_gonglue").animate({"opacity":"1"},1000);
				  $(".arrow").css({"-webkit-animation":"fadeInText .5s linear 0s infinite","animation":"fadeInText .5s linear 0s infinite"});
				  var first_tel= $tel.substr(0, 3);
				  var last_tel= $tel.substr(7);
				  var telphone=first_tel+"****"+last_tel;
				  $(".quan_text span").html(telphone);
				  
				  $(".btn_down, .btn_down1").click(function(){
					  alert("下载神州专车APP");
				  });
				  
				  $(".btn_share").click(function(){
					  $(".share").show();
				  });
				  
				  $(".share").click(function(){
					  $(".share").hide();
				  });
				  
				  $(".text_gonglue").click(function(){
					  $(".slide4").removeClass("active").hide();
			          $(".slide5").addClass("active");
					  var swiper = new Swiper('.swiper-container', {
						  pagination: '.swiper-pagination',
						  speed: 1000,
						  direction: 'vertical',
						  effect : 'fade',
						  noSwiping : true,
						  fade: {
							crossFade: true,
						  }
					  });
					  $(".btn_share, .btn_down1").animate({"opacity":"1"},1000);
				  });
			  }
		  });           
	}
		
		
/*音乐控制*/
/*
		var audioAuto = document.getElementById('audio');
	    	audioAuto.play();
	    	
			var flag = 0;
			$(".music_btn").css({"animation":"music_rotate 5s linear 0s infinite forwards","-webkit-animation":"music_rotate 5s linear 0s infinite forwards"});
			$(".music_btn").click(function(){
				if(flag){
					$(this).css({"animation":"music_rotate 5s linear 0s infinite forwards","-webkit-animation":"music_rotate 5s linear 0s infinite forwards"});	
					flag = 0;
					audioAuto.play();
				}else{
					flag = 1;
					audioAuto.pause();
					$(this).css({"animation":"none","-webkit-animation":"none"});
				}
			});*/
			
			/*音乐结束*/
	});
