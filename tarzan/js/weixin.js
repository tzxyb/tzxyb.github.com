/**
 * User: jy.feng
 * Date: 2015/4/17
 * Time: 19:43
 */

var localgetUrlParam=function(key) {
    if (!key) {}
    var url = window.location.search;
    url = url.split("?")[1];
    if (!url) {
        return null;
    }
    var value = null;
    var params = url.split("&");
    $.each(params,
        function(i, param) {
            var kv = param.split("=");
            if (kv[0] == key) {
                value = decodeURIComponent(kv[1]);
                return false;
            }
        });
    return value;
};

var num;
if(window.location.href.indexOf("fires_friend") > 0){
	num=ucar.uitls.getStorage("num");
	if(!num){
		num = Math.floor(Math.random()*1000)+1000;
		ucar.uitls.setStorage("num", num);
	}
}
var score;

/**
 * 组装原链接带过来的参数
 */
function pingjieParams(shareurl){
	var origin = localgetUrlParam("origin");
	var szhdbm = localgetUrlParam("szhdbm");
	var params = '';
	if(shareurl.indexOf("origin")==-1 && origin){
		params += "origin="+origin;
	}
	if(shareurl.indexOf("szhdbm")==-1 && szhdbm){
		if(params == ''){
			params += "szhdbm="+szhdbm;
		}else{
			params += "&szhdbm="+szhdbm;
		}
	}
	if(params != ''){
		if(shareurl.indexOf("?")>-1){
			shareurl += "&"+params;
		}else{
			shareurl += "?"+params;
		}
	}
	return shareurl;
}

function getWeixinShareData(){
    var url = encodeURIComponent(location.href.split('#')[0]);
    var params = {};
    params.url = url;
    if(origin){
    	params.origin = origin;
    }
    var openId = $("#openId").val();
    if(openId){
    	params.wxopenid = openId;
    }
    var zcimgflag = localgetUrlParam("zcimgflag");
    if(zcimgflag){
    	params.zcimgflag = zcimgflag;
    }
    if(window.location.href.indexOf("/bj_yyy") > 0||window.location.href.indexOf("/coupon_spring") > 0){
    	var zcsx = localgetUrlParam("zcsx");
    	if(zcsx){
    		params.zcsx = zcsx;
    	}
    }
    if(window.location.href.indexOf("/governor") > 0){
    	num=$("#idhidden").val();
    }
    if(num){
    	params.num = num;
    }
    if(window.location.href.indexOf("/dogjd") > 0){
    	score=ucar.uitls.getStorage("score_sz");
    }
    if(score){
    	params.score = score;
    }
    if(window.location.href.indexOf("/hourticket") > 0){
    	params.mobile = $("#mobile").val();
    }
    if(window.location.href.indexOf("/coupon") > 0 ||window.location.href.indexOf("/couponcrack") > 0){
    	params.orderId = localgetUrlParam("param");
    }
    if(window.location.href.indexOf("/couplet") > 0){
    	var coupletNo = $("#coupletNo").val();
    		if(coupletNo){
    			params.origin = "couplet02";
    			params.orderId = coupletNo;
    		}else{
    			params.orderId = localgetUrlParam("param");
    		}
    }
    if(window.location.href.indexOf("/bj_yyy") > 0){
    	params.orderId = localgetUrlParam("param");
    }
    if(window.location.href.indexOf("/coupon_xingshi") > 0){
    	if(localgetUrlParam("zcfrom")){
    		params.origin = localgetUrlParam("zcfrom");
    	}
    }
    if(window.location.href.indexOf("/yunmavote") > 0){
    	params.num=$("#bh").val();
    }
    try {
        if(role){
        	params.role=role;
        }
	} catch (e) {

	}

    $.ajax({
        url: '/weixinShare/getShareData.do',
        type: "post",
        cache: false,
        dataType: "json",
        async : false,
        data: params,
        error:function(){
        },
        success: function (data) {
            if(data && data.status === 0 && data.result){
            	var hrefUrl = location.href;
                if(data.result.url){
                	var shareurl = data.result.url;
                	hrefUrl = pingjieParams(shareurl);
                }
                var config = data.result.weixinJSConfigVO;
                if(typeof(wx) === "undefined" ){
                    var loadWX = setInterval(function(){
                        if(typeof(wx) !==  "undefined"){
                            window.clearInterval(loadWX);
                            initWX();
                        }
                    },1000);
                }else{
                    initWX();
                }

                function initWX(){
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: config.appId, // 必填，公众号的唯一标识
                        timestamp: config.timestamp, // 必填，生成签名的时间戳
                        nonceStr: config.nonceStr, // 必填，生成签名的随机串
                        signature: config.signature,// 必填，签名，见附录1
                        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','hideOptionMenu','showOptionMenu'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    wx.ready(function(){
                        wx.onMenuShareTimeline({
                            title: data.result.sharePYQContent, // 分享标题
                            link: hrefUrl, // 分享链接
                            imgUrl:data.result.shareImg, // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            },
                            trigger: function (res) {
                                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                            }
                        });
                        wx.onMenuShareAppMessage({
                            title: data.result.shareTitle, // 分享标题
                            desc: data.result.shareWXContent, // 分享描述
                            link: hrefUrl, // 分享链接
                            imgUrl:data.result.shareImg, // 分享图标
                            type: 'link', // 分享类型,music、video或link，不填默认为link
                            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                            success: function () {
                                // 用户确认分享后执行的回调函数
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                            }
                        });
                    });
                    wx.error(function(res){
                    });
                }
            }
        }
    });
}

function isWeixin(){
    var userAgent = navigator.userAgent;
    if(userAgent.indexOf("MicroMessenger") > 0){
        return true;
    }
    return false;
}
if(isWeixin()){
    getWeixinShareData();
}
