
var share_txt=[];
var share_txt_2=[];

$(function () {
 share_txt = [{
        title: "",
        description: "没发现这个品牌，你也敢吐槽《恶棍天使》植入广告多？"
    }, {
        title: "",
        description: "逆天黑的《恶棍天使》火了一些品牌，唯独少了这个…… "

    }, {
        title: "",
        description: "发现这个良心植入，你就不会给《恶棍天使》打负分了"

    }, {
        title: "",
        description: "广告植入界的傻白甜，植入如此低调，就是让你找不到"

    }];

     share_txt_2 = [{
        title: "100年润发不服！",
        description: "给《恶棍天使》广告植入负分的，你粗来我保证不打死你"
    }, {
        title: "史上最委屈的广告植入",
        description: "100年润发重金植入《恶棍天使》竟无人发现→"

    }, {
        title: "帮100年润发上头条",
        description: "100年润发求网友做主“我们也植入了《恶棍天使》”"

    }];


    var share_img = ["http://www.weidongs.com/100nrfp2/images/share_img_1.jpg", "http://www.weidongs.com/100nrfp2/images/share_img_2.jpg", "http://www.weidongs.com/100nrfp2/images/share_img_3.jpg"];


    share_txt.sort(function () {
        return 0.5 - Math.random();
    });

    share_txt_2.sort(function () {
        return 0.5 - Math.random();
    });

    share_img.sort(function () {
        return 0.5 - Math.random();
    });

    initWechat({
        imgUrl: share_img[0], //分享图片
        title: share_txt_2[0].title, //分享标题
        description: share_txt_2[0].description //分享描述
    });
});

function initWechat(options) {
    options = options||{};
    var link = options.link || location.href;
    $.get('http://www.weidongs.com/100nrfp2/api/get_sign_package?s=' + randomNumber(), {
        url: location.href
    }, function (ret) {
        //console.log(ret.data)
        var data = ret.data;
        wx.config({
            debug: location.href.indexOf('debug') > -1,
            appId: data.appId,
            nonceStr: data.nonceStr,
            timestamp: data.timestamp,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
        });

        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: share_txt[0].description,
                link: link,
                imgUrl: options.imgUrl,
                success: function () {
                    // alert('a')//分享到朋友圈
                    // track_btn('ShareTimeline');
                    getGameOpportunity();
                },
                fail: function (err) {
                    console.log(err);
                }
            });

            wx.onMenuShareAppMessage({
                title: options.title,
                desc: options.description,
                link: link,
                imgUrl: options.imgUrl,
                success: function () {
                    // alert('b')//分享给朋友
                    //track_btn('ShareAppMessage');

                    getGameOpportunity();
                },
                fail: function (err) {
                    console.log(err);
                }
            });

            wx.onMenuShareQQ({
                title: options.title,
                desc: options.description,
                link: link,
                imgUrl: options.imgUrl,
                fail: function (err) {
                    console.log(err);
                }
            });

            wx.onMenuShareWeibo({
                title: options.title,
                link: link,
                imgUrl: options.imgUrl,
                fail: function (err) {
                    console.log(err);
                }
            });
        });

        //        wx.error(function (reason) {
        //            if (reason == 'invalid signature') {
        //                $.get('/services/wechat/cleartoken');
        //            }
        //        });
    }, 'jsonp');
}
