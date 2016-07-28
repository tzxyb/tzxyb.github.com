
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
	
	    $bili=640/1040;
		$height = $(window).height();
		$width = $height*$bili;
		var $h = $height +"px";
		$(".page").css({"width":$width,"height":$h});
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
		
		document.body.addEventListener('touchmove', function(e) {
    		 // e.stopPropagation();
    		  //e.preventDefault();
		}); 
		
		$(".slide1").fadeIn().addClass("active");
		$(".rule").css({"top":"100%"});
		
		$(".btn_home").on("click", function(){
			window.location.href = "index.html";
		});
		
		$(".btn_rule").on("click", function(){
			$(window).scrollTop($height);
		});
		
		$(".btn_phb").on("click", function(){
			window.location.href = "phb.html";
		});
		
		$(".btn_cj").on("click", function(){
			window.location.href = "index.html";
		});
		
		$(".btn_vote").on("click", function(){
            $(".share").show();
			
			var piaoYu = $(".text span").html();	//剩余票数

			if(piaoYu<=0){   //票数<0， 投票失败
				$(".biaoti").html("投票失败");
				$(".text").html("今日您的投票数额已用完");
			}
			else{             //投票成功，票数减1
			    piaoYu--;
			    $(".text span").html(piaoYu);	
			}
			
			$(".btn_qd").on("click", function(){
				$(".share").hide();
			});
		});
		
		
	});
