$(".btn-go").click(function(){
	checkTel();
	if(checkTel()){
		$('.shadow').show();
		$('.resultcon').show();
	}
});
 
$('.btn-close').click(function(){
	$('.shadow').hide();
});
$('.btn-leave').click(function(){
	$('.shadow').hide();
});

 function checkTel(){
		var tel =  $.trim($("#mobile").val());
		if (null === tel || "" === tel || tel.length === 0 || tel==='请输入手机号') {
			 ucar.uitls.show("手机号填写错误<span class='face face-3'></span>",'normal');
			return false;
		} 
		if(! mobileValidate(tel) ){
			ucar.uitls.show("手机号填写错误<span class='face face-3'></span>",'normal');
			return false;
		}else{
			return true;
		}
	}