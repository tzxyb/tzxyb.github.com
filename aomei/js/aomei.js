$(".btn-9").click(function(){
	var mobile = $("#mobile").val();
	if(checkTel()){
		$.ajax({
				url : "/aomei/get.do",
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
	                    if(result == 0){
	                    	$(".alert-con").show();
	                    	$(".alert-get").show();
	                    }else if(result == 1){
	                    	$(".alert-con").show();
	                    	$(".alert-know").show();
	                    }else if(result == 2){
	                    	ucar.uitls.show("曾经有一张代金券，你已错过。关注神州专车官方微信，周周都有好礼送！<br><br>");
	                    }else if(result == 3){
	                    	ucar.uitls.show("不要心急，活动马上开始。一起期待吧！");
	                    }else if(result == 4) {
	                    	ucar.uitls.show("您的代金券正在路上，需要给它一点时间！");
	                    }else if(result == 5){
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }else if(result == 6){
	                    	ucar.uitls.show("亲，填错啦，<br>重新输入试试！");
	                    }
	                }
				}
		});
 }});
 

 function checkTel(){
		var tel =  $.trim($("#mobile").val());
		if (null === tel || "" === tel || tel.length === 0) {
			 ucar.uitls.show("亲，填写手机号，<br>才能领券哦！");
			return false;
		} 
		if(! mobileValidate(tel) ){
			ucar.uitls.show("亲，填错啦，<br>重新输入试试！");
			return false;
		}else{
			return true;
		}
	}
