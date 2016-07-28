// JavaScript Document
var Class = {
	create: function() {
		return function() { this.initialize.apply(this, arguments); }
	}
}
var Extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
}
function stopDefault( e ) {
	 if ( e && e.preventDefault ){
		e.preventDefault();
	}else{
		window.event.returnValue = false;
	}
	return false;
} 

var Stars = Class.create();
Stars.prototype = {
	initialize: function(star,options) {
		this.SetOptions(options); 
		var flag = 999; 
		var isIE = (document.all) ? true : false;
		var starlist = document.getElementById(star).getElementsByTagName('a'); 
		var input = document.getElementById(this.options.Input) || document.getElementById(star+"-input"); 
		var tips = document.getElementById(this.options.Tips) || document.getElementById(star+"-tips"); 
		var nowClass = " " + this.options.nowClass; 
		var tipsTxt = this.options.tipsTxt; 
		var len = starlist.length;
		

		for(i=0;i<len;i++){ 
			starlist[i].value = i;
			starlist[i].onclick = function(e){
				stopDefault(e);
				this.className = this.className + nowClass;
				flag = this.value;
				input.value = this.getAttribute("star:value");
				tips.innerHTML = tipsTxt[this.value]
			}
			starlist[i].onmouseover = function(){
				if (flag< 999){
					var reg = RegExp(nowClass,"g");
					starlist[flag].className = starlist[flag].className.replace(reg,"")
				}
			}
			starlist[i].onmouseout = function(){
				if (flag< 999){
					starlist[flag].className = starlist[flag].className + nowClass;
				}
			}
		};
		if (isIE){
			var li = document.getElementById(star).getElementsByTagName('li');
			for (var i = 0, len = li.length; i < len; i++) {
				var c = li[i];
				if (c) {
					c.className = c.getElementsByTagName('a')[0].className;
				}
			}
		}
	},
	
	SetOptions: function(options) {
		this.options = {
			Input:			"",
			Tips:			"",
			nowClass:	"current-rating",
			tipsTxt:		["","","","",""]
		};
		Extend(this.options, options || {});
	}
}
var Stars1 = new Stars("stars1");
var Stars2 = new Stars("stars2");
var Stars3 = new Stars("stars3");
var Stars4 = new Stars("stars4");
var Stars5 = new Stars("stars5");
 