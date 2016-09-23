function getUNWeixinShareData(){
    var url = encodeURIComponent(location.href.split('#')[0]);
    var params = {};
    params.url = url;
    var openId = $("#openId").val();
    if(openId){
    	params.wxopenid = openId;
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
                        jsApiList: [/*'hideOptionMenu',*/'hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    wx.ready(function(){
                    	 //wx.hideOptionMenu();
                    	 wx.hideMenuItems({ 
                    		    menuList: [
									"menuItem:share:appMessage",
									"menuItem:share:timeline",
									"menuItem:share:qq",
									"menuItem:share:weiboApp",
									"menuItem:favorite",
									"menuItem:share:facebook",
									"menuItem:share:QZone",
									"menuItem:copyUrl",
									"menuItem:openWithQQBrowser",
									"menuItem:openWithSafari",
									"menuItem:share:email"
                    		    ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3 
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
	getUNWeixinShareData();
}