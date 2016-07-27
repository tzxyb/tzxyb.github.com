/**
 * User: jy.feng
 * Date: 2015/5/25
 * Time: 16:31
 */

document.write("<script type='text/javascript' src='http://mktjs.10101111cdn.com/common/map.js' ></script>");
document.write("<script type='text/javascript' src='http://mktjs.10101111cdn.com/wap/2015/download/appurl.js' ></script>");
var appLauncher = (function(){

    //app下载地址
    var appLink = {
        appStore : 'https://itunes.apple.com/cn/app/shen-zhou-zhuan-che/id953939112?mt=8',//苹果商店专车app地址
        myApp : 'http://a.app.qq.com/o/simple.jsp?pkgname=com.szzc.ucar.pilot' , //应用宝商店专车app地址
        local : 'http://static.10101111cdn.com/download/SZZC_CD_C.apk' //本地服务器下载地址，安卓版
    };

    //app唤醒地址
    var appWakeupLink = {
        ios : 'ucar2015://m.ucar.com/ucar', //苹果app唤醒地址
        android : 'ucar2015://m.ucar.com/ucar', //安卓app唤醒地址
        android_chrome : 'intent://scan/#Intent;scheme=ucar2015;package=com.szzc.ucar.pilot;end' //chrome浏览器中安卓app唤醒地址
    };

    var heartbeat;
    var timer;

    //判断app安装情况
    var appDetectorIframe = null;
    function createIframe() {
        if(!appDetectorIframe){
            appDetectorIframe = document.createElement("iframe");
            appDetectorIframe.style.cssText = "display:none;width:0px;height:0px;";
            appDetectorIframe.id = "appDetectorIframe";
            document.body.appendChild(appDetectorIframe);
        }
    }

    function clearTimer(){
        clearTimeout(timer);
        clearInterval(heartbeat);
    }

    /**
     * 检测用户是否安装了app
     * 如果安装直接打开;
     */
    function launcher() {
        createIframe();
        var nowDate = Date.now();
        heartbeat = setInterval(function(){
            if (document.webkitHidden || document.hidden) {
                clearTimer();
            }
        }, 150);
        if(isIos()){
        	var WTmc_mk = getappUrlParam("WT.mc_mk");
        	if(WTmc_mk=="201401177" || WTmc_mk=="201401178" 
        		|| WTmc_mk=="201401179" || WTmc_mk=="201401180" || WTmc_mk=="201401181" 
        		|| WTmc_mk=="201401182" || WTmc_mk=="201401382"){
        		 download();
        	 }else{
        		 appDetectorIframe.src = appWakeupLink.ios;
        	 }
        }  else {
            appDetectorIframe.src = appWakeupLink.android;
        }
        timer = setTimeout(function() {
            if(Date.now() - nowDate < 1600) {
                clearTimer();
                download();
            }
        }, 1500);
    }

    /**
     * 是否是IOS系统
     * @returns {boolean}
     */
    function isIos(){
        var userAgent = navigator.userAgent;
        if (userAgent.match(/iPhone|iPad|iPod|iTouch/)) {
            return true;
        }
        return false;
    }

    /**
     * 是否在微信中打开
     * @returns {boolean}
     */
    function isWinxin(){
        var userAgent = navigator.userAgent;
        if(userAgent.indexOf("MicroMessenger") > 0){
            return true;
        }
        return false;
    }

    /**
     * 仅下载app
     */
    function download(){
        if(isWinxin()){
            //微信扫描
            if (isIos()) {
                window.location.href = appLink.appStore;
                $('.cd-popup').addClass('is-visible');
            }else{
                //if($('.cd-popup').hasClass('is-visible')){
                //    return;
                //}
                window.location.href = appLink.myApp;
            }
        }else{
            if (isIos()) {
                window.location.href = appLink.appStore;
            }else{
            	//根据渠道判断下载链接
            	var appurl="";
            	var hrefUrl = location.href;
                if(hrefUrl.indexOf("?") > -1){
                    hrefUrl = hrefUrl.substring(hrefUrl.indexOf("?")+1);
                    var hrefUrlArray = hrefUrl.split("&");
                    if(hrefUrlArray.length>0){
                    	var hrefUrlParam;
                    	var hrefUrlkeyvalue;
                    	var value;
                    	
                    	for(var i=0,arraylength=hrefUrlArray.length;i<arraylength;i++){
                    		hrefUrlParam = hrefUrlArray[i];
                    		hrefUrlkeyvalue=hrefUrlParam.split("=");
                    		if(hrefUrlkeyvalue[0]=="WT.mc_mk"){
                    			value=hrefUrlkeyvalue[1];
                    			appurl=appURLMap.get(value);
                    			break;
                    		}
                    	}
                    }
                }
                if(appurl){
                	window.location.href = appurl;
                }else{
                	window.location.href = appLink.local;
                }
                
            }
        }
    }

    return {
        run : function(){
            if(isWinxin()) {
                download();
            }else{
                launcher();
            }
        },
        download : function(){
            download();
        },
        lauc:function(){
        	launcher();
        }
    };
})();
$('.cd-popup').on('click', function(event){
	if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});
$(document).keyup(function(event){
	if(event.which=='27'){
		$('.cd-popup').removeClass('is-visible');
    }
});
var getappUrlParam = function(key) {
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
}