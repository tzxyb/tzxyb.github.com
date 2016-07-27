$(".btn-get").click(function(){
	var mobile = $("#mobile2").val();
	var origin = ucar.uitls.getUrlParam("origin");
	if(!origin){
		origin = "not";
	}
	if(checkTeljob()){
		$.ajax({
				url : "/quan/getucar3.do",
				type : "post",
				data : {
						mobile : mobile,
						origin : origin
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
	                    var money = data.result;
	                    if(result == 1){//成功
	                    	$(".alert-title").attr("src","http://mktimage.10101111cdn.com/wap/2016/getucar3/t_ok.png");
	                    	$(".quan").attr("src","http://mktimage.10101111cdn.com/wap/2016/getucar3/quan_6.png");
	                    	$(".phone-num").html(mobile);
	                    	$('.alert-con').show();
	                    }else if(result == 2){//已领取
	                    	$(".alert-title").attr("src","http://mktimage.10101111cdn.com/wap/2016/getucar3/t_got.png");
	                    	$(".quan").attr("src","http://mktimage.10101111cdn.com/wap/2016/getucar3/quan_6.png");
	                    	$(".phone-num").html(mobile);
	                    	$('.alert-con').show();
	                    }else if(result == 3){//生成代金券失败
	                    	ucar.uitls.show("纳尼，领券人太多<br>请稍后或重试！<span class='face face-4'></span><br>");
	                    }else if(result == 4){//领光了
	                    	ucar.uitls.show("曾经有一张代金券，你已错过。关注神州专车官方微信，周周都有好礼送！<br><br>");
	                    }else if(result == 5) {
	                    	ucar.uitls.show("不要心急，活动马上开始。一起期待吧！<span class='face face-2'></span><br>");
	                    }else if(result == 6){//活动结束
	                    	ucar.uitls.show("曾经有一张代金券，你已错过。关注神州专车官方微信，周周都有好礼送！<br><br>");
	                    }else if(result == 7){
	                    	ucar.uitls.show("未找到配置信息！<span class='face face-3'></span>");
	                    }else if(result == 8){
	                    	ucar.uitls.show("您已领取过礼包！<span class='face face-2'></span><br>");
	                    }else if(result == 9){
	                    	ucar.uitls.show("纳尼，领券人太多<br>请稍后或重试！<span class='face face-4'></span><br>");
	                    }else if(result == 10){
	                    	ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
	                    }else{
	                    	ucar.uitls.show("纳尼，领券人太多<br>请稍后或重试！<span class='face face-4'></span><br>");
	                    }
	                }
				}
		});
 }});
var $height = $(window).height();
$('.container').height($height);

$('.btn-close').click(function(){
	$('.alert-con').hide();
});
$('.btn-share').click(function(){
	$('.alert-share').show();
});
$('.alert-share').click(function(){
	$(this).hide();
});

$('.btn-share').click(function(){
	$('.shadow').show();
});
$('.shadow').click(function(){
	$('.shadow').hide();
});


 function checkTeljob(){
	 var tel =  $.trim($("#mobile2").val());
		if (null === tel || "" === tel || tel.length === 0 ) {
			 ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
			return false;
		} 
		if(! mobileValidate(tel) ){
			ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
			return false;
		}else{
			return true;
		}
	}