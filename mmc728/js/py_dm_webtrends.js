$(function(){
	var adsrc = getUrlParam("source");
	if(adsrc && (adsrc == "pinyou" || adsrc == "duomeng" || adsrc == "inmobi")){
		var diviceNo ='';
		var impId = '';
		if(adsrc == "pinyou"){
			adsrc = "PY";
			diviceNo = getUrlParam("id");
		}else if(adsrc == "duomeng"){
			adsrc = "DM";
			mac = getUrlParam("imei");
			if(!mac){
				diviceNo = getUrlParam("ifa");
			}else{
				diviceNo = mac;
			}
		}else if(adsrc == "inmobi"){
			adsrc = "INMOBI";
			impId=getUrlParam("impId");
			mac = getUrlParam("idfa");
			if(!mac){
				diviceNo = getUrlParam("androidId_sha1");
			}else{
				diviceNo = mac;
			}
		}
		var url = "/extmonit/makeSomeInfo.do";
		$.ajax({
			type : "POST",
			url : url,
			cache : false,
			data : {
				adsrc : adsrc,
				diviceNo : diviceNo,
				impId : impId,
			},
			async : false,
			dataType : 'json',
			success : function(data, textStatus) {
				
			}
		});
		if(window.location.href.indexOf("app/mobileapp.html")>0){
			setTimeout(selectMobileApp(), 3000);
		}
	}
	if(adsrc == "xiazai"){
		selectMobileApp();
	}
});

var jiankong = function(flag){
	if($("#jiankongiframe").length>0){
		if(flag == "iPhone" && $("#iosjiankongid").length>0){
			var iosjiankongid = $("#iosjiankongid").val();
			$("#jiankongiframe").attr("src",iosjiankongid);
		}else if(flag == "android" && $("#androidjiankongid").length>0){
			var androidjiankongid = $("#androidjiankongid").val();
			$("#jiankongiframe").attr("src",androidjiankongid);
		}
	}

};
$(".newxiazai").click(function(){
	selectMobileApp();
});
var selectMobileApp= function(){
	var userAgent = navigator.userAgent;
	if(userAgent.indexOf("MicroMessenger") > 0){
		//微信扫描
		if (userAgent.indexOf("iPhone") > 0) {
			jiankong("iPhone");
			if($("#boxdiv").length>0){
				$("#boxdiv").show();
			}else{
				alert("请点击右上角用浏览器打开");
			}
		}else{
			jiankong("android");
			window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.szzc.ucar.pilot";
		}
	}else{
		if (userAgent.indexOf("iPhone") > 0) {
			jiankong("iPhone");
			window.location.href="https://itunes.apple.com/cn/app/shen-zhou-zhuan-che/id953939112?mt=8";
		}else{
			jiankong("android");
			launcher();
		}
	}

};


var getUrlParam = function(key) {
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
var launcher = function() {
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
            window.location.href="http://static.10101111cdn.com/download/SZZC_CD_C.apk";
        }
    }, 1500);
};