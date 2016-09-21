'use strict'
function Drag(id){
	if(!id)return;
	this.oBox = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
	
	this.init();
}
Drag.prototype.init=function(){
	var _this = this;
	this.oBox.onmousedown=function(ev){
		var oEvent = ev||event;
		_this.fnDown(oEvent);
		return false;
	};
};
Drag.prototype.fnDown = function(ev){
	var _this = this;
	this.disX = ev.clientX-this.oBox.offsetLeft;
	this.disY = ev.clientY-this.oBox.offsetTop;
	document.onmousemove=function(ev){
		var oEvent = ev||event;
		_this.fnMove(oEvent);
	};
	document.onmouseup=function(){
		_this.fnUp();
	};
	this.oBox.setCapture&&this.oBox.setCapture();
};
Drag.prototype.fnMove=function(ev){
	this.oBox.style.left = ev.clientX-this.disX+'px';
	this.oBox.style.top = ev.clientY-this.disY+'px';
};
Drag.prototype.fnUp=function(){
	document.onmousemove=null;
	document.onmouseup=null;
	this.oBox.releaseCapture&&this.oBox.releaseCapture();
};