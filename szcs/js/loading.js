(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 640,
	height: 1030,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/loading_atlas_.png", id:"loading_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[0,106,143,16],[0,0,104,104],[106,0,70,74]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.loading1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loading2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.loading3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loadPic(this,"loadBg.jpg");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.loadingzi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loading1();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-42,143,16);


(lib.loadingz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loading2();
	this.instance.parent = this;
	this.instance.setTransform(47,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,37,104,104);


(lib.loading212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loading3();
	this.instance.parent = this;
	this.instance.setTransform(27.6,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,16.4,70,74);


(lib.loadingzi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loadingzi();
	this.instance.parent = this;
	this.instance.setTransform(76.5,8,1,1,0,0,0,76.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0.801},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-42,143,16);


(lib.loadingz12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loadingz2();
	this.instance.parent = this;
	this.instance.setTransform(99,89,1,1,0,0,0,99,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,37,104,104);


(lib.loadingz11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loading212();
	this.instance.parent = this;
	this.instance.setTransform(63.1,54.3,1,1,0,0,0,62.6,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.1,15.7,70,74);


(lib.loadingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading3.png
	this.instance = new lib.loadingz11();
	this.instance.parent = this;
	this.instance.setTransform(344.1,484.1,1,1,0,0,0,87,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// loading2.png
	this.instance_1 = new lib.loadingz12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.1,484.1,1,1,0,0,0,123,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// loading1.png
	this.instance_2 = new lib.loadingzi2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.1,594.2,1,1,0,0,0,76.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,515,1,1,0,0,0,320,515);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.loading_mc = new lib.loadingmc();
	this.loading_mc.parent = this;
	this.loading_mc.setTransform(345,568,1,1,0,0,0,345,568);

	this.timeline.addTween(cjs.Tween.get(this.loading_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,515,392.1,560.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;