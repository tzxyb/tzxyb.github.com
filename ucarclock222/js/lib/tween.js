/**
 *首页
 */
function tweenHome() {}
/*人物对话*/
function l11m(options) {
    options = options || {};
    options.onComplete = options.onComplete || function () {};
    var main = $(".Jm_page_videostreamline");
    var el = {};
    el.bg = main.find(".Jan_bg");
    el.bgs = el.bg.find("img");
    new TimelineMax({
            //paused: true
            onComplete: function () {
                options.onComplete();
            }
        })
        .from(el.sm_1, 0.6, {
            x: "-100%",
            rotation: -45,
            ease: Back.easeOut.config(1)
        })
}
/**
 *手机页面动画
 */
function tweenPagePhone(options) {
    options = options || {};
    options.onComplete = options.onComplete || function () {};
    var main = $(".Jm_page_phone");
    var el = {};
    el.sm_1 = main.find(".Jan_sm_1");
    el.sm_1_1 = main.find(".Jan_sm_1_1");
    el.sm_1_2 = main.find(".Jan_sm_1_2");
    el.sm_1_3 = main.find(".Jan_sm_1_3");
    el.sm_2 = main.find(".Jan_sm_2"); //文案图
    el.sm_3 = main.find(".Jan_sm_3"); //小汽车
    el.sm_3_1 = main.find(".Jan_sm_3_1"); //小汽车
    el.sm_3_2 = main.find(".Jan_sm_3_2"); //小汽车
    el.sm_3_3 = main.find(".Jan_sm_3_3"); //小汽车
    new TimelineMax({
            //paused: true
            onComplete: function () {
                options.onComplete();
            }
        })
        .from(el.sm_1, 0.6, {
            x: "-100%",
            rotation: -45,
            ease: Back.easeOut.config(1)
        })
        .from(el.sm_2, 0.8, {
            x: "-100%",
            ease: Back.easeOut.config(1)
        }, "-=0.3")
        .set(el.sm_1_2, {
            onStart: function () {
                $(this.target).addClass("an-opacity-1s");
            }
        })
        .set(el.sm_1_3, {
            onStart: function () {
                $(this.target).addClass("yoyo");
            }
        })
        .staggerFrom([el.sm_3_1, el.sm_3_2, el.sm_3_3], 0.5, {
            opacity: 0,
            x: "-300%"
        }, 0.28)
        .staggerTo([el.sm_3_1, el.sm_3_2, el.sm_3_3], 0.5, {
            x: "400%"
        }, 0.28,"+=2")
        .add("node2")
        .to(el.sm_1, 0.5, {
            x: "100%",
            y: "50%",
            rotation: 45
        }, "node2")
        .to(el.sm_2, 0.5, {
            x: "100%"
        }, "node2")
        .to(el.sm_3, 0.5, {
            x: "100%"
        }, "node2")
        //        .from(el.sm_1_2, 0.8, {
        //            onStart: function () {
        //
        //            }
        //        })
}
/**
 *为家人老板，代叫请呼叫，神舟专车
 */
function tweenPageL6m() {
    var main = $(".Jman_l6m");
    var el = {};
    el.sm2 = main.find(".Jan_sm_2");
    el.sm3 = main.find(".Jan_sm_3");
    el.sm4 = main.find(".Jan_sm_4");
    el.sm5 = main.find(".Jan_sm_5");
    el.btn1 = main.find(".Jan_btn_1");
    el.btn2 = main.find(".Jan_btn_2");
    new TimelineMax()
        .from(el.sm2, 0.6, {
            x: "-100%",
            ease: Back.easeOut.config(1)
        })
        .add("node1", "-=0.5")
        .from(el.sm3, 0.5, {
            x: "200%",
            onComplete: function () {
                $(this.target).addClass("yoyo")
            }
        }, "node1")
        .from(el.sm5, 0.6, {
            x: "-100%"
        }, "node1")
        .from(el.sm4, 0.6, {
            x: "-100%",
            ease: Back.easeOut.config(1.7)
        }, "node1")
        .staggerFrom([el.btn1, el.btn2], 0.5, {
            y: "300%",
            ease: Back.easeOut.config(1)
        }, 0, "node1+=0.3")
}
/**
 *输入手机号获取优惠券
 *离场
 */
function tweenPageL7mLeave() {
    var main = $(".Jman_l7m");
    var el = {};
    el.inputbox = main.find(".Jan_inputbox");
    el.btn = main.find(".Jan_btn");
    new TimelineMax()
        .add("node1")
        .to(el.inputbox, 0.5, {
            y: -200,
            onStart: function () {
                $(this.target).addClass("an-hide-opacity-05s");
            }
        }, "node1")
        .to(el.btn, 0.5, {
            y: -200,
            onStart: function () {
                $(this.target).addClass("an-hide-opacity-05s");
            }
        }, "node1")
}
/**
 *获取优惠券页面
 *进场
 */
function tweenPageL7mEnter() {
    var main = $(".Jman_l8m");
    var el = {};
    el.phonebox = main.find(".Jan_phonebox");
    el.btn1 = main.find(".Jan_btn_1");
    el.btn2 = main.find(".Jan_btn_2");
    new TimelineMax()
        .add("node1")
        .from(el.phonebox, 0.5, {
            y: 200,
            onStart: function () {
                $(this.target).addClass("an-opacity-1s");
            }
        }, "node1")
        .staggerFrom([el.btn1, el.btn2], 0.5, {
            y: "300%"
        }, 0, "node1")
}
//隔页1
function tweenQASuccess(options) {
    var options = options || {};
    options.main = options.main || false;
    var el = {};
    el.title = options.main.find(".Jan_txt");
    el.bk = options.main.find(".Jan_bk");
    el.logo = options.main.find(".Jan_logo");
    el.txt = options.main.find(".Jan_txt");
    el.smBox = options.main.find(".Jan_sm_box");
    el.sm1 = options.main.find(".Jan_sm_1");
    el.btn = options.main.find(".Jan_btn");
    options.main.find("an-opacity").removeClass("an-opacity");
    //console.log(t1)
    new TimelineMax({
            //paused: true
        })
        .add("node1")
        .from(el.logo, 0.8, {
            y: -200,
            ease: Back.easeOut.config(1.7),
            onStart: function () {
                $(this.target).addClass("an-opacity");
            }
        }, 0.2)
        .staggerFromTo([el.title, el.smBox, el.btn], 0.8, {
            y: 500
        }, {
            y: 0,
            ease: Back.easeOut.config(1.7),
            onStart: function () {
                $(this.target).addClass("an-opacity");
            }
        }, 0.1, "node1")
        .from(el.sm1, 0.5, {
            y: 200,
            ease: Back.easeOut.config(1.7),
            onStart: function () {
                $(this.target).addClass("an-opacity");
            }
        }, "node1+=0.2")
        .from(el.bk, 0.5, {
            y: -200,
            ease: Back.easeOut.config(1.7),
            onStart: function () {
                $(this.target).addClass("an-opacity");
            }
        }, "node1");
}
/**
 *滑动解锁入场
 */
function tweenHdUnlocking() {}