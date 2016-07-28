var LoadArr = [];
LoadArr.push("images/loading.png",
              "images/title.png",
              "images/logo.png",
              "images/btn_sdl.png" ,
              "images/btn_dui.png",
			  "images/btn_tijiao.png",
			  "images/btn_share.png",
			  "images/share_bg.png",
			  "images/btn_qd.png",
			  "images/btn_home.png",
              "images/btn_phb.png",
              "images/btn_rule.png",
			  "images/rule.jpg",
			  "images/bg.jpg",
			  "images/bg1.jpg",
			  "images/phone.png",
			  "images/dl_pg.png",
			  "images/btn_write.png",
			  "images/kuang.png",
			  "images/btn_me.png",
			  "images/btn_tijiao.png",
			  "images/btn_tp.png",
			  "images/btn_weita.png",
			  "images/xlshiyi.png"
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
	
	    $bili=640/1040;
		$height = $(window).height();
		$width = $height*$bili;
		var $h = $height +"px";
		var $bombar_h = $height*0.06 + "px";
		$(".page").css({"width":$width,"height":$h});
		$(".bom_bar").css({"height":$bombar_h});
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
		
		document.body.addEventListener('touchmove', function(e) {
    		 // e.stopPropagation();
    		  //e.preventDefault();
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
	var dltext, firstpart, lastpart;
	function bipinit() {
		var bookAuto = document.getElementById('book');
		$("#newloading").fadeOut().removeClass("active");
		//$("body").css({"background":"url('http://img.h5clouds.com/i6f4c4e1af8be70052.jpg') no-repeat","background-size":"100% 100%"});
		$(".slide0").fadeIn().addClass("active");
        $(".rule").css({"top":$h});
		$(".btn_home").on("click", function(){
			window.location.href = "";
			$(window).scrollTop(0);
		});
		
		$(".btn_phb").on("click", function(){
			window.location.href="phb.html";
		});
		
		$(".btn_rule").on("click", function(){
			$(window).scrollTop($height);
		});
		
		$(".btn_dui").on("click", function(){
			$(".slide0").fadeOut().removeClass("active");
			$(".slide1").fadeIn().addClass("active");
		});
		
		$(".rightinput").on("click", function(){
			$(".share, #dlkuang").show();
			
			$(".btn_qd").on("click", function(){
				dltext= $(".dlinput").val();
				//alert(dltext);
				$(".share, #dlkuang").hide();
				firstpart = dltext.substring(0, 3);
				lastpart = dltext.substring(3);
				dltt = firstpart +"<br><br>"+lastpart
				$(".rightinput").html(dltt);
			});
		});
		
		$(".btn_tijiao").on("click", function(){
			var $dl=$(".rightinput").html();
			var $tel=$(".telinput").val();
			var $name=$(".nameinput").val();
			var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if($dl=="输入框<br><br>请点击输入上联" || !$dl){
				alert("请先填写上联");
				$(".rightinput").focus()
			}else if(!$name){
				alert("请填写您的姓名或昵称");
				$(".nameinput").focus()
			}else if(!$tel){
				alert("请填写您的电话");
				$(".telinput").focus()
			}else if(!mobile.test($tel)){
				alert("请填写完整的11位合法手机号");
				$(".telinput").focus()
			}else{
				alert("信息填写成功");
				$(window).scrollTop(0);
				$(".btn_tijiao, .telinput, .nameinput").hide();
				$(".bianhao, .btn_share").show();
			}
		});
		
		$(".btn_share").on("click", function(){
			$(".share, .sharepic").show();
		});
		$(".sharepic").on("click", function(){
			$(".share, .sharepic").hide();
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
			});
			*/
			/*音乐结束*/
	});
