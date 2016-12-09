﻿var LoadArr = [];
	LoadArr.push(
				"images/loading.png",
	            "images/sh_snow3.png",
	            "images/sh_lu.png",
	            "images/start_1_1.gif",
	            "images/start_1_2.gif",
				"images/start_1_3.gif",
				"images/start_1_4.gif",
				"images/start_1_5.gif",
				"images/start_cap.gif",
				"images/st.png",
				"images/str.png",
				"images/stw.png",
				"images/strw.png",
				"images/stb.png",
				"images/special_1_1.gif",
				"images/special_1_2.gif",
				"images/special_1_3.gif",
				"images/special_1_4.gif",
				"images/special_1_5.gif",
				"images/s2_sled.gif",
				"images/s1_arm.png" ,
				"images/bg_s1.png",
				"images/s1w.png",
				"images/s1r_arm.png",
				"images/bg_s1r.png",
				"images/s1r_car.png",
				"images/s1rw.png",
				"images/s2_sled.gif",
				"images/s2_dot.png",
				"images/s2r_arm.png",
				"images/s3_lu_angry.gif",
				"images/bg_s3.gif",
				"images/s3_arm.png",
				"images/s3w.png",
				"images/s1r_car.png",
				"images/s3r_ren.gif",
				"images/s3rw.png",
				"images/uniform_1_1.gif",
				"images/uniform_1_2.gif",
				"images/uniform_1_3.gif",
				"images/uniform_1_4.gif",
				"images/uniform_1_5.gif",
				"images/elk_1_1.gif",
				"images/elk_1_2.gif",
				"images/elk_1_3.gif",
				"images/elk_1_4.gif",
				"images/elk_1_5.gif",
				"images/christmas_1_1.gif",
				"images/christmas_1_2.gif",
				"images/christmas_1_3.gif",
				"images/christmas_1_4.gif",
				"images/christmas_1_5.gif",
				"images/old_1_1.gif",
				"images/old_1_2.gif",
				"images/old_1_3.gif",
				"images/old_1_4.gif",
				"images/old_1_5.gif",
				"images/sleep_1_1.gif",
				"images/sleep_1_2.gif",
				"images/sleep_1_3.gif",
				"images/sleep_1_4.gif",
				"images/sleep_1_5.gif",
				"images/arrow.png",
				"images/sh_snow3.png",
				"images/sh_snow3.png",
				"images/sh_lu.png",
				"images/phone.png",
				"images/loading_s.gif",
				"images/bg_s2r.gif",
				"images/music_on.png",
				"images/music_off.png"
			);

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


		var _w = $(window).width();
		var _h = $(window).height();
		var bili = 640 / 1029;
		$(".slide").css({
			"height": _h + "px"
		});
		$(".slide .wrap").css({
			"-webkit-transform" :"scale("+_h/1029+")",
			"transform" :"scale("+_h/1029+")",
			"left": (_w - _h*bili)/2+"px"
		});

		setTimeout(scrollTo,0,0,0);  //去除iOS和Android中的输入URL的控件条,必须放在window.onload里才能够正常的工作
	      window.onorientationchange = function() {
		  orientationchange();
	    };

		document.body.addEventListener('touchmove', function(e) {
    		  //e.stopPropagation();
    		 // e.preventDefault();
		});

	var loader = new PxLoader();
	for(var i=0; i <LoadArr.length;i++ ) {
		loader.addImage(LoadArr[i]);
	}

	loader.start();
	loader.addCompletionListener(function() {
		    bipinit();
	});

	function bipinit() {
		var audioAuto = document.getElementById('audio');
		$("#newloading").css({"display":"none"});

		$(".xin, .btn_hand").click(function(e){
			console.log(e.target, $('.xin.btn_lq')[0]);
			if (e.target !== $('.xin.btn_lq')[0]) {
				$(this).parent().parent().children(".sTop1").addClass("fadeOut");
				$(this).removeClass("scaleXin");
				$(".btn_hand").removeClass("arr");
				setTimeout(function(){$(".arrow_b").show();},100);
			}
		});
	};
function checkTel(){
	var tel =  $.trim($("#telephone").val());
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
