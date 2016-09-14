var bh = $('body').height();

checkMobile();
$('.mobile').on('focus', function () {

    $('body').height(bh);

    $('.info').removeClass('novalue');
}).on('blur', function () {
    checkMobile();
});

$('.close_btn').on('click', function () {
    $('.popup').hide();
});

$('.share_btn').on('click', function () {
    $('.share').show();
});

$('.download_btn').on('click', function () {

    var tdpg = ucar.uitls.getUrlParam("tdpg");
    var tdaz = ucar.uitls.getUrlParam("tdaz");
    var m = window.location.search;

    if(tdaz || tdpg){
        window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html"+m;
    }else{
        window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html";
    }
});

$('.share').on('click', function () {
    $(this).hide();
});

$(".get_btn").click(function(){

	var mobile = $("#mobile").val();

	if(checkTel()){

		// 传入手机号和是否已领取标识；
		showPopup(mobile, true);

		/*$.ajax({
				url : "/comeback/get.do",
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
	                        $('.res-title').html('恭喜您获得40元专车券');
	                        $('.tel-num').html(mobile);
	                        $('.top_bt').hide();
	                        $('.ustab').hide();
	                        $('.result').show();
		                    $('.btns').show();
		                    $('.logo').show();
	                    }else if(result == 2){//已领取
	                    	$('.res-title').html('抱歉，您已经领过');
	                    	$('.tel-num').html(mobile);
	                    	$('.top_bt').hide();
	                    	$('.ustab').hide();
		                    $('.result').show();
		                    $('.btns').show();
		                    $('.logo').show();
	                    }else if(result == 3){//生成代金券失败
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }else if(result == 4){//领光了
	                    	ucar.uitls.show("亲，活动结束了哦！<br><br>");
	                    }else if(result == 5) {
	                    	ucar.uitls.show("不要心急，活动马上开始。一起期待吧！");
	                    }else if(result == 6){
	                    	ucar.uitls.show("亲，活动结束了哦！<br><br>");
	                    }else if(result == 7){
	                    	ucar.uitls.show("未找到配置信息！");
	                    }else if(result == 8){
	                    	ucar.uitls.show("您已经领取过了！");
	                    }else if(result == 9){
	                    	ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
	                    }
	                }
				}
		});*/
 }});

function checkMobile () {
    if (!$('.mobile').val()) {
        $('.info').addClass('novalue');
    } else {
        $('.info').removeClass('novalue');
    }
}

function showPopup(mobile, isFirst) {

	mobile = mobile.substr(0,3)+"****"+mobile.substr(7,4);

	$('.account').text(mobile);

	console.log('show result');
	$('.result').hide();

	// 是否已领取过
	if (isFirst) {
		$('.layer_get').show();
	} else {
		$('.layer_had').show();
	}

	$('.popup').show();
}

 function checkTel(){
	var tel =  $.trim($("#mobile").val());
	if (null === tel || "" === tel || tel.length === 0 || tel==='请输入11位手机号' || tel==='请输入手机号') {
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