/*! Copyright©2008-2016 10101111.com All Rights Reserved.2016-09-13 */
var ucar={version:"1.0",author:"m.10101111.com",website:"/"};ucar.uitls={getUrlParam:function(key){var url=window.location.search;if(url=url.split("?")[1],!url)return null;var value=null,params=url.split("&");return $.each(params,function(i,param){var kv=param.split("=");if(kv[0]==key)return value=decodeURIComponent(kv[1]),!1}),value},show:function(msg,callback){if(!$("#dialog-mask").length){var dialog=document.createElement("div");dialog.id="dialog-mask",dialog.className="mask",$(dialog).html("<div class='dialog'><div class='dialog-content-full'><p>"+msg+"</p><span class='btn-dialog-close'></span></div></div>"),document.body.appendChild(dialog),$("#dialog-close").click(function(){$("#dialog-mask").remove(),callback&&callback()}),$("#dialog-mask").click(function(){$("#dialog-mask").remove(),callback&&callback()}),$("#dialog-mask").fadeIn("normal")}},loading:{show:function(){var html="<div id='loading-mask' class='mask'><div class='loading-full'><img src='http://img01.10101111cdn.com/mkt/bak/2015/wap/download/app/loading_new.gif' /><div></div></div></div>";$("#loading-mask").length?$("#loading-mask").show():$(html).appendTo(document.body)},hide:function(){$("#loading-mask").hide()}},isMobile:function(val){var myreg=/^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;return myreg.test(val)},canStorage:function(){return!!window.localStorage},setStorage:function(key,value){try{ucar.uitls.canStorage()&&(localStorage.removeItem(key),"string"!=typeof value&&(value=JSON.stringify(value)),localStorage.setItem(key,value))}catch(e){}},getStorage:function(key){if(ucar.uitls.canStorage()){var value=localStorage.getItem(key);value&&"string"==typeof value&&"undefined"===value&&(value=null);try{return value?JSON.parse(value):null}catch(err){return value}}},removeStorage:function(key){ucar.uitls.canStorage()&&localStorage.removeItem(key)},setSession:function(key,value){if(window.sessionStorage)try{sessionStorage.removeItem(key),"string"!=typeof value&&(value=JSON.stringify(value)),sessionStorage.setItem(key,value)}catch(e){}},getSession:function(key){if(window.sessionStorage)try{var value=sessionStorage.getItem(key);value&&"string"==typeof value&&"undefined"===value&&(value=null);try{return value?JSON.parse(value):null}catch(err){return value}}catch(e){}},removeSession:function(key){sessionStorage.removeItem(key)}},$(document).on("ajaxStart",function(){ucar.uitls.loading.show()}),$(document).on("ajaxStop",function(){ucar.uitls.loading.hide()});