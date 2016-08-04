var isAllTouched = false,
    isAllowed = true,
    points = ['left', 'right'],
    touchPoints = [];

$('.finger img').on('touchstart', function (e) {
    e.preventDefault();

    var tar = e.target,
        tarName = $(tar).attr('class');

    /*console.log('tar: ', tar);
    console.log('Touchevent:', e);
    console.log('Touchevent target: ', e.target);*/

    if (points.indexOf(tarName) > -1) {
        touchPoints.push(tarName);
    }

    //console.log('touchPoints: ', touchPoints);
    isAllTouched = points.every(function (ele, idx, arr) {
        if (touchPoints.length !== points.length) {
            return false;
        }

        return touchPoints.indexOf(ele) > -1;
    });

    /*console.log('isAllTouched', isAllTouched);
    console.log('touchPoints: ', touchPoints);*/
    //alert('touchPoints: ' + touchPoints);
    if (isAllTouched) {
        //console.log('Matched touchPoints', touchPoints);
        touchPoints = [];
        //alert('Match!');

        setTimeout(function() {
            showResult();
        }, 1000);
    }
}).on('touchmove', function (e) {
    e.preventDefault();
}).on('touchend', function (e) {
    var tar = e.target,
        tarName = $(tar).attr('class'),
        idx = 0;

    //console.log('tarName: ', tarName);
    touchPoints.every(function (ele, idx, arr) {
        console.log('ele: ', ele, 'tarName: ', tarName);
        if (ele === tarName) {
            idx = arr.indexOf(tarName);
            arr.splice(idx, 1);
        }
    });
    isAllTouched = false;

});


function showResult () {
    var res = Math.floor(Math.random() * 2);

    $('section').hide();

    //alert(res);
    if (res === 0) {
        $('.match').show();
    } else {
        $('.noprize').show();
    }
}



$(".get-btn").click(function(){
    var mobile = $("#mobile").val();

    var showArr = ['new', 'old', 'had'],
        resId = Math.floor(Math.random() * 3),
        cln = showArr[resId];

    // 显示对应结果信息
    $('.layer').removeClass('new old had').addClass(cln);

    if(checkTel()){
        $('.popup').show();
       /*$.ajax({
                url : "/quan/ztephone7.do",
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
                            $('#phone').html(mobile);
                            $('.popup').show();
                            $('.get-ticket').hide();
                        }else if(result == 2){//已领取
                            $('#phone').html(mobile);
                            $('.popup').show();
                            $('.res .get').hide();
                            $('.res .got').show();
                            $('.get-ticket').hide();
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
                            ucar.uitls.show("不符合领取条件！");
                        }else if(result == 9){
                            ucar.uitls.show("纳尼，领券人太多，<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
                        }
                    }
                }
        });*/
 }});


function checkTel(){
    var tel =  $('#mobile').val();
    //console.log(tel);
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


var wh = $(window).height();

// 分享
$('.share').on('click', function() {
    $('.share-layer').show();
});

// 分享提示层
$('.share-layer').on('click', function() {
    $(this).hide();
});


$('#mobile').focus(function() {
    $('body').height(wh);
});