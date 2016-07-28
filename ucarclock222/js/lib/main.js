//740X1220
var VIDEO_NUMBER = 0;
//用户手机号码
var USER_PHONE = "";
/**
 *程序主要入口
 *[main]
 */
function main() {
    //mtPage.phone();

    $("#Alarm3").attr("autoplay", "autoplay");
    $("#Alarm3")[0].play();

    //滑动来解锁
    //hdUnlocking();
    getSysTime();
    $("#Jm_btn_ok").on("click", function () {
        mtPage.videoStreamline();
        //mtPage.phone();
        document.getElementById("Alarm3").pause();
    });

    //_touchmove();
    //    function _touchmove() {
    //        var _main = document.getElementsByClassName("Jm_l4m");
    //        console.log(_main);
    //        var mdjs = {};
    //        var _pageX = 0;
    //        var x = 0;
    //        _main[0].addEventListener("touchstart", function (event) {
    //            x = event.touches[0].pageX;
    //            mdjs = setInterval(function () {
    //                x = _pageX;
    //            }, 300);
    //            event.preventDefault();
    //        }, false);
    //        _main[0].addEventListener("touchmove", function (event) {
    //            _pageX = event.touches[0].pageX;
    //            if (_pageX - x > 300) {
    //                clearInterval(mdjs);
    //                x = 1e+10;
    //                //$("#main-container").show();
    //            }
    //        }, false);
    //        _main[0].addEventListener("touchend", function (event) {
    //            clearInterval(mdjs);
    //        }, false);
    //    }
}
/**
 *滑动来解锁
 *[hdUnlocking]
 */
function hdUnlocking() {
    var main = $(".Jm_l4m");
    var el = {};
    el.frame = main.find(".J_frame");
    var lodingFrame = {};
    $.get("images/loadingtxt/frame.json", function (msg) {
        //   alert(msg)
        lodingFrame = new FrameAnimation({
            main: el.frame,
            imgs: msg.data,
            interval: 70
        });
        lodingFrame.play();
    });
}
/**
 *获取系统时间
 *[getSysTime]
 */
function getSysTime() {
    var m_main = $(".J_l2m");
    var m_date = new Date();
    //小时
    var m_hours = m_date.getHours();
    //分钟
    var m_minutes = m_date.getMinutes() || "00";
    //星期
    var m_day = m_date.getDay();
    var m_dayStrings = [' 星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    //月
    var m_month = m_date.getMonth();
    //var m_monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //日
    var m_dateRi = m_date.getDate();
    //子对象
    var el = {};
    //文字集合
    var txt = {};
    //  console.log(m_day);
    if (m_hours < 10) {
        m_hours = "0" + m_hours;
    }
    if (m_minutes < 10) {
        m_minutes = "0" + m_minutes;
    }
    el.hours = m_main.find(".J_hours");
    el.minutes = m_main.find(".J_minutes");
    el.info = m_main.find(".J_info");
    el.d = m_main.find(".J_d");
    txt_info = m_month + 1 + "月" + m_dateRi + "日&nbsp;&nbsp;&nbsp;" + m_dayStrings[m_day];
    //  el.hours.html(m_hours);
    //  el.minutes.html(m_minutes);
    el.info.html(txt_info);
    //    el.d.html('');
}

/**
 *帧动画方法
 */
function FrameAnimation(options) {
    options = options || {};
    options.main = options.main || {};
    options.imgs = options.imgs || []; //图面数组
    options.interval = options.interval || 30; //事件间隔
    //var frameNumber = options.imgs.length; //帧总的数量
    var currentFrameNumber = 0; //当前帧数;
    var mSetTimeout = {}; //定时器
    var frameImgs = {};
    //添加图片到页面中
    $.each(options.imgs, function (i, n) {
        options.main.append("<img style='z-index:" + -i + "; opacity:0' src='" + n + "'>");
    });
    frameImgs = options.main.find("img");

    function mFrameAn() {
        // console.log(frameImgs)
        //        if (options.main.css("display") == "none") {
        //clearTimeout(mSetTimeout);
        //options.main.remove();
        //        }
        // console.log(frameImgs.length)
        mSetTimeout = setTimeout(function () {
            if (currentFrameNumber < frameImgs.length - 1) {
                frameImgs.eq(currentFrameNumber).css("opacity", 0);
                frameImgs.eq(currentFrameNumber + 1).css("opacity", 1);
                currentFrameNumber++;
            } else {
                frameImgs.eq(currentFrameNumber).css("opacity", 0);
                frameImgs.eq(0).css("opacity", 1);
                currentFrameNumber = 0;
            }
            mFrameAn();
        }, options.interval);
    }
    this.play = function () {
        mFrameAn();
    };
}