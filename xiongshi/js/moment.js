$(function () {
    $('.load').show();
    $('.x-box').hide();
    var imgPath = "images/";
    var loadImage = function (path, callback) {
        var img = new Image();
        img.onload = function () {
            img.onload = null;
            callback(path);
        };
        img.src = path;
    };
    function loadingPage() {
        var sourceArr = [
            'bj_one.jpg', 'qs_zi.png', 'qs_button.png', 'qs_xiong.png', 'qs_sorry.png', 'bare_qs.jpg', 'huayang.png', 'button_1.png', 'button_2.png', 'button_3.png', 'button_4.png',
            'fwc_qs.jpg', 'fwc_two.jpg', 'fwc_therr.jpg', 'fwc_four.jpg', 'fwc_five.jpg', 'fwc_six.jpg', 'bare_two.jpg', 'bare_three.jpg', 'bare_four.jpg', 'bare_five.jpg',
            'bare_six.jpg', 'mdq_two.jpg', 'mdq_qs.jpg', 'mdq_three.jpg', 'mdq_four.jpg', 'mdq_five.jpg', 'mdq_six.jpg', 'mdq_seven.jpg', 'dq_qs.jpg', 'dq_two.jpg', 'dq_three.jpg', 'dq_four.jpg', 'dq_five.jpg',
            'rao.jpg', 'button_bu.png', 'button_rao.png', 'finaily.jpg', 'lingquan.png', 'yiqi.png', 'fenxiang.jpg', 'lq-qs-beijing.jpg', 'button-lq.png', 'success_beijing.jpg', 'youhuiquan.png', 'down.png', 'yilingqu.png',
            'guoqi.png'
        ];
        for (var i = 0; i < sourceArr.length; i++) {
            sourceArr[i] = (imgPath + sourceArr[i]);
        }
        var imgLoader = function (imgs, callback) {
            var len = imgs.length, i = 0;
            while (imgs.length) {
                loadImage(imgs.shift(), function (path) {
                    callback(path, ++i, len);
                });
            }
        }
        imgLoader(sourceArr, function (path, curNum, total) {
            var percent = curNum / total;
            if (percent == 1) {
                $('.load,.one,.action-one,.action-two,.action-three,.action-four,.over,.fenxiang,.final,.lq-one,.two,.three,.success,.ceng').hide();
                $('.x-box').show();
                qsdong();
            }
        });
    }
    loadingPage();
    android:windowSoftInputMode="adjustPan";
    $('#audio2')[0].volume=0.2;
    var audio = $("#audio")[0];
    audio.volume=0.2;
    audio.pause();
    function qsdong() {
        $('.qs_xiong').addClass('animated bounceInDown').show(0, function () {
            $('.qs_sorry').fadeIn(500);
            ;
        });
    }
    $('.two').click(function () {
        $(this).hide();
    });
    $('.three').click(function () {
        $(this).hide();
    });
    $('.qs_button').click(function () {
        $('.qs').hide();
        $('.one').show();
    });
    $('.button-lingqu').click(function () {
        var phone = $('#input').val();
        var reg = /^1[358][0-9]{9}$/;
        if (phone != '') {
            if (reg.test(phone)) {
                //输入正确手机号执行的操作
                $('.success').show();
            } else {
                alert("请填写正确的手机号");
            }
        }
    });
    var arr =[]; 
    $('.button_1').click(function () {
        $('.one,.over').hide();
        $('.action-one,.ceng').show();
        i = 0;
        arr = [{'time': '700', 'picurl': 'images/fwc_two.jpg'}, {'time': '600', 'picurl': 'images/fwc_qs.jpg'}, {'time': '500', 'picurl': 'images/fwc_two.jpg'}, {'time': '500', 'picurl': 'images/fwc_therr.jpg'}, {'time': '500', 'picurl': 'images/fwc_four.jpg'}, {'time': '400', 'picurl': 'images/fwc_six.jpg'}, {'time': '300', 'picurl': 'images/fwc_five.jpg'}, {'time': '300', 'picurl': 'images/fwc_six.jpg'}, {'time': '300', 'picurl': 'images/fwc_five.jpg'}, {'time': '300', 'picurl': 'images/fwc_six.jpg'}, {'time': '300', 'picurl': 'images/lei.jpg'}];
        dong(".fwc_beijing", arr[0]['picurl'], arr[0]['time'], arr.length, ".action-one");
    });
    $('.yiqi2').click(function () {
        $('.fenxiang').show();
    });
    //点击下载按钮跳转下载
    $('.down').click(function () {
        location.href = ""
    });

    $('.button_2').click(function () {
        $('.action_one,.one').hide();
        $('.action-two,.ceng').show();
        i = 0;
        arr = [{'time': '600', 'picurl': 'images/bare_four.jpg'}, {'time': '600', 'picurl': 'images/bare_three.jpg'}, {'time': '600', 'picurl': 'images/bare_two.jpg'}, {'time': '600', 'picurl': 'images/bare_qs.jpg'}, {'time': '400', 'picurl': 'images/bare_four.jpg'}, {'time': '400', 'picurl': 'images/bare_three.jpg'}, {'time': '400', 'picurl': 'images/bare_two.jpg'}, {'time': '400', 'picurl': 'images/bare_qs.jpg'}, {'time': '300', 'picurl': 'images/bare_four.jpg'}, {'time': '300', 'picurl': 'images/bare_five.jpg'}, {'time': '300', 'picurl': 'images/bare_six.jpg'}, {'time': '300', 'picurl': 'images/bare_five.jpg'}, {'time': '300', 'picurl': 'images/bare_six.jpg'}, {'time': '300', 'picurl': 'images/lei.jpg'}];
        dong(".bare_beijing", arr[0]['picurl'], arr[0]['time'], arr.length, ".action-two");
    });
    $('.button_3').click(function () {
        $('.one').hide();
        i = 0;
        $('.action-three,.ceng').show();
        arr = [{'time': '600', 'picurl': 'images/mdq_two.jpg'}, {'time': '600', 'picurl': 'images/mdq_three.jpg'}, {'time': '600', 'picurl': 'images/mdq_qs.jpg'}, {'time': '600', 'picurl': 'images/mdq_four.jpg'}, {'time': '600', 'picurl': 'images/mdq_five.jpg'}, {'time': '600', 'picurl': 'images/mdq_qs.jpg'}, {'time': '300', 'picurl': 'images/mdq_two.jpg'}, {'time': '300', 'picurl': 'images/mdq_three.jpg'}, {'time': '300', 'picurl': 'images/mdq_qs.jpg'}, {'time': '300', 'picurl': 'images/mdq_four.jpg'}, {'time': '300', 'picurl': 'images/mdq_five.jpg'}, {'time': '300', 'picurl': 'images/mdq_qs.jpg'}, {'time': '300', 'picurl': 'images/mdq_six.jpg'}, {'time': '300', 'picurl': 'images/mdq_seven.jpg'}, {'time': '300', 'picurl': 'images/mdq_six.jpg'}, {'time': '300', 'picurl': 'images/mdq_seven.jpg'}, {'time': '300', 'picurl': 'images/lei.jpg'}];
        dong(".mdq_beijing", arr[0]['picurl'], arr[0]['time'], arr.length, ".action-three");
    });
//    var four = ".action-four";
    $('.button_4').click(function () {
        arr=[{'time': '600', 'picurl': 'images/dq_two.jpg'}, {'time': '600', 'picurl': 'images/dq_three.jpg'}, {'time': '600', 'picurl': 'images/dq_qs.jpg'}, {'time': '300', 'picurl': 'images/dq_two.jpg'}, {'time': '300', 'picurl': 'images/dq_three.jpg'}, {'time': '300', 'picurl': 'images/dq_qs.jpg'}, {'time': '200', 'picurl': 'images/dq_two.jpg'}, {'time': '200', 'picurl': 'images/dq_three.jpg'}, {'time': '200', 'picurl': 'images/dq_qs.jpg'}, {'time': '300', 'picurl': 'images/dq_four.jpg'}, {'time': '300', 'picurl': 'images/dq_five.jpg'}, {'time': '300', 'picurl': 'images/dq_four.jpg'}, {'time': '300', 'picurl': 'images/dq_five.jpg'}, {'time': '300', 'picurl': 'images/lei.jpg'}];
        $('.one').hide();
        $('.action-four,.ceng').show();
        i = 0;
        dong(".dq_beijing", arr[0]['picurl'], arr[0]['time'], arr.length, ".action-four");
    });
    var i = 0;
    
    function dong(names, src, time, loop, num) {
        var arrdata = arr;
        i++;
        if (i < loop) {
            setTimeout(function () {
                $(names).attr('src', src);
                dong(names, arrdata[i]['picurl'], arrdata[i]['time'], arrdata.length, num);
            }, time);
        } else {
            $(names).attr('src','images/lei.jpg');
            setTimeout(function () {
                $(num).hide();
                $('.ceng').hide();
                $('.over').show();
                $('#audio2')[0].pause();
                audio.play();
            }, 1500);
        }
    }
    $('.bujieqi').click(function () {
        i = 0;
        $('#audio2')[0].play();
        audio.pause();
        $('.over').hide();
        $('.one').show();
    });
    $('.raoleta').click(function () {
        $('#audio2')[0].play();
        audio.pause();
        $('.over,.final').hide();
        $('.final').show();
    });
    $('.yiqi').click(function () {
        $('.fenxiang').show();
    });
    $('.fenxiang').click(function () {
        $(this).hide();
    });
    $('.lingquan').click(function () {
        $('.final').hide();
        $('.lq-one').show();
    });
    //点击下载神州跳转链接
    $('.font').click(function () {
        location.href = "";
    });
    //微信分享
//            var shares = {
//                'title': '',
//                'desc': '',
//                'link': "",
//                'imgUrl': ''
//            }
//            wx.config({
//                debug: false,
//                appId: '<?php echo $signPackage["appId"]; ?>',
//                timestamp: '<?php echo $signPackage["timestamp"]; ?>',
//                nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
//                signature: '<?php echo $signPackage["signature"]; ?>',
//                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
//            });
//            wx.ready(function () {
//                wx.onMenuShareTimeline({
//                    title: shares.title,
//                    link: shares.link,
//                    imgUrl: shares.imgUrl,
//                    success: function () {
//                        // 用户确认分享后执行的回调函数
//                        
//                    },
//                    cancel: function () {
//                        // 用户取消分享后执行的回调函数
//                    }
//                });
//                wx.onMenuShareAppMessage({
//                    title: shares.title,
//                    desc: shares.desc,
//                    link: shares.link,
//                    imgUrl: shares.imgUrl,
//                    type: '',
//                    dataUrl: '',
//                    success: function () {
//                        // 用户确认分享后执行的回调函数
//                        
//                    },
//                    cancel: function () {
//                        // 用户取消分享后执行的回调函数
//                    }
//                });
//            });
//            wx.error(function (res) {
//                alert(res.errMsg);
//            });
});