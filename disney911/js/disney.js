
var bRotate = false,
    rotateTimes = 1;

function checkTel(selector){
    var tel = $.trim($(selector).val()) || $.trim($("#mobile").val()) ;

    if (null === tel || "" === tel || tel.length === 0 || tel==='请输入手机号码' || tel==='请输入11位手机号') {
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
function mobileValidate(mobile){
    if (null === mobile || "" === mobile) {
        return false;
    } else {
        var reg = /^0?(13[0-9]|14[57]|15[012356789]|17[012356789]|18[0-9])[0-9]{8}$/;
        if (!reg.test(mobile)) {
            return false;
        } else {
            return true;
        }
    }
}

// 旋转转盘
function rotateFn (prizeObj) {
    bRotate = !bRotate;
    $('#rotate').stopRotate();
    $('#rotate').rotate(0);
    $('#rotate').rotate({
        angle:0,
        animateTo: prizeObj.angle+1800,
        duration:4000,
        callback:function (){
            bRotate = !bRotate;
            //window.setTimeout(function(){ucar.uitls.show(prize);},500);
            showPrize(prizeObj);
        }
    });
};
// 生成随机数字
function randomNum (max) {
    var num = Math.floor((Math.random() * 9));

    return num;
}
// 获取结果数组中奖品信息
function rotatePrize (id) {
    var prizeObj = results[id];

     console.log(prizeObj);
    
    rotateFn(prizeObj);
}
// 显示奖品弹层
function showPrize (prizeObj) {

    $('.shadow').show();
    $('.alcon').hide();

    if (prizeObj.type === 'quan') {
        var oldStr = $('.alcon1 .quan').attr('src');

        newStr = replaceLast(oldStr, prizeObj.pic);

        $('.alcon1 .quan').attr('src', newStr);
        $('.alcon1').show();
    };
    if (prizeObj.type === 'disney') {
       var oldStr = $('.alcon2 .quan').attr('src');

        newStr = replaceLast(oldStr, prizeObj.pic);

        $('.alcon2 .quan').attr('src', newStr);
        $('.alcon2').show();
        $('.alcon2 .step1').show();
    };
    if (prizeObj.type === 'ticket') {
       var oldStr = $('.alcon3 .quan').attr('src');

        newStr = replaceLast(oldStr, prizeObj.pic);

        $('.alcon3 .quan').attr('src', newStr);
        $('.alcon3').show();
        $('.alcon3 .step1').show();
    }
}
// 检查姓名地址不为空
function checkInfo () {

    var userName = $('#c-name').val(),
        userAddr = $('#c-addr').val();

    if (userName == '' || userAddr == '') {
        ucar.uitls.show('姓名和地址不能为空！');
        return false;
    }

    if (!checkTel('#c-mobile')) {
        return false;
    }


    return true;
}
// 隐藏详细手机号
function renderMobile (mobile) {
    mobile = mobile.substr(0,3)+"****"+mobile.substr(7,4);

    $('.mobile').html(mobile);
}
// 替换字符资源
function replaceLast (str, replace) {
    preIdx = str.lastIndexOf('/') + 1,
    sufIdx = str.lastIndexOf('.'),
    strPrefix = str.slice(0, preIdx),
    strSuffix = str.slice(sufIdx);

    str = strPrefix + replace + strSuffix;

    return str;
}

// 关闭弹窗

$('.pic-share,.close').click(function(){
    $('.shadow').hide();
    event.ontouchmove=null;
});

$('.step1 .btn-next').click(function(){
    $('.step1').hide();
    $('.step2').show();
})



// 领券信息确认
$('.step1 .btn-next').on('click', function () {
    // 验证输入手机号
    if(checkTel('.step1 .mobile')){
    	var telNum = $('.step1 .mobile').val() + '';
        confirm(function(){
        	renderMobile(telNum);
        	$('.step1').hide();
        	$('.step2').show();
        },telNum);
    }
});

// 实物信息确认
$('.step1 .btn-next').on('click', function () {

    if (checkInfo()) {
        $('.step1').hide();
        confirm(function(){
            $('.step2').show();
        });
    }
});

var results = [{
    angle: -0,
    prize: '上海迪士尼门票代金券5元',
    pic: 'title_5',
    type: 'quan'
}, {
    angle: -40,
    prize: '迪士尼正版T恤',
    pic: 'title_txu',
    type: 'disney'
}, {
    angle: -80,
    prize: '迪士尼门票',
    pic: 'title_ticket',
    type: 'ticket'
}, {
    angle: -120,
    prize: '迪士尼正版公仔',
    pic: 'title_gongzai',
    type: 'disney'
}, {
    angle: -160,
    prize: '神州接送机名额',
    pic: 'title_sz',
    type: 'quan'
}, {
    angle: -200,
    prize: '线路代金券100元',
    pic: 'title_100',
    type: 'quan'
}, {
    angle: -240,
    prize: '线路代金券50元',
    pic: 'title_50',
    type: 'quan'
},
{
    angle: -280,
    prize: '上海迪士尼门票代金券20元',
    pic: 'title_20',
    type: 'quan'
},
{
    angle: -320,
    prize: '上海迪士尼门票代金券10元',
    pic: 'title_10',
    type: 'quan'
}];

//下载；
$(".download").click(function(){
	var szhdbm = ucar.uitls.getUrlParam("szhdbm");
	if(szhdbm == null){
		szhdbm = '';
	}
	window.location.href="http://mktm.10101111.com/html5/2015/app/mobileapp.html?szhdbm=dwn_"+szhdbm;
});


$('.pointer').click(function (){

    if(bRotate)return;
    document.addEventListener('touchmove',function(event){
        event.preventDefault();
    },false);
    renderMobile('18611245681');
    rotatePrize(2); // rotatePrize()参数替换为返回的中奖结果对应数值
});
