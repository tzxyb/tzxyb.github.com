'use strict'

function LimitDrag(id){
	Drag.apply(this,arguments);
}
LimitDrag.prototype = new Drag();
LimitDrag.prototype.constructor = LimitDrag;

var fnMove = LimitDrag.prototype.fnMove;


LimitDrag.prototype.fnMove=function(ev){
	fnMove.apply(this,arguments);
	if(this.oBox.offsetLeft<0){
		this.oBox.style.left = 0;
	}else if(this.oBox.offsetTop<0){
		this.oBox.style.top = 0;
	}
};



















