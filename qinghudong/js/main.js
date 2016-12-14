var _w = $(window).width();
var _h = $(window).height();
var bili = 640 / 1029;

var Detect = (function() {
	var self = {
		isMobile: function() {
			var result = false;
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
				result = true;
			}
			return result;
		},
		//Mobile Phones
		isIPhone: function() {
			return(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i));
		},
		isIPad: function() {
			return navigator.userAgent.match(/iPad/i);
		},
		isAndroid: function() {
			return navigator.userAgent.match(/Android/i)
		},
		who: function() {
			var N = navigator.appName,
				ua = navigator.userAgent,
				tem;
			var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			if(M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
			M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
			return M;
		},
		language: function() {
			var language = window.navigator.userLanguage || window.navigator.language;
			return language;
		}
	};
	return self;
})();
/*设备的翻转状态*/
function orientationchange() {
	if(window.orientation == 0 || window.orientation == 180) {
		$(".page_zhuanping").hide();
		window.OBJ360 && window.OBJ360.play()
	} else {
		$(".page_zhuanping").show();
		window.OBJ360 && window.OBJ360.stop()
	}
};

function is_weixn() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
if(is_weixn()) {
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		WeixinJSBridge.call('hideToolbar');
	});
}

$(function() {
	$(".page_f").css({
		"height": _h + "px"
	});
	$(".page").css({
		"-webkit-transform": "scale(" + _h / 1029 + ")",
		"transform": "scale(" + _h / 1029 + ")",
		"left": (_w - _h * bili) / 2 + "px"
	});

	setTimeout(scrollTo, 0, 0, 0); //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	window.onorientationchange = function() {
		orientationchange();
	};
	var loader1 = new PxLoader();
	loader1.addImage("images/loading/Loading.png");
	loader1.start();
	loader1.addCompletionListener(function(){
		var loader = new PxLoader(),
			xl2 = xsources.length;
		//	var arrx = [];
		for(var i = 0; i < xl2; i++) {
			loader.addImage("images/" + xsources[i]);
			//		arrx.push(xsources[i]);
		}
		//	console.log(arrx);
		loader.start();
		loader.addProgressListener(function(e) {
			var NUM = Math.ceil(e.completedCount / e.totalCount * 100);
			//console.log(NUM);
			$(".jinduIn").css({
				"-webkit-transform": "translateX(" + NUM + "%)"
			})
		});
		loader.addCompletionListener(function(e) {
			jzok();
		});
	});
		

	function jzok() {
		$(".page_loading").fadeOut();
		$(".page_home").show();
		hhd(4000);
		var swiper = new Swiper('.swiper-container', {
			speed: 500,
			direction: "vertical",
			effect: "slide",
			onSlideChangeEnd: function(swiper) {
				$(".page_zhao").show();
				console.log("当前", swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
				switch(swiper.activeIndex) {
					case 0: //第一
						hhd(4000);
						break;
					case 1:
						hhd(6000);
						break;
					case 2:
						hhd(3000);
						break;
					case 3:
						hhd(2400);
						break;
					case 4:
						hhd(3000);
						break;
					case 5:
						hhd(5000);
						break;
					case 6:
						hhd(4800);
						$(".btn_lq").on("click", function() {
							swiper.lockSwipes();
							var telval = $(".xtel").val();
							if(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(telval)) {
								alert("号码正确");
								var jp = "images/p7/quan6.png";
								var account = telval;
								xalert(jp, account);
							} else {
								alert("请检查您输入的手机号是否有误")
							}
						});
						break;
				}
			}
		});

	}
	//	mySwiper.activeIndex

});

$(window).ready(function() {
	for(var i = 0; i <= 25; i++) {
		$(".f" + i).css({
			"-webkit-animation-delay": .5 + .15 * i + "s",
			"animation-delay": .5 + .15 * i + "s"
		});
	}

	$(".btn_share").on("touchend", function() {
		$(".page_share").fadeIn(300);
	});
	$(".page_share").on("touchend", function() {
		$(this).fadeOut(300);
	})
	$(".btn_download").on("touchend", function() {
		alert("download")
	});
	$(".page_zhao").on("touchstart", function(e) {
		e.preventDefault();
	});
	music();
});

function hhd(a) {
	$(".page_zhao").show();
	setTimeout(function() {
		$(".page_zhao").hide()
	}, a);
}

function xalert(a, b) {
	$(".xalert").show();
	$(".jp img").attr(a);
	$(".account").html(b);

}

function music() {
	var music = $("#bgm")[0];
	$("#bgm").onload = function() {
		alert("11111")
	}
	if(music.paused) {
		//		暂停
		music.play();
		$(".musicBtn").addClass("musicBtn2")
	} else {

	}
	$(".musicBtn").on("touchend", function() {
		//		alert("1")
		if(music.paused) {
			//暂停
			music.play();
			$(".musicBtn").addClass("musicBtn2");
		} else {
			music.pause();
			$(".musicBtn").removeClass("musicBtn2");
		}
	});
}