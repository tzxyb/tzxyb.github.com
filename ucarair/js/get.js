$(".btn-go").on('click',function(){
	checkTel();
	if(checkTel()){
		$('.shadow').show();
		$('.alertcon').show();
	}
});
 
$('.close-btn').on('click',function(){
	$('.shadow').hide();
	$('.alertcon').hide();
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