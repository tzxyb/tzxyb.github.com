/*! Copyright©2008-2016 10101111.com All Rights Reserved.2016-09-14 */
function pingjieParams(shareurl,code){var origin=localgetUrlParam("origin"),szhdbm=localgetUrlParam("szhdbm"),params="";if(shareurl.indexOf("origin")==-1&&origin&&(params+="origin="+origin),shareurl.indexOf("szhdbm")==-1&&szhdbm&&(params+=""==params?"szhdbm="+szhdbm:"&szhdbm="+szhdbm),""!=params&&(shareurl+=shareurl.indexOf("?")>-1?"&"+params:"?"+params),code&&"coupon_couponmmc"==code){var rid=localgetUrlParam("rid")||$("#rid").val(),buyer=localgetUrlParam("buyer")||$("#buyername").val(),store=$("#store").val()||localgetUrlParam("store"),car=localgetUrlParam("car")||$("#vehicletype").val();store.lastIndexOf("店")==-1&&(store+="店"),shareurl=shareurl.replace(/\$rid/g,rid),shareurl=shareurl.replace(/\$buyer/g,buyer),shareurl=shareurl.replace(/\$store/g,store),shareurl=shareurl.replace(/\$car/g,car);var strs=shareurl.split(/back_url\=/g);2==strs.length&&(shareurl=strs[0]+"back_url="+encodeURIComponent(strs[1]))}return shareurl}function handleShareTitle(title,code){if(code&&"coupon_couponmmc"==code){var buyer=localgetUrlParam("buyer")||$("#buyername").val();title=title.replace(/\$buyer/g,buyer)}return title}function handleShareWXContent(wxcontent,code){if(code&&code.indexOf("szcs8_")>-1){var num=$("#endTime").val();wxcontent=wxcontent.replace(/\$num/g,num)}return wxcontent}function handlePYQContent(pyqContent,code){if(code&&"coupon_couponmmc"==code){var store=$("#store").val()||localgetUrlParam("store"),car=localgetUrlParam("car")||$("#vehicletype").val();store.lastIndexOf("店")==-1&&(store+="店"),pyqContent=pyqContent.replace(/\$store/g,store),pyqContent=pyqContent.replace(/\$car/g,car)}else if(code&&code.indexOf("szcs8_")>-1){var num=$("#endTime").val(),nickname=localgetUrlParam("nickname");pyqContent=pyqContent.replace(/\$num/g,num),pyqContent=pyqContent.replace(/\$nickname/g,nickname)}return pyqContent}function getWeixinShareData(){var url=encodeURIComponent(location.href.split("#")[0]),params={};params.url=url,location.href.indexOf("/template_2")>0?params.origin=from:origin&&(params.origin=origin);var openId=$("#openId").val()||localgetUrlParam("openId");openId&&(params.wxopenid=openId);var zcimgflag=localgetUrlParam("zcimgflag");if(zcimgflag&&(params.zcimgflag=zcimgflag),window.location.href.indexOf("/bj_yyy")>0||window.location.href.indexOf("/coupon_spring")>0){var zcsx=localgetUrlParam("zcsx");zcsx&&(params.zcsx=zcsx)}if(window.location.href.indexOf("/governor")>0&&(num=$("#idhidden").val()),window.location.href.indexOf("/mmcyy/result")>0&&(num=localgetUrlParam("result")),num&&(params.num=num),window.location.href.indexOf("/dogjd")>0&&(score=ucar.uitls.getStorage("score_sz")),score&&(params.score=score),window.location.href.indexOf("/hourticket")>0&&(params.mobile=$("#mobile").val()),(window.location.href.indexOf("/coupon")>0||window.location.href.indexOf("/couponcrack")>0)&&(params.orderId=localgetUrlParam("param")),window.location.href.indexOf("/couplet")>0){var coupletNo=$("#coupletNo").val();coupletNo?(params.origin="couplet02",params.orderId=coupletNo):params.orderId=localgetUrlParam("param")}window.location.href.indexOf("/bj_yyy")>0&&(params.orderId=localgetUrlParam("param")),window.location.href.indexOf("/coupon_xingshi")>0&&localgetUrlParam("zcfrom")&&(params.origin=localgetUrlParam("zcfrom")),window.location.href.indexOf("/yunmavote")>0&&(params.num=$("#bh").val());try{role&&(params.role=role)}catch(e){}$.ajax({url:"/weixinShare/getShareData.do",type:"post",cache:!1,dataType:"json",async:!1,data:params,error:function(){},success:function(data){function initWX(){wx.config({debug:!1,appId:config.appId,timestamp:config.timestamp,nonceStr:config.nonceStr,signature:config.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideOptionMenu","showOptionMenu"]}),wx.ready(function(){wx.onMenuShareTimeline({title:pyqContent,link:hrefUrl,imgUrl:data.result.shareImg,success:function(){},cancel:function(){},trigger:function(res){}}),wx.onMenuShareAppMessage({title:shareTitle,desc:shareWXContent,link:hrefUrl,imgUrl:data.result.shareImg,type:"link",dataUrl:"",success:function(){},cancel:function(){}})}),wx.error(function(res){})}if(data&&0===data.status&&data.result){var hrefUrl=location.href,shareTitle="",pyqContent="",shareWXContent="";if(data.result.shareTitle&&(shareTitle=handleShareTitle(data.result.shareTitle,params.origin)),data.result.shareWXContent&&(shareWXContent=handleShareWXContent(data.result.shareWXContent,params.origin)),data.result.url){var shareurl=data.result.url;hrefUrl=pingjieParams(shareurl,params.origin)}data.result.sharePYQContent&&(pyqContent=handlePYQContent(data.result.sharePYQContent,params.origin));var config=data.result.weixinJSConfigVO;if("undefined"==typeof wx)var loadWX=setInterval(function(){"undefined"!=typeof wx&&(window.clearInterval(loadWX),initWX())},1e3);else initWX()}}})}function isWeixin(){var userAgent=navigator.userAgent;return userAgent.indexOf("MicroMessenger")>0}var localgetUrlParam=function(key){var url=window.location.search;if(url=url.split("?")[1],!url)return null;var value=null,params=url.split("&");return $.each(params,function(i,param){var kv=param.split("=");if(kv[0]==key)return value=decodeURIComponent(kv[1]),!1}),value},num;window.location.href.indexOf("fires_friend")>0&&(num=ucar.uitls.getStorage("num"),num||(num=Math.floor(1e3*Math.random())+1e3,ucar.uitls.setStorage("num",num)));var score;isWeixin()&&getWeixinShareData();