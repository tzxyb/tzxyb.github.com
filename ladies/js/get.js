$(".btn-go").click(function(){
	checkTel();
	if(checkTel()){
		var tel =  $.trim($("#mobile").val());
		$('.shadow').show();
	}
});

 function checkTel(){
		var tel =  $.trim($("#mobile").val());
		if (null === tel || "" === tel || tel.length === 0 || tel==='请输入手机号') {
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
 
 //
 	var u = navigator.userAgent;
	isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
 
	$(".t_val").focus(function(){
		var txt_value = $(this).val();
		if(txt_value == this.defaultValue){
			$(this).val("");
		};
		if(isAndroid){
			$('.pic-bot').hide();
		};
	}).blur(function(){
		var txt_value = $(this).val();
		if(!txt_value){
			$(this).val(this.defaultValue);
		};
		if(isAndroid){
			$('.pic-bot').show();
		}
	})