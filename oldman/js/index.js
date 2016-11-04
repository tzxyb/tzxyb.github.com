$bili=640/1029;
$height = $(window).height();
$width = $height*$bili;
var $h = $height +"px";
$(".page").css({"width":$width,"height":$h});
$("body, .slide2").css({"height":$h});
var LoadArr = [];
LoadArr.push("images/loadT.png","images/bg.jpg","images/bg1.jpg","images/btn_down.png","images/btn_lq.png","images/btn_share.png","images/btn_skip.png","images/sharePic.png","images/p1Bom.png","images/p1Desc.png","images/p1Foot.png","images/p1Top.png","images/p2Text.png","images/p2Title.png","images/p2zhi.png","images/qi1.png","images/qi2.png","images/qi3.png","images/qi4.png","images/qiBom.png","images/qiTop.png");

function loadPic(wjName, Num, geshi){
	for(i=1;i<=Num;i++){
	  var $url ;
	  if(i<10){
		  $url="images/"+wjName+"/00"+i+"."+geshi;	
	  }
	  else{
		  $url="images/"+wjName+"/0"+i+"."+geshi;	
	  }
	  LoadArr.push($url);
  }
}
 loadPic("p1Pic",22,"jpg");

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
		
/*设备的翻转状态*/
function orientationchange() {
    if (window.orientation == 0 || window.orientation == 180) {
        //document.getElementById("horizontal").style.display = 'none';
        //window.OBJ360 && window.OBJ360.play();
		$(".vBox").css({"top":"25%"});
		$("#video1").css({"top":"0"});
		$(".qiTop, .qiBom").show();

    } else {
        //document.getElementById("horizontal").style.display = 'block';
        //window.OBJ360 && window.OBJ360.stop()
		$(".vBox").css({"top":"0"});
		$("#video1").css({"top":"15%"});
		$(".qiTop, .qiBom").hide();
    }
};

function sequenceFrameAnimate(name,wjj, count, time, isRepeat, kzname) {
  var i = 1;
  cron = setInterval(function(){
	  if (i == count) {
		  // 循环播放
		  if (isRepeat) {
			  i = 1;
		  } else {
			  clearInterval(cron);
			  return;
		  }
	  };
	  if(i<10){
		imgUrl = "00"+i;	
	  }
	  else{
		imgUrl = "0"+i;
	  }

	  $('.'+name).show().attr("src",'images/'+wjj+"/"+imgUrl+'.'+kzname);
	  i++;
  }, time);
}

$(function(){

	var loader = new PxLoader();

		for(var i=0; i <LoadArr.length;i++ ) {
		  loader.addImage(LoadArr[i]);
		}
		loader.start();
		loader.addProgressListener(function(e) {

			var NUM = Math.ceil(e.completedCount/e.totalCount*100);
			//alert(NUM);
			var bgW = NUM+"%";
			$(".loadBG").css({"width":bgW});
			$(".percentN").html(NUM+"%");
		});
		loader.addCompletionListener(function() {
			bipinit();
		});

	
	  setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
		window.onorientationchange = function() {
		orientationchange();
	  };
	  
	  document.body.addEventListener('touchmove', function(e) {
			//e.stopPropagation();
			//e.preventDefault();
	  }); 
		
	function bipinit(){
	  $("#newloading").css({"display":"none"});
	  $(".slide0").addClass("active").fadeIn();
	  var timer = 500;
	  var Content = document.getElementById('Content');
	  var touchFlag=1;
	  var v1 = document.getElementById('video1');
	  Content.addEventListener('touchstart', function(event) {
		 setTimeout(function(){
			   zhengqi();
		 },1000);
	  });
	  setTimeout(function(){
		 zhengqi();
		 document.body.addEventListener('touchmove', function(e) {
		    e.stopPropagation();
		    e.preventDefault();
		 }); 
	  },3000);
	  
	  function zhengqi(){
		if(touchFlag){
		   touchFlag=0;
		   sequenceFrameAnimate("p1Pic","p1Pic", 23, 150, false, "jpg");
		   zhengQi();
		}
	  }
	  
	  function zhengQi(){
		 $(".qi1").fadeIn(20);
		 setTimeout(function(){
			 $(".qi2").fadeIn(20);
			 setTimeout(function(){
				 $(".qi3").fadeIn(20);
				 setTimeout(function(){
					 $(".qi4").fadeIn(20);
					 setTimeout(function(){
						 $(".Content").fadeOut(2000);
						 $(".qi1, .qi2, .qi3, .qi4").fadeOut(5000);
						 $(".qiTop, .qiBom, .vBox, .bgBlack").fadeIn(5000);
						 $(".vBox").css({"width":"100%","height":"40%"});
						 setTimeout(function(){
							$("#video1, .btn_skip").fadeIn(2000);
						 },4000);
					 },timer);
				 },timer);
			 },timer);
		 },timer);  
	  }
	  
	 function s0ToS1(){
	   $(".slide0").removeClass("active").fadeOut(2000);
	   $(".slide1").addClass("active").fadeIn(2000);
	   setTimeout(function(){
		  $(".slide1").fadeOut(2000);
		  $(".slide2").fadeIn(2000);
	   },4000);
	 }
	
	 $(".btn_skip").click(function(){
		  $(".vBox").hide();
		  $("#video1").remove();
		  s0ToS1();
	  });
	  
	 $(".btn_down").click(function(){
		 window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html";
	  });
	  
	  $(".btn_share").click(function(){
		  $(".share").show();
	  });
	  
	  $(".share").click(function(){
		  $(".share").hide();
	  });

	}
		
});
