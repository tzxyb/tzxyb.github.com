function mDcsMultiTrack(){
	var WTmc_mk="";
    var fromParam = ucar.uitls.getUrlParam("WT.mc_mk");
    if(fromParam && fromParam.length > 0){
    	WTmc_mk = fromParam;
        fromParam = "mc_mk" + fromParam;
    }else{
        fromParam = ucar.uitls.getUrlParam("WT.mc_qr");
        if(fromParam && fromParam.length > 0){
            fromParam = "mc_qr" + fromParam;
        }else{
            fromParam = $("#fromParam").val();
            if(!fromParam){
            	fromParam = "";
            }
        }
    }
    $(".android").click(function(){
        var key1 = "/WTwap"+fromParam+"zhuancheappxiazai";
        var key2 = "wap端"+fromParam+"专车app下载";
        var key3 = "wap"+fromParam+"zhuancheappxiazai";
        if(isIos()){
            key1 += "iPhone";
            key2 += "苹果";
            key3 += "iPhone";
        }else{
            key1 += "android";
            key2 += "安卓";
            key3 += "android";
        }
        dcsMultiTrack('DCS.dcsuri',key1,'WT.ti',key2,'WT.click',key3,'WT.download','xiazai','WT_si_n','appxiazai');
    });
    $(".xiazai").click(function(){
        var key1 = "/WTwap"+fromParam+"zhuancheappxiazai";
        var key2 = "wap端"+fromParam+"专车app下载";
        var key3 = "wap"+fromParam+"zhuancheappxiazai";
        dcsMultiTrack('DCS.dcsuri',key1,'WT.ti',key2,'WT.click',key3,'WT.download','xiazai','WT_si_n','appxiazai');
        setTimeout(function(){
            var locationhref="/html5/2015/download/index.html";
            if(WTmc_mk=="201400697" || WTmc_mk=="201400699"){
            	locationhref+="?WT.mc_mk="+WTmc_mk;
            }
            window.location.href = locationhref;
        },800);
    });
    
    
}
var isIos=function(){
	var userAgent = navigator.userAgent;
    if (userAgent.match(/iPhone|iPad|iPod|iTouch/)) {
        return true;
    }
    return false;
};