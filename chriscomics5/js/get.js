
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
	var _w = $(window).width();
	var _h = $(window).height();
	$(".getcon").css({
		"height": _h + "px",
		"width":_w +"px"
	});
	$(".getcon .inner").css({
		"-webkit-transform" :"scale("+_h/1029+")",
		"transform" :"scale("+_h/1029+")",
		"left": (_w - _h*bili)/2+"px"
	});

})
$(function(){
	$(".btn-go").click(function(){
			var mobile = $(".input-tel").val(); 
			if(checkTel()){
				$.ajax({
						url : "/quan/chriscomics5.do",
						type : "post",
						data : {
								mobile : mobile,
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
			    					getMoney(mobile);
			                    }else if(result == 2){//已领取
			                    	getMoney(mobile);
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
		 }

	  });
});

function getMoney (mobile) {
	$(".alcon .rescon,.alcon").fadeIn();
	$('.alcon .res-mobile').html(mobile);
	$(".alcon .rescon .g-title,.alcon .rescon .g-quan,.alcon .rescon .res-w,.alcon .rescon .btn-dld,.alcon .rescon .g-close").fadeIn();
};

$('#music-btn').on('touchstart', function() {
	if ($(this).hasClass('on')) {
		$('audio').get(0).pause();
		$(this).addClass('off').removeClass('on');
	} else {
		$('audio').get(0).play();
		$(this).removeClass('off').addClass('on');
	}
});
$('.g-close').click(function(){
	$('.alcon .rescon,.alcon').hide();
});
$('.btn-share').click(function(){
	$('.alcon,.alcon .sharecon').show();
});
$('.alcon .sharecon').click(function(){
	$('.alcon,.alcon .sharecon').hide();
});
$(".btn-dld").on('click',function(){
	var tdpg = ucar.uitls.getUrlParam("tdpg");
	var tdaz = ucar.uitls.getUrlParam("tdaz");
	var m = window.location.search;
	if(tdaz || tdpg){
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html"+m;
	}else{
		window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html";
	}
});
function checkTel(){
	var tel =  $.trim($(".input-tel").val());
	if (null === tel || "" === tel || tel.length === 0 || tel==='请输入11位手机号') {
		 ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}
	if(! mobileValidate(tel) ){
		ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}else{
		return true;
	}
};

