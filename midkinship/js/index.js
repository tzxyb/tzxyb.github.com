
var teachersday = {
    wh: $(window).height(),
    picPrefix: 'images/',
    chance: 1, // 抽奖机会
    motionData: { // 运动数据
        shakeFlag: true,
        limit: 1500,
        last_update: 0,
        x: 0,
        y: 0,
        z: 0,
        last_x: 0,
        last_y: 0,
        last_z: 0
    },
    currentPers: 200000, // 最新摇奖人数
    currentSum: 500000, // 最新摇奖金额
    sumsLength: 6, // 金额长度
    sumsList: [], // 滚动金额列表
    sumsListLength: 5, // 滚动列表长度
    isSelectable: true,
    grade: 0, // 成绩
    currentIdx: 0, //
    questions: [{ // 题目数据
        picQ: 'teachersday_question_one_q.png',
        picA: 'teachersday_question_one_a.png',
        answerIdx: 3,
        correctTip: 'teachersday_tips_one_correct.png',
        wrongTip: 'teachersday_tips_one_wrong.png'
    }, {
        picQ: 'teachersday_question_two_q.png',
        picA: 'teachersday_question_two_a.png',
        answerIdx: 3,
        correctTip: 'teachersday_tips_two_correct.png',
        wrongTip: 'teachersday_tips_two_wrong.png'
    }, {
        picQ: 'teachersday_question_three_q.png',
        picA: 'teachersday_question_three_a.png',
        answerIdx: 2,
        correctTip: 'teachersday_tips_three_correct.png',
        wrongTip: 'teachersday_tips_three_wrong.png'
    }, {
        picQ: 'teachersday_question_four_q.png',
        picA: 'teachersday_question_four_a.png',
        answerIdx: 3,
        correctTip: 'teachersday_tips_four_correct.png',
        wrongTip: 'teachersday_tips_four_wrong.png'
    }],
    currentQuestion: null, // 当前题目
    congrates: [{
        picSrc: 'teachersday_congrates_level_0.png'
    }, {
        picSrc: 'teachersday_congrates_level_1.png'
    }, {
        picSrc: 'teachersday_congrates_level_2.png'
    }, {
        picSrc: 'teachersday_congrates_level_3.png'
    }, {
        picSrc: 'teachersday_congrates_level_4.png'
    }],
    coupons: [{ // 奖券
        picSrc: 'teachersday_coupon_4.png',
        money: 4
    }, {
        picSrc: 'teachersday_coupon_6.png',
        money: 6
    }, {
        picSrc: 'teachersday_coupon_10.png',
        money: 10
    }],
    cacheAnswers: {},

    // 工具函数
    randomNum: function (sum) { // 随机数字
        var num = Math.floor(Math.random() * sum);

        // console.log('Num: ', num);
        return num;
    },
    randomRange: function (min, max) { // 随机范围数字
        return Math.floor(Math.random() * (max - min) + min);
    },
    hideMobile: function (mobile) { // 隐藏手机号码

        mobile = mobile ?  (mobile.substr(0,3) + "****" + mobile.substr(7,4)) : '';

        return mobile;
    },
    checkTel: function (selectorStr) { // 检查手机号输入

        var tel =  $(selectorStr).val();

        // console.log(tel);
        if (null === tel || "" === tel || tel.length === 0 || tel == '请输入手机号') {
             ucar.uitls.show("亲，填写手机号，<br>才能领券哦！");
            return false;
        }

        if(! this.mobileValidate(tel) ){
            ucar.uitls.show("亲，填错啦，<br>重新输入试试！");
            return false;
        }else{
            return true;
        }
    },
    mobileValidate: function (mobile) { // 手机号码验证

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
    },
    initDeviceMotion: function () { // 手机运动初始

        if (window.DeviceMotionEvent) {
            $(window).on('devicemotion', this.handleDeviceMotion)
        }else{
             ucar.uitls.show("该设备不支持摇一摇功能!");
        }
    },
    handleDeviceMotion: function (event) { // 手机运动处理事件

        var acceleration = event.accelerationIncludingGravity,
            curTime = new Date().getTime(),
            diffTime = curTime - teachersday.motionData.last_update;

        if (diffTime > 100) {

            teachersday.motionData.last_update = curTime;
            teachersday.motionData.x = acceleration.x;
            teachersday.motionData.y = acceleration.y;
            teachersday.motionData.z = acceleration.z;

            var speed = Math.abs(teachersday.motionData.x + teachersday.motionData.y + teachersday.motionData.z - teachersday.motionData.last_x - teachersday.motionData.last_y - teachersday.motionData.last_z) / diffTime * 10000;

            if (speed > teachersday.motionData.limit) {

                if(teachersday.motionData.shakeFlag){

                    teachersday.playMusic();

                    // console.log('shaked');
                    teachersday.motionData.shakeFlag = false;
                }
            }

            last_x = teachersday.motionData.x;
            last_y = teachersday.motionData.y;
            last_z = teachersday.motionData.z;
        }
    },
    preventDefault: function (e) { // 阻止默认
        return false;
    },
    releaseDefault: function (e) { // 释放默认
        return true;
    },
    playMusic: function () { // 播放摇动音效

        var $music = $('audio');

        // console.log('Music: ', $music);

        $music[0].play();
    },
    preloadPics: function (picArr) {

        for (var i = 0; i < picArr.length; i++) {
            console.log('questionPic: ', picArr[i]);

            var $picQ = $('<img />'),
                $picA = $('<img />');

            $picQ.attr('src', teachersday.picPrefix + picArr[i].picQ);
            $picA.attr('src', teachersday.picPrefix + picArr[i].picA);

        }
    },

    // 页面相关函数
    renderQuestion: function (questionIdx) {

        var quesSrc = '',
            answerSrc = '';

        teachersday.currentQuestion = teachersday.questions[questionIdx];
        teachersday.currentIdx = questionIdx;

        quesSrc = teachersday.picPrefix + teachersday.currentQuestion.picQ;
        answerSrc = 'url(' + teachersday.picPrefix + teachersday.currentQuestion.picA + ')';

        $('.result_tip img').remove();
        $('.answer ul li').removeClass('selected');
        $('.ques img').attr('src', quesSrc);
        $('.answer ul').css({
            'background-image': answerSrc
        });

    },
    renderStamp: function (isCorrect) {

        var correctSrc = teachersday.picPrefix + teachersday.currentQuestion.correctTip,
            wrongSrc = teachersday.picPrefix + teachersday.currentQuestion.wrongTip,
            $img = $('<img />');

        $('.result_tip').append($img);

        if (isCorrect) {
            $('.result_tip img').attr('src', correctSrc);
            teachersday.grade++;
        } else {
            $('.result_tip img').attr('src', wrongSrc);
        }

        teachersday.currentIdx++;

        setTimeout(function () {

            if (teachersday.currentIdx > 3) {
                //alert('renderResult: grade---' +  teachersday.grade);
                teachersday.renderResult(teachersday.grade);

                // console.log('cacheAnswers: ', teachersday.cacheAnswers);

                return;
            }

            teachersday.isSelectable = true;
            teachersday.renderQuestion(teachersday.currentIdx);

        }, 2000);

    },
    renderResult: function (grade) {

        var congrateSrc = teachersday.picPrefix + teachersday.congrates[grade].picSrc;

        $('.questions').hide();
        $('.results').show();

        $('.congrate img').attr('src', congrateSrc);
    },
    getAward: function (mobile, grade) {

        var mobile = teachersday.hideMobile(mobile),
            picSrc = '',
            tempSrc = '';

        if (grade === 4) {
            tempSrc = teachersday.coupons[2].picSrc;
        } else if (grade === 3) {
            tempSrc = teachersday.coupons[1].picSrc;
        } else {
            tempSrc = teachersday.coupons[0].picSrc;
        }

        picSrc = teachersday.picPrefix + tempSrc;

        // console.log('mobile: ', mobile, 'picSrc: ', picSrc);
        $('.coupon img').attr('src', picSrc);
        $('.putin .account').text(mobile);

        $('.results').hide();
        $('.awards').show();
    }
};

// 加载图片
teachersday.preloadPics(teachersday.questions);

// 输入框聚焦
$('#mobile').on('focus', function() {
    $('body').height(teachersday.wh);
});

// 开始答题
$('.start_btn').on('click', function () {

    teachersday.renderQuestion(0);

    $('body section').hide();
    $('.questions').show();
    // console.log('go question');
});

// 选择题目
$('.answer ul li').on('click', function () {

    var checkAnswerIdx = $(this).index(),
        optionName = 'ques_' + teachersday.currentIdx,
        isRight = false;

    if (!teachersday.isSelectable) {
        return;
    }

    $(this).addClass('selected').siblings().removeClass('selected');

    if (checkAnswerIdx === teachersday.currentQuestion.answerIdx) {
        teachersday.renderStamp(true);
        isRight = true;
    } else {
        teachersday.renderStamp(false);
    }

    teachersday.cacheAnswers[optionName] = {};
    teachersday.cacheAnswers[optionName]['check'] = checkAnswerIdx;
    teachersday.cacheAnswers[optionName]['isRight'] = isRight;

    window.localStorage.cacheAnswers = JSON.stringify(teachersday.cacheAnswers);

    teachersday.isSelectable = false;
});

// 马上领取
$(".get_coupon").on('click', function () {

    var mobile = $("#mobile").val();

    if(teachersday.checkTel('#mobile')){

        // 模拟数据
        teachersday.getAward(mobile, teachersday.grade);

        // 实际数据：向后台传输mobile并记录
        // $.ajax({});
        // 调用：teachersday.getAward(mobile, grade);
    }
});

// 分享提示
$('.share').on('click', function () {
    $('.popup').show();
});
$('.popup').on('click', function () {
    $(this).hide();
});