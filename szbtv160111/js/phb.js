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
		$body_h = $(".phb").height()+$(".rule").height();
		$width = $height*$bili;
		var $search_h = $height*0.09 + "px";
		var $search_t = $height*0.02 + "px";
		var $phbul_h = $height*0.86 + "px";
		var $phbul_t = $height*0.13 + "px";
		var $bombar_h = $height*0.06 + "px";
		var $h = $body_h +"px";
		$(".phb").css({"height":$h});
		$(".search").css({"height":$search_h,"top":$search_t});
		$(".phb ul:nth-child(0)").css({"height":$phbul_h,"top":$phbul_t});
		$(".bom_bar").css({"height":$bombar_h});
		//$(".listNum ul").css({"height":"10%","top":"13%"});
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
		
		document.body.addEventListener('touchmove', function(e) {
    		 // e.stopPropagation();
    		  //e.preventDefault();
		}); 
		
		$(".phb").fadeIn().addClass("active");
		$(".rule").css({"top":$height*1.7});
		
		$(".btn_home").on("click", function(){
			window.location.href = "index.html";
		});
		
		$(".btn_rule").on("click", function(){
			$(window).scrollTop($height*1.7);
		});
		
		$(".btn_phb").on("click", function(){
			$(window).scrollTop(0);
		});
		
		$(".btn_search").on("click", function(){
			var namesearch=$(".namesearch").val();
			if(!namesearch){
			  alert("请输入编号（如A001）");
			  $(".namesearch").focus()	
			}
			else{
				window.location.href="vote.html";
			}
		});
		
		$(".leftdl, .rightinput").on("click", function(){
			$(".kuangbg, #bigdl").show();
			$(".kuang").hide();
			var leftdlt = $(this).parent().children(".leftdl").html();
			var rightinput = $(this).parent().children(".rightinput").html();
			$("#bigdl .leftdl").html(leftdlt);
			$("#bigdl .rightinput").html(rightinput);
		});
		
		$("#bigdl").on("click", function(){
			$(".kuangbg, #bigdl").hide();
		});
		var piaoNum, piaoIndex, piaoYu, piaotext;
		$(".btn_tp").on("click", function(){
			piaoIndex = $(this).parent().children(".piaoNum").children("span");
			piaoNum = piaoIndex.html();
			piaoYu = $(".text span").html();	//剩余票数
			piaotext = $(".text").html();	//剩余票数
			
			$(".kuangbg, .kuang").show();
			$("#bigdl").hide();
			
			if(piaoYu<=0 || piaotext =="今日您的投票数额已用完"){   //票数<0， 投票失败
				$(".biaoti").html("投票失败");
				$(".text").html("今日您的投票数额已用完");
			}
			else{             //投票成功，票数减1
			    piaoYu--;
			    $(".text span").html(piaoYu);	
				piaoNum++;
			}
		});
		
		$(".btn_qd").on("click", function(){
			    piaoIndex.html(piaoNum);
				$(".kuangbg").hide();
			});
		
		
	});
