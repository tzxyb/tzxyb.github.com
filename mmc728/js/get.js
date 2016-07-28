$('.btn-go').click(function(){
	if (checkName() && checkTel()) {
		var name = $("#name").val();
		var mobile = $("#mobile").val();
		var origin = ucar.uitls.getUrlParam("origin");
		var city = ucar.uitls.getUrlParam("city");
		var url = "/maimaiche/get.do";
		$.ajax({
			url : url,
			type : "post",
			data : {
				      name : name,
					mobile : mobile,
					origin : origin,
			    },
			dataType:"json",
			cache : false,
			success:function(data, textStatus){
				var result = data;
                if(result){
                	result=data.status;
                    if(result == 0){//成功
                    	$('.err').hide();
                    	$('.zhezhao').show();
                    	$('.alert-box').show();
                    	$('.suc').show();
                    }else if(result == 4){
                    	$('.zhezhao').show();
                    	$('.alert-box').show();
                    	$('.suc').show();
                    	$('.err').hide();
                    }else if(result == 5){
                    	$('.zhezhao').show();
                    	$('.alert-box').show();
                    	$('.suc').show();
                    	$('.err').hide();
                    };
                    }; 
			}
	});
        };
    });



function checkTel(){
	var tel =  $.trim($("#mobile").val());
	if (null === tel || "" === tel || tel.length === 0 || tel==='输入手机号码，享受专人服务') {
    	$('.zhezhao').show();
    	$('.alert-box').show();
		$('.err').show();
		$('.suc').hide();
		return false;
		} 
		if(! mobileValidate(tel) ){
        	$('.zhezhao').show();
        	$('.alert-box').show();
			$('.err').show();
			$('.suc').hide();
			return false;
		}else{
			return true;
		}
 }

function checkName () {
    var name = $.trim($('#name').val());

    if (name === '' || name.length < 2  || name ==='输入姓名，免费预约') {

    	$('.zhezhao').show();
    	$('.alert-box').show();
    	$('.err').show();
    	$('.suc').hide();
        return false;

    } else {
        return true;
    }
}
 
ucar.uitls.loading1={
    show: function() {
        var html = "<div id='loading-mask' class='mask'><div class='loading-full'><img src='"+mktimage+"/wap/2016/download/loading_maimaiche.png' /><div></div></div></div>";
        if ($("#loading-mask").length) {
            $("#loading-mask").show();
        } else {
            $(html).appendTo(document.body);
        }
    },
    hide: function() {
        $("#loading-mask").hide();
    }
};