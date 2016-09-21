function FrameDrag(id){
	Drag.call(this,id);
	this.newDiv = null;
	this.oldDiv = null;
}
FrameDrag.prototype = new Drag();
FrameDrag.prototype.constructor = FrameDrag;

var oldFn = {};
for(var name in FrameDrag.prototype){
	oldFn[name] = FrameDrag.prototype[name];
}
FrameDrag.prototype.fnDown = function(ev){
	oldFn.fnDown.apply(this,arguments);
	this.newDiv = document.createElement('div');
	this.newDiv.style.cssText = 'border:5px dashed #000; width:90px; height:90px; position:absolute; left:0; top:0;';
	this.newDiv.style.left = this.oBox.offsetLeft+'px';
	this.newDiv.style.top = this.oBox.offsetTop+'px';
	document.body.appendChild(this.newDiv);
	
	this.oldDiv = this.oBox;
	this.oBox = this.newDiv;
};

FrameDrag.prototype.fnUp=function(){
	oldFn.fnUp.apply(this,arguments);
	this.oldDiv.style.left = this.oBox.offsetLeft+'px';
	this.oldDiv.style.top = this.oBox.offsetTop+'px';
	document.body.removeChild(this.oBox);
	this.oBox = this.oldDiv;
};















