var LoadArr = [];
LoadArr.push("images/loading.png",
              "images/bg.jpg",
			  "images/bg1.jpg",
              "images/title.png",
              "images/logo.png",			  
              "images/btn_again.jpg" ,
			  "images/btn_upload.jpg",
			  "images/btn_uploadSuc.jpg",
              "images/btn_baom.png",
			  "images/btn_tijiao.jpg",
			  "images/btn_share.jpg",
			  "images/share_bg.png",
			  "images/btn_cj.png",
			  "images/btn_hot.jpg",
			  "images/btn_hot1.jpg",
			  "images/btn_new.jpg",
			  "images/btn_new1.jpg",
              "images/btn_pm.png",
              "images/btn_rule.png",
			  "images/rule.png",
			  "images/rule1.png",			  
			  "images/phone.png",
			  "images/btn_vote.jpg",
			  "images/lpmj.png",
			  "images/text_tishi.png",
			  "images/btn_mevote.jpg",
			  "images/btn_mecj.jpg",
			  "images/btn_home.jpg"
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
		//$(".body").css({ "height":$height*2 +"px"});
		//$(".rule").css({ "height":$h, "width":$(window).width()});
		if($height<=480){
		  $(".rulebg").css({"top":$height*1.02+"px", "height":$height*0.83+"px"});
		  $(".btn_cj").css({"top":$height*1.85 + "px"});
		}
		else{
		  $(".rulebg").css({"top":$height+"px", "height":$height*0.83+"px"});
		  $(".btn_cj").css({"top":$height*1.82 + "px"});
		}
		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };
		
		document.body.addEventListener('touchmove', function(e) {
    		  //e.stopPropagation();
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

	function bipinit() {
        srollTop();
		$("#newloading").fadeOut().removeClass("active");
		//$("body").css({"background":"url('http://img.h5clouds.com/i6f4c4e1af8be70052.jpg') no-repeat","background-size":"100% 100%"});
		$(".slide0").fadeIn().addClass("active");
        

		$(".btn_rule").on("click", function(){  /*规则*/
			$(window).scrollTop($height);
		});
		
		$(".btn_baom, .btn_cj").on("click", function(){   /*参加、报名*/
			$(".slide0, .phb").fadeOut().removeClass("active");
			$(".slide1").fadeIn().addClass("active");
			srollTop();
		});
		
		//$('#file').on('change',function(){   /*上传照片*/
			/*var file = $("#file").val();
		    var fileName = getFileName(file);
			function getFileName(o){
			  var pos=o.lastIndexOf("\\");
			  return o.substring(pos+1);  
		   }
		   $(".yunmaPic").fadeIn().attr({"src":"images/"+fileName});
		   $(".btn_upload").fadeIn();
		   $(".btn_load").fadeOut();
		});
        
		$(".btn_upload").on("click", function(){
			$(".yunmaPic, .btn_upload").fadeOut();
			$(".btn_load").fadeIn();
		});*/
		
		var clipArea = new bjj.PhotoClip("#clipArea", {
		  //size: [260, 260],
		  //outputSize: [640, 640],
		  file: "#file",
		  view: ".yunmaPic",
		  ok: ".btn_upload",
		  loadStart: function() {
			  //console.log("照片读取中");
		  },
		  loadComplete: function() {
			  //console.log("照片读取完成");
			  $("#clipArea, .btn_upload, .btn_again").fadeIn();
			  $(".btn_load").fadeOut();
			  $(".btn_again").on("click", function(){
				   $("#clipArea, .btn_upload, .btn_again").fadeOut();
				   $(".btn_load").fadeIn();
				   $("#file").click();
			  });
		  },
		  clipFinish: function(dataURL) {
			  //console.log(dataURL);
			  $("#clipArea, .btn_upload, .btn_again").fadeOut();
			  $(".yunmaPic, .btn_uploadSuc").fadeIn();
			  $(".btn_baom").addClass("black50");
		  }
	    });
		
		$(".btn_tijiao").on("click", function(){   /*提交*/
			var $yunmaPic = $(".yunmaPic").attr("src");
			var $tel=$(".telinput").val();
			var mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
			if(!$yunmaPic){
				alert("请先上传一张照片");
				$("#file").click();
			}else if(!$tel){
				alert("请填写您的电话");
				$(".telinput").focus()
			}else if(!mobile.test($tel)){
				alert("请填写完整的11位合法手机号");
				$(".telinput").focus()
			}else{
				//srollTop();
				$(".btn_tijiao, .telinput, .btn_uploadSuc, .text_tishi").fadeOut();
				$(".bianma, .lapiao").fadeIn();
			}
		});
		
		$(".btn_pm").on("click", function(){   /*排名*/
			$(".slide0, .slide1").fadeOut().removeClass("active");
			$(".phb").fadeIn();
			srollTop();
		});
		
		$(".btn_search").on("click", function(){  /*搜索*/
			var namesearch=$(".namesearch").val();
			if(!namesearch){
			  alert("请输入编号查询（如06576）");
			  $(".namesearch").focus()	
			}
			else{
				alert("search");
			}
		});
		
		$(".btn_new").on("click", function(){  /*最新排名*/
			var _thisSrc = $(this).attr("src");
			if(_thisSrc == "images/btn_new1.jpg"){
			  $(this).attr("src","images/btn_new.jpg")
			  $(".btn_hot").attr("src","images/btn_hot1.jpg")
			}
		});
		
		$(".btn_hot").on("click", function(){  /*最热排名*/
			var _thisSrc = $(this).attr("src");
			if(_thisSrc == "images/btn_hot1.jpg"){
			  $(this).attr("src","images/btn_hot.jpg")
			  $(".btn_new").attr("src","images/btn_new1.jpg")
			}
		});
		
		var piaoNum, piaoIndex;
		$(".btn_vote").on("click", function(){   /*投票*/
		    $(".ceng, .ma").show();
			piaoIndex = $(this).parent().children(".piaoNum").children("span");
			piaoNum =parseInt( piaoIndex.html());
			//alert(piaoNum);
			piaoNum+=1;
			piaoIndex.html(piaoNum);
		});
		
		$(".ma").on("click", function(){
			$(".ceng, .ma").hide();
		});
		
		$(".yunmaSmall").on("click", function(){  /*最热排名*/
		    window.location.href = "share.html";
		});
		
		$(".btn_share").on("click", function(){  /*分享*/
			$(".ceng, .sharepic").show();
		});
		
		$(".sharepic").on("click", function(){
			$(".ceng, .sharepic").hide();
		});
	}
		
		function srollTop(){
			$(window).scrollTop(0);
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
