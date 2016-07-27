var mtPageFunction = {
    /**
     *关闭除了首页以外的所有页面
     *[mtPageFunction.closeAllPage]
     */
    closeAllPage: function () {
        // $("[data-page='true']").hide();
    }
};
/**
 *[mtPage]
 *
 *@param {function} mtPage.video -视频页面
 *@param {function} mtPage.phone -手机页面
 *@param {function} mtPage.l6m   -为家人老板，代叫请呼叫，神舟专车
 *@param {function} mtPage.l7m   -输入手机号获取优惠券
 *@param {function} mtPage.l8m   -获取优惠券页面
 *@param {function} mtPage.l9m   -拯救身边的大忙人
 *@param {function} mtPage.l10m  -你已经领取过了
 */
var mtPage = {
    /**
     *视频页面
     *[mtPage.videoStreamline]
     */
    videoStreamline: function () {
        var main = $(".Jm_page_videostreamline");
        var num = 0;
        var el = {};

        el.btn = main.find(".J_btn");
        el.bgs = main.find(".J_bg img");
        el.txt1 = main.find(".J_txt1");
        el.txt1s = el.txt1.find("img");
        main.show();
        main.css("left", 0);
        //el.bgs.hide();

        //el.bgs.eq(0).css("opacity", 1);
        // el.bgs.eq(0).addClass("an-opacity-1s");


        _tweenEnter();
        //  showBtn();

        //        function showBtn() {
        //            setTimeout(function () {
        //                _btnclick();
        //            }, 1000)
        //        }


        function _btnclick() {
            el.btn.one("click", function () {
                num++;

                if (num >= 5) {
                    mtPage.phone();
                } else {
                    _tweenLeave();
                }
                //  showBtn();


            });
        }



        function _tweenEnter(_options) {
            _options = _options || {};
            el.bgs.eq(num).addClass("an-opacity-1s");
            el.btn.find("img").eq(0).attr("src", "images/btn_1_" + (num + 1) + ".png");
            // console.log(el.txt1s)
            new TimelineMax({
                    onComplete: function () {
                        _btnclick();
                    }
                })
                .from(el.txt1s.eq(num), 0.4, {
                    onStart: function () {
                        $(this.target).css("opacity", 1)
                    },
                    scale: 0,
                    transformOrigin: "top right",
                    ease: Back.easeOut.config(1)
                }, "+=0.5")
                .fromTo(el.btn, 0.6, {
                    y: "300%"
                }, {
                    y: "0%",
                    ease: Power3.easeOut
                })
        }

        function _tweenLeave(_options) {
            _options = _options || {};
            new TimelineMax({
                    onComplete: function () {
                        _tweenEnter();
                    }
                })
                .add("node1")
                .to(el.txt1s.eq(num - 1), 0.4, {
                    onStart: function () {
                        $(this.target).css("opacity", 1)
                    },
                    scale: 0,
                    transformOrigin: "top right",
                    ease: Back.easeOut.config(1)
                }, "node1")
                .to(el.btn, 0.4, {
                    y: "300%",
                    ease: Power2.easeOut
                }, "node1")
        }


    },
    /**
     *手机页面
     *[mtPage.phone]
     */
    phone: function () {
        var main = $(".Jm_page_phone");
        var el = {};
        el.sm1 = main.find(".J_sm_1");
        el.sm2 = main.find(".Jm_page_phone");
        main.show();
        new tweenPagePhone({
            onComplete: function () {
                mtPage.l6m();
            }
        });
        document.getElementById('bgm').play();
    },
    /**
     *为家人老板，代叫请呼叫，神舟专车
     *[mtPage.l6m]
     */
    l6m: function () {
        var main = $(".Jm_page_l6m");
        var el = {};
        el.btn1 = main.find(".J_btn_1");
        el.btn2 = main.find(".J_btn_2");
        main.show();
        new tweenPageL6m();
        el.btn1.click(function () {
            location.href = "coupon.html";
        });
        el.btn2.click(function () {
            mtPage.l9m();
        });
    },
    /**
     * 输入手机号获取优惠券
     *[mtPage.l7m]
     */
    l7m: function () {
        var main = $("#Jm_page_l7m");
        var el = {};
        el.input = main.find("input");
        el.btn = main.find('button');
        main.show();
        el.input.click(function () {
            if ($(this).val() === "输入手机号，即刻领取优惠券") {
                $(this).val("");
            }
        });
        el.btn.click(function () {
            var mobileRule = /^1\d{10}$/;
            if (!mobileRule.test(el.input.val())) {
                alert("请输入正确的手机号码");
                return false;
            }


            //   console.log(parseInt(Math.random() * 10))


            if (parseInt(Math.random() * 10) > 5) {
                mtPage.l10m();
                return false;
            }

            tweenPageL7mLeave();
            USER_PHONE = el.input.val();
            mtPage.l8m();
        });
    },
    /**
     *获取优惠券页面
     *[mtPage.l8m]
     */
    l8m: function () {
        var main = $("#Jm_page_l8m");
        var el = {};
        el.btn1 = main.find(".J_btn_1");
        el.btn2 = main.find(".J_btn_2");
        el.phone = main.find(".J_phone");
        el.phone.html(USER_PHONE);
        main.show();
        new tweenPageL7mEnter();
        //{button}拯救大忙人
        el.btn1.click(function () {
            mtPage.l9m();
            return false;
        });
        //{button}下载神舟专车app
        el.btn2.click(function () {
            location.href = "";
            return false;
        });
    },
    /**
     *拯救身边的大忙人
     *[mtPage.l9m]
     */
    l9m: function () {
        var main = $("#Jm_page_l9m");
        main.show();
        main.unbind("click");
        main.click(function () {
            $(this).hide();
        });
    },
    /**
     *你已经领取过了
     *[mtPage.l10m]
     */
    l10m: function () {
        var main = $("#Jm_page_l10m");
        main.show();
        main.unbind("click");
        main.click(function () {
            $(this).hide();
        });
    }
};