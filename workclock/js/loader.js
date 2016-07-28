/* 2015 Web De: gongxy */

(function(win) {
    function loader(assetParentDom){
    	this.debug=0;
    	this.assetBox=document.querySelector(assetParentDom);
    	this.imgList=document.querySelectorAll(assetParentDom+' img');
    	this.cssList=document.querySelectorAll(assetParentDom+' link');
    	this.jsList=document.querySelectorAll(assetParentDom+' script');
    	this.loadRecord=[0,0,0];
    	this.loaded=0;
    	this.length=this.imgList.length+this.cssList.length+this.jsList.length;
    	this.onLoading=null;
    	if(this.assetBox){
    		this.assetBox.setAttribute('style','position: absolute; left: -9999px; top: -9999px; width: 100px; height: 100px; overflow: hidden;');
    	}
    }
    loader.prototype.load=function(){
    	this.debug && console.log('loader资源总数：'+this.length+'\n img:'+this.imgList.length+', css:'+this.cssList.length+', js:'+this.jsList.length);
    	if(this.length==0){ return false;}
    	if(this.imgList.length>0){
    		this.loadImg();
    	}else if(this.cssList.length>0){
    		this.loadCss();
    	}else if(this.jsList.length>0){
    		this.loadJs();
    	}
    }
    loader.prototype.loadImg=function(){
    	var _this=this;
    	for(var i=0, l=_this.imgList.length; i<l;  i++){
    		var url=_this.imgList.item(i).getAttribute('assetUrl');
    		if(url){
    			_this.imgList.item(i).onload=function(e){ _this._calculate(0, e.target.src); }
    			_this.imgList.item(i).onerror=function(e){ _this._calculate(0, '错误---'+e.target.outerHTML);}
    			_this.imgList.item(i).setAttribute('src', url);
    		}else{
    			_this._calculate(0, '错误---'+_this.imgList.item(i).outerHTML);
    		}
    	}
    }
    loader.prototype.loadCss=function(){
    	var _this=this;
    	var url=_this.cssList.item(_this.loadRecord[1]).getAttribute('assetUrl');
    	if(url && url.indexOf('.css')>0){
    		var mylink=document.createElement('link');
			mylink.type='text/css';
			mylink.rel='stylesheet';
			mylink.href=url+'?r='+Math.random();
	    	document.head.appendChild(mylink);
	    	setTimeout(function(){
	    		_this._calculate(1, mylink.href);
	    	},50)
    	}else{
    		_this._calculate(1, '错误---'+_this.cssList.item(_this.loadRecord[1]).outerHTML);
    	}
    }
    loader.prototype.loadJs=function(){
    	var _this=this;
    	var url=_this.jsList.item(_this.loadRecord[2]).getAttribute('assetUrl');
    	if(url && url.indexOf('.js')>0){
    		var myjs=document.createElement('script');
			myjs.type='text/javascript';
			myjs.src=url+'?r='+Math.random();
			myjs.onload=function(){ _this._calculate(2, myjs.src); }
			myjs.onerror=function(){ _this._calculate(2, '错误---'+_this.jsList.item(_this.loadRecord[2]).outerHTML); }
	    	document.head.appendChild(myjs);
    	}else{
    		_this._calculate(2, '错误---'+_this.jsList.item(_this.loadRecord[2]).outerHTML);
    	}
    }
    loader.prototype._calculate=function(type,url){
    	if(type===undefined){ return;}
    	this.loadRecord[type]+=1;
		this.loaded+=1;
		this.debug && console.log('loader进度：['+this.loaded+'/'+this.length+'], 载入：'+url);
		var _percent=this.loaded/this.length;
		if(_percent>1)_percent=1;
		typeof(this.onLoading)=='function' && this.onLoading(_percent); 
    	if(this.loadRecord[0]==this.imgList.length){
    		if(this.loadRecord[1]<this.cssList.length){
    			this.loadCss()
    		}else if(this.loadRecord[2]<this.jsList.length){
    			this.loadJs();
    		}else{
    			delete(win.loader);
    		}
    	}
    }
    
    win.loader=loader;
    
})(window);



