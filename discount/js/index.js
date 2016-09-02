(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
var towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row == 6) {
		var m = window.location.search;
		if(m){
			window.location.href="http://mktm2.10101111.com/html5/2016/discount/get.html"+m;
		}else{
			window.location.href="http://mktm2.10101111.com/html5/2016/discount/get.html";
		}
	}
	if (last.row != 6) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
	
	
});

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
	
});

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();
//ajax校验
$(".btn-go").click(function(){
	var mobile = $("#mobile").val();
	var from = ucar.uitls.getUrlParam("sharefrom");
	var openId = ucar.uitls.getUrlParam("openId");
	var originparam = ucar.uitls.getUrlParam("origin");
	var t = ucar.uitls.getUrlParam("t");
	var sign = ucar.uitls.getUrlParam("sign");

	if(checkTel()){
		var url = "/quan/discount.do";
		$.ajax({
				url : url,
				type : "post",
				data : {
						mobile : mobile,
						openId : openId,
						from   : from,
						origin : originparam,
						sign   :sign,
						t:t
				    },
				dataType:"json",
				cache : false,
				success:function(data, textStatus){
					var result = data;
	                if(result){
	                	result=data.status;
	                    if(mobile){
	                        mobile = mobile.substr(0,3)+"****"+mobile.substr(7,4);
	                    }

	                    if(result == 1){//成功
	                        $('.alcon').show();
	            			$('#count').html(mobile);
	            			$('.alcon .t-get').show();
	                    }else if(result == 2){//已领取
	                    	$('.alcon').show();
	            			$('#count').html(mobile);
	            			$('.alcon .t-get').hide();
	            			$('.alcon .t-got').show();
	                    }else if(result == 3){//生成代金券失败
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }else if(result == 4){//领光了
	                    	ucar.uitls.show("券已经领完了！");
	                    }else if(result == 5) {
	                    	ucar.uitls.show("不要心急，活动马上开始。一起期待吧！");
	                    }else if(result == 6){
	                    	ucar.uitls.show("券已经领完了！");
	                    }else if(result == 7){
	                    	ucar.uitls.show("未找到配置信息！");
	                    }else if(result == 8){
	                    	ucar.uitls.show("不符合领取条件！");
	                    }else if(result == 9){
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }else if(result == 10){
	                    	ucar.uitls.show("手机号码错误！");
	                    }else if(result == 11){
	                    	ucar.uitls.show("您来晚啦，活动已结束！");
	                    }else if(result == 12){
	                    	ucar.uitls.show("您已经是老用户咯，<br>此活动只适新用户哦！<br><br>");
	                    }else if(result == 13){
	                    	ucar.uitls.show("串码错误或已失效");
	                    }
                  	}
				}
		});
 }});

$('.alcon .close').on('tap',function(){
	$('.alcon').hide();
});
$(".btn-dld").on('tap',function(){
	var tdpg = ucar.uitls.getUrlParam("tdpg");
	var tdaz = ucar.uitls.getUrlParam("tdaz");
	var m = window.location.search;
	if(tdaz || tdpg){
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html"+m;
	}else{
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html";
	}
});
$(".btn-wx").on('tap',function(){
	$('.pic-share').show();
});
$(".pic-share").on('tap',function(){
	$('.pic-share').hide();
});
function checkTel(){
	var tel =  $.trim($("#mobile").val());
	if (null === tel || "" === tel || tel.length === 0 || tel==='请输入手机号码' || tel==='请输入11位手机号') {
		 ucar.uitls.show("亲，填写手机号，<br>才能领券哦！");
		return false;
	};
	if(! mobileValidate(tel) ){
		ucar.uitls.show("亲，填错啦，<br>重新输入试试！");
		return false;
	}else{
		return true;
	}
}

