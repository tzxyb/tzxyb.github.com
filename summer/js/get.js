$(".btn-go").click(function(){
    var mobile = $("#mobile").val();
    if(checkTel()){
       $.ajax({
                url : "/summer/get.do",
                type : "post",
                data : {
                    mobile : mobile
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
            				$('.shadow').show();
            				$('.popup').show();
            				$('.popup .res .got').hide();
            				$('.popup .res .get').show();
            				$("#phone").html(mobile);
	                    }else if(result == 2){//已领取
            				$('.shadow').show();
            				$('.popup').show();
            				$('.popup .res .get').hide();
            				$('.popup .res .got').show();
            				$("#phone").html(mobile);
	                    }else if(result == 3){//生成代金券失败
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }else if(result == 4){//领光了
	                    	ucar.uitls.show("券已领光了！");
	                    }else if(result == 5) {
	                    	ucar.uitls.show("不要心急，活动马上开始。一起期待吧！");
	                    }else if(result == 6){
	                    	ucar.uitls.show("活动已结束！");
	                    }else if(result == 7){
	                    	ucar.uitls.show("未找到配置信息！");
	                    }else if(result == 8){
	                    	ucar.uitls.show("您已经领取过了！");
	                    }else if(result == 9){
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }
                    }
                }
        });
 }});


function checkTel(){
    var tel =  $.trim($("#mobile").val());
    if (null === tel || "" === tel || tel.length === 0 || tel == '请输入手机号') {
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

