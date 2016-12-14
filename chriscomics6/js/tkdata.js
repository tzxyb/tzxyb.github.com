var tkdata = {};
$(".tkdataxiazai").click(function(){
	tkdata.selectMobileApptd();
});
tkdata.selectMobileApptd= function(){
	/*var userAgent = navigator.userAgent;
	var fromParam = tkdata.getUrlParamtd("WT.mc_mk");*/
	/*if(fromParam && typeof(dcsMultiTrack) == "function"){
		var key1 ="";
		var key2 ="";
		if(fromParam && fromParam =="201401357"){
			if (userAgent.indexOf("iPhone") > 0) {
				key1= "/WTwap"+fromParam+"IPHONE";
			    key2 = "wap"+fromParam+"IPHONEdownload";
			}else {
				key1= "/WTwap"+fromParam+"android";
			    key2 = "wap"+fromParam+"androiddownload";
			}
		}else{
			key1= "/WTwap"+fromParam+"zhuancheappxiazai";
		    key2 = "wap"+fromParam+"zhuancheappxiazai";
		}
	    dcsMultiTrack('DCS.dcsuri',key1,'WT.event',key2);
	    setTimeout(function(){
	    	tkdata.selectMobileAppCore();
	    }, 300);
	}else{*/
		tkdata.selectMobileAppCore();
	/*}*/
};
tkdata.selectMobileAppCore= function(){
	var tdpg = tkdata.getUrlParamtd("tdpg");
	var tdaz = tkdata.getUrlParamtd("tdaz");
	var userAgent = navigator.userAgent;
	if(userAgent.indexOf("MicroMessenger") > 0){
		//微信扫描
		/*if(!$("#tddiv").length){
			 $(document.body).append("<div id='tddiv' style='position: fixed;top:0px;left:0px;width:100%;height: 100%;background-color: rgba(0, 0, 0, 0.60); background-image:url(http://img01.10101111cdn.com/mkt/bak/2015/wap/common/llqopen.png); background-repeat: no-repeat; background-size:100% auto;z-index: 999999;padding:0px;margin:0px;'></div>");
		}*/
		window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.szzc.ucar.pilot&g_f=991653";
	}else{
		if (userAgent.indexOf("iPhone") > 0) {
			if(tdpg){
				window.location.href="https://lnk0.com/"+tdpg;
			}else{
				window.location.href="https://itunes.apple.com/cn/app/shen-zhou-zhuan-che/id953939112?mt=8";
			}
		}else{
			launcher(tdaz);
		}
	}
};
tkdata.getUrlParamtd = function(key) {
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


//判断app安装情况
var appDetectorIframe = null;
var heartbeat;
var timer;


var  createIframe = function() {
    if(!appDetectorIframe){
        appDetectorIframe = document.createElement("iframe");
        appDetectorIframe.style.cssText = "display:none;width:0px;height:0px;";
        appDetectorIframe.id = "appDetectorIframe";
        document.body.appendChild(appDetectorIframe);
    }
};

var clearTimer = function(){
    clearTimeout(timer);
    clearInterval(heartbeat);
};
/**
 * 检测用户是否安装了 安卓 app
 * 如果安装直接打开;
 */
var launcher = function(tdaz) {
    createIframe();
    var nowDate = Date.now();
    heartbeat = setInterval(function(){
        if (document.webkitHidden || document.hidden) {
            clearTimer();
        }
    }, 150);
    appDetectorIframe.src = "ucar2015://m.ucar.com/ucar";
    timer = setTimeout(function() {
        if(Date.now() - nowDate < 1600) {
            clearTimer();
            if(tdaz){
            	window.location.href="https://lnk0.com/"+tdaz;
            }else{
            	window.location.href="http://download.10101111cdn.com/ucarcdnstore/apk/SZZC_CD_C.apk";
            }
            
        }
    }, 1500);
};