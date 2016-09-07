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
	fps: 25,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/p1_atlas_.png", id:"p1_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"p1_atlas_", frames: [[727,646,173,37],[806,701,175,36],[455,1392,473,100],[712,849,107,28],[833,194,184,182],[841,0,170,175],[833,378,169,174],[455,1032,435,358],[0,0,640,1030],[883,821,115,37],[642,646,83,85],[642,819,68,68],[642,0,197,192],[642,194,189,200],[883,739,74,80],[727,685,77,83],[806,739,75,82],[642,733,74,84],[718,770,70,77],[642,554,263,50],[642,606,221,38],[0,1032,453,421],[642,396,159,142],[841,177,18,8],[965,554,40,18],[803,396,25,16],[907,554,56,145]]}
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



(lib._2t1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2t2 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btndi = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnzi1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.c12 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c22 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c32 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.che = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.guang = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.m1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.m2 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.t4 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.t5 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.t6 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.t7 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.t8 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.t9 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tdi = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.tishi = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.tz1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.tz2 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.tz3 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.zhuangshi1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.guang();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.zhuangshi1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhuangshi1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,145);


(lib.z6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.tz2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,18);


(lib.z5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DEB265").ss(2,1,1).p("AAyqXIhjUv");
	this.shape.setTransform(5.1,66.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.2,134.8);


(lib.z4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CBBFC").s().p("AgYhsIBEgEIgRDcIhGAFg");
	this.shape.setTransform(4.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,22.7);


(lib.z3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.tz1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,8);


(lib.z2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CBBFC").s().p("AgahxIArgEIAdgCIgRDlIhKAKg");
	this.shape.setTransform(4.6,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8AC6A").s().p("AgKibIAugEIgbE8IgrADg");
	this.shape_1.setTransform(5.5,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,55.7);


(lib.z1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah5glIEEgaIgQCDIkFAVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5gnIEEgaIgQCDIkFAVg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah5gqIEEgZIgQCDIkFAVg");
	var mask_graphics_3 = new cjs.Graphics().p("Ah5gsIEEgZIgQCDIkFAUg");
	var mask_graphics_4 = new cjs.Graphics().p("Ah5guIEEgZIgQCDIkFAUg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah5gwIEEgaIgQCEIkFAUg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_7 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah5gxIEEgZIgQCDIkFAVg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah5gvIEEgaIgQCDIkFAVg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah5guIEEgaIgQCEIkFAUg");
	var mask_graphics_13 = new cjs.Graphics().p("Ah5gtIEEgZIgQCDIkFAUg");
	var mask_graphics_14 = new cjs.Graphics().p("Ah5gtIEEgZIgQCDIkFAUg");
	var mask_graphics_15 = new cjs.Graphics().p("Ah5gtIEEgZIgQCDIkFAUg");
	var mask_graphics_16 = new cjs.Graphics().p("Ah5gtIEEgZIgQCDIkFAUg");
	var mask_graphics_17 = new cjs.Graphics().p("Ah5gvIEEgaIgQCDIkFAVg");
	var mask_graphics_18 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_19 = new cjs.Graphics().p("Ah5gyIEEgZIgQCDIkFAUg");
	var mask_graphics_20 = new cjs.Graphics().p("Ah5gxIEEgaIgQCDIkFAVg");
	var mask_graphics_21 = new cjs.Graphics().p("Ah5guIEEgaIgQCDIkFAVg");
	var mask_graphics_22 = new cjs.Graphics().p("Ah5grIEEgaIgQCDIkFAVg");
	var mask_graphics_23 = new cjs.Graphics().p("Ah5goIEEgaIgQCDIkFAVg");
	var mask_graphics_24 = new cjs.Graphics().p("Ah5glIEEgaIgQCDIkFAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12.9,y:8.9}).wait(1).to({graphics:mask_graphics_1,x:-9.1,y:8.7}).wait(1).to({graphics:mask_graphics_2,x:-5.4,y:8.5}).wait(1).to({graphics:mask_graphics_3,x:-1.6,y:8.3}).wait(1).to({graphics:mask_graphics_4,x:2.1,y:8.1}).wait(1).to({graphics:mask_graphics_5,x:5.9,y:7.9}).wait(1).to({graphics:mask_graphics_6,x:9.6,y:7.6}).wait(1).to({graphics:mask_graphics_7,x:13.4,y:7.2}).wait(1).to({graphics:mask_graphics_8,x:10.5,y:7.4}).wait(1).to({graphics:mask_graphics_9,x:7.6,y:7.7}).wait(1).to({graphics:mask_graphics_10,x:4.7,y:7.8}).wait(1).to({graphics:mask_graphics_11,x:1.8,y:7.9}).wait(1).to({graphics:mask_graphics_12,x:-1.1,y:8.1}).wait(1).to({graphics:mask_graphics_13,x:-4,y:8.2}).wait(1).to({graphics:mask_graphics_14,x:-1.7,y:8.2}).wait(1).to({graphics:mask_graphics_15,x:0.6,y:8.2}).wait(1).to({graphics:mask_graphics_16,x:2.9,y:8.2}).wait(1).to({graphics:mask_graphics_17,x:6.4,y:7.9}).wait(1).to({graphics:mask_graphics_18,x:9.9,y:7.7}).wait(1).to({graphics:mask_graphics_19,x:13.4,y:7.2}).wait(1).to({graphics:mask_graphics_20,x:8.1,y:7.7}).wait(1).to({graphics:mask_graphics_21,x:2.9,y:8}).wait(1).to({graphics:mask_graphics_22,x:-2.4,y:8.3}).wait(1).to({graphics:mask_graphics_23,x:-7.6,y:8.6}).wait(1).to({graphics:mask_graphics_24,x:-12.9,y:8.9}).wait(1));

	// 图层 1
	this.instance = new lib.tz3();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.5,1,13.5);


(lib.yinyue21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.m1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,85);


(lib.x2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EB0DD").ss(1,1,1).p("AmL6YIMXiGMgEVA4rIiFAS");
	this.shape.setTransform(39.7,182.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81.4,366.8);


(lib.x1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7EB0DD").ss(1,1,1).p("AKnYhI1NC2MAEQg2TICbga");
	this.shape.setTransform(67.9,175.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,137.9,352.3);


(lib.tt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BBCFF").ss(1,1,1).p("AAXiBIgOEDAgHh+IgPD/");
	this.shape.setTransform(1.4,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6BBCFF").ss(1,1,1).p("AgGh+IgQD/AAXiBIgNED");
	this.shape_1.setTransform(2.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1,6.6,28.1);


(lib.tt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BBCFF").ss(1,1,1).p("ABph5IAoBHABNhmIAoBHAh0AgIAoBHAhYANIAoBHAiQAzIAoBHAg8gEIApBFAgggYIAmBFAgEgrIAnBFAAXg+IAoBFAAzhRIAoBH");
	this.shape.setTransform(14.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31,26.5);


(lib.tt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BBCFF").ss(1,1,1).p("AixAnIFjgsAivAFIFcgr");
	this.shape.setTransform(17.8,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6BBCFF").ss(1,1,1).p("AivAFIFcgrAixAnIFjgt");
	this.shape_1.setTransform(17.8,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.2,37.6,9.8);


(lib.tishi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.tishi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,142);


(lib.tdi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.tdi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453,421);


(lib.t9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.8,35.4);


(lib.t8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,46.6);


(lib.t7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.2,71.7);


(lib.t6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,78.3);


(lib.t5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.9,76.4);


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.7,77.3);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,74.5);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,186.3);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.5,178.8);


(lib.Symbol1222dsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BQdMAAAig6MBj+AAAMAAACg6g");
	this.shape.setTransform(320,515);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,37);


(lib.che_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.che();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,435,358);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnzi1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,28);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loadPic(this,"p1_2.jpg");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loadPic(this,"p1_1.jpg");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib._2t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2t2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,36);


(lib._2t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2t1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,37);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYgkIC9gTIgMBgIi9APg");
	mask.setTransform(8.8,4.4);

	// 图层 3
	this.instance = new lib.z3();
	this.instance.parent = this;
	this.instance.setTransform(9,4,1,1,0,0,0,9,4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:27.8,y:2},14).wait(1));

	// 图层 1
	this.instance_1 = new lib.z3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.5,6.3,1,1,0,0,0,9,4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:9,y:4},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,19.3,10);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z5();
	this.instance.parent = this;
	this.instance.setTransform(4,66.4,1,1,0,0,0,5,66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1,y:135.4},19).to({x:4,y:66.4},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1,12.2,134.8);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z4();
	this.instance.parent = this;
	this.instance.setTransform(4.4,11.3,1,1,0,0,0,4.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-11.6,y:232.2},34).to({x:4.4,y:11.3},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,22.7);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z6();
	this.instance.parent = this;
	this.instance.setTransform(20,9,1,1,0,0,0,20,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:59,y:3},24).to({x:20,y:9},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,18);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.z2();
	this.instance.parent = this;
	this.instance.setTransform(4.6,27.9,1,1,0,0,0,4.6,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.6,y:-100},39).to({x:4.6,y:27.9},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,55.7);


(lib.zhuangshi11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkXLUIAA2oIIuAAIAAWog");
	mask.setTransform(28,72.5);

	// 图层 2
	this.instance = new lib.zhuangshi1_1();
	this.instance.parent = this;
	this.instance.setTransform(28,72.5,1,1,0,0,0,28,72.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-72.7},24).wait(1));

	// 图层 1
	this.instance_1 = new lib.zhuangshi1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,217.7,1,1,0,0,0,28,72.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:72.5},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,145);


(lib.tt31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AixBDIEejcIBFB2IkxC9g");
	mask.setTransform(14.6,11.6);

	// 图层 1
	this.instance = new lib.tt2();
	this.instance.parent = this;
	this.instance.setTransform(-13.7,32.1,1,1,0,0,0,14.5,12.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.5,y:12.2},19).wait(1));

	// 图层 3
	this.instance_1 = new lib.tt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.5,12.2,1,1,0,0,0,14.5,12.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:42,y:-7.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-0.5,32.8,27.6);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.t2_1();
	this.instance.parent = this;
	this.instance.setTransform(88,93.1,1,1,0,0,0,88,93.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tt3
	this.instance_1 = new lib.tt3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.4,134.6,1,1,0,0,0,2.3,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,186.3);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t1_1();
	this.instance.parent = this;
	this.instance.setTransform(91.7,89.4,1,1,0,0,0,91.7,89.4);

	this.instance_1 = new lib.tt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.1,42.1,1,1,0,0,0,17.8,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.5,178.8);


(lib.Symbol1dxxx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1222dsf();
	this.instance.parent = this;
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol1222dsf(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.mzhuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yinyue21();
	this.instance.parent = this;
	this.instance.setTransform(40.5,43.3,0.978,0.997,0,0,0,41.4,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.2,84.8);


(lib.mmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// m1.png
	this.instance = new lib.mzhuan();
	this.instance.parent = this;
	this.instance.setTransform(41.4,41.4,1,1,0,0,0,40.6,42.4);

	this.instance_1 = new lib.yinyue21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.3,42.3,0.978,0.997,0,0,0,41.4,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// m2.png
	this.instance_2 = new lib.m2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-1,81.2,84.8);


(lib.guang_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},9).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.dimccopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.gotoAndPlay("out");
			typeIndex = 3;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(109.6,112.5,0.247,0.15,0,0,0,320.2,514.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.c32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,22,169,174);


(lib.dimccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.gotoAndPlay("out");
			typeIndex = 2;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(109.6,112.5,0.247,0.15,0,0,0,320.2,514.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.c22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,20,170,175);


(lib.dimc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.gotoAndPlay("out");
			typeIndex = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(109.6,112.5,0.247,0.15,0,0,0,320.2,514.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.c12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,14,184,182);


(lib.btn1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(136.1,59.9,0.3,0.094,0,0,0,320.1,513.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnzi1.png
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(229.5,37.2,1,1,0,0,0,53.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},5).to({scaleX:1,scaleY:1},5).wait(1));

	// btndi.png
	this.instance_1 = new lib.btndi();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,100);


(lib._11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhuangshi11();
	this.instance.parent = this;
	this.instance.setTransform(28,72.5,1,1,0,0,0,28,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,57,290.7);


(lib.tmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// t9
	this.instance = new lib.t9_1();
	this.instance.parent = this;
	this.instance.setTransform(279.5,382.2,1,1,0,0,0,102.9,17.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},10).wait(24));

	// t8
	this.instance_1 = new lib.t8_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.3,45.2,1,1,0,0,0,122.5,23.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({alpha:1},10).wait(24));

	// t7
	this.instance_2 = new lib.t7_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372,299.1,5,5,0,0,0,32.6,35.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,x:371.9,y:298.9,alpha:1},6,cjs.Ease.get(1)).to({regX:32.5,scaleX:1.03,scaleY:1.03},4).to({regX:32.6,scaleX:1,scaleY:1,x:372},3).wait(21));

	// t6
	this.instance_3 = new lib.t6_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(301.2,309,5,5,0,0,0,34.5,39.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,x:301,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},4).to({scaleX:1,scaleY:1},3).wait(22));

	// t5
	this.instance_4 = new lib.t5_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(227.2,319.2,5,5,0,0,0,34.9,38.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,y:319.4,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},4).to({scaleX:1,scaleY:1},3).wait(23));

	// t4
	this.instance_5 = new lib.t4_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(155.2,326.9,5,5,0,0,0,35.9,38.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,x:155,y:327.1,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},4).to({scaleX:1,scaleY:1},3).wait(24));

	// t3
	this.instance_6 = new lib.t3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.3,336,5,5,0,0,0,34.5,37.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,x:83.1,y:336.3,alpha:1},6,cjs.Ease.get(1)).to({regY:37.3,scaleX:1.03,scaleY:1.03},4).to({regY:37.2,scaleX:1,scaleY:1,y:336.2},3).wait(25));

	// t2-1
	this.instance_7 = new lib.t21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(244.9,253.1,0.189,0.189,90,0,0,0,186.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-1.2,x:244.8,y:253,alpha:1},8,cjs.Ease.get(1)).to({regX:0,rotation:1.4,x:244.9,y:253.1},4).to({rotation:0,y:253},3).wait(27));

	// t1-1
	this.instance_8 = new lib.t11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(213.1,266.7,0.182,0.182,-90,0,0,157.7,167.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:1.5,y:266.6,alpha:1},8,cjs.Ease.get(1)).to({regY:167.5,rotation:-1.5,y:266.7},4).to({regY:167.4,rotation:0},3).wait(27));

	// 图层 6
	this.instance_9 = new lib.tt31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(251.4,239,1,1,0,0,0,14.5,12.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({alpha:1},3).wait(27));

	// x2
	this.instance_10 = new lib.x2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(234.5,209.4,0.039,0.039,0,0,0,39.8,182);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:39.6,regY:182.3,scaleX:1,scaleY:1,x:414.3,y:182.3,alpha:1},12,cjs.Ease.get(1)).wait(42));

	// x1
	this.instance_11 = new lib.x1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(221,211.9,0.039,0.039,0,0,0,67.9,175.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:175.2,scaleX:1,scaleY:1,x:68.3,y:245,alpha:1},12,cjs.Ease.get(1)).wait(42));

	// tz3.png
	this.instance_12 = new lib.z1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(26.5,400.8,1,1,0,0,0,12.5,8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).wait(42));

	// tz1.png
	this.instance_13 = new lib.元件5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(128,396,1,1,0,0,0,9,4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).wait(42));

	// 图层 11
	this.instance_14 = new lib.元件4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(439.5,175.7,1,1,0,0,0,5,66.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).wait(42));

	// 图层 10
	this.instance_15 = new lib.元件3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(446.8,47.8,1,1,0,0,0,4.4,11.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).wait(42));

	// tz2.png
	this.instance_16 = new lib.元件2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(394.8,17,1,1,0,0,0,20,9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(12).to({_off:false},0).wait(42));

	// 图层 9
	this.instance_17 = new lib.元件1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(5,392.3,1,1,0,0,0,4.6,27.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(12).to({_off:false},0).wait(42));

	// 图层 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AKoK2IJshmIgmIRIpsBRg");
	var mask_graphics_1 = new cjs.Graphics().p("AD8FnISzjFIhKQCIy0Cdg");
	var mask_graphics_2 = new cjs.Graphics().p("AiKA2IbGkaIhqXFI7HDjg");
	var mask_graphics_3 = new cjs.Graphics().p("AnsjdMAiogFrIiHdhMgiqAEhg");
	var mask_graphics_4 = new cjs.Graphics().p("AspnUMApYgGxMgCiAjPMgpaAFag");
	var mask_graphics_5 = new cjs.Graphics().p("AxAquMAvUgHwMgC6AoUMgvWAGMg");
	var mask_graphics_6 = new cjs.Graphics().p("A0ytrMA0dgImMgDNAstMg0gAG3g");
	var mask_graphics_7 = new cjs.Graphics().p("A3/wMMA40gJTMgDeAwbMg43AHbg");
	var mask_graphics_8 = new cjs.Graphics().p("A6nyOMA8ZgJ5MgDsAzeMg8cAH5g");
	var mask_graphics_9 = new cjs.Graphics().p("A8pz0MA/KgKWMgD3A11Mg/OAIQg");
	var mask_graphics_10 = new cjs.Graphics().p("A+G09MBBJgKqMgD/A3hMhBNAIgg");
	var mask_graphics_11 = new cjs.Graphics().p("A++1pMBCVgK3MgEEA4iMhCYAIrg");
	var mask_graphics_12 = new cjs.Graphics().p("A/R13MBCugK7MgEFA43MhCyAIug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:130,y:120.2}).wait(1).to({graphics:mask_graphics_1,x:145.5,y:134.5}).wait(1).to({graphics:mask_graphics_2,x:159.7,y:147.6}).wait(1).to({graphics:mask_graphics_3,x:172.5,y:159.5}).wait(1).to({graphics:mask_graphics_4,x:183.9,y:170.1}).wait(1).to({graphics:mask_graphics_5,x:194,y:179.4}).wait(1).to({graphics:mask_graphics_6,x:202.8,y:187.5}).wait(1).to({graphics:mask_graphics_7,x:210.2,y:194.4}).wait(1).to({graphics:mask_graphics_8,x:216.2,y:200}).wait(1).to({graphics:mask_graphics_9,x:220.9,y:204.4}).wait(1).to({graphics:mask_graphics_10,x:224.3,y:207.5}).wait(1).to({graphics:mask_graphics_11,x:226.3,y:209.4}).wait(1).to({graphics:mask_graphics_12,x:227,y:210}).wait(42));

	// 图层 8
	this.instance_18 = new lib.tdi_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(227.5,210.6,1,1,0,0,0,226.5,210.5);
	this.instance_18.alpha = 0;

	this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.57},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,454,421);


(lib.p1mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:70});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
		
		loadPage(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(33).call(this.frame_69).wait(8).call(this.frame_77).wait(2));

	// Layer 2
	this.instance = new lib.btn1copy2();
	this.instance.parent = this;
	this.instance.setTransform(317.4,880.5,2.47,1.368,0,0,0,136.2,60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({_off:true},1).wait(42));

	// dimc
	this.instance_1 = new lib.dimccopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(503,844.2,0.1,0.1,0,0,0,108.5,106);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(3).to({alpha:0},7).to({_off:true},1).wait(1));

	// dimc
	this.instance_2 = new lib.dimccopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(325,844.2,0.1,0.1,0,0,0,108.5,106);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(5).to({alpha:0},7).to({_off:true},1).wait(1));

	// dimc
	this.instance_3 = new lib.dimc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(142,844.2,0.1,0.1,0,0,0,108.5,106);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(7).to({alpha:0},7).to({_off:true},1).wait(1));

	// 2t2
	this.instance_4 = new lib._2t2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(422.1,240.1,1,1,0,0,0,87.5,18);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({x:322.1,alpha:1},9,cjs.Ease.get(1)).wait(6).to({alpha:0},7).to({_off:true},1).wait(1));

	// 2t1
	this.instance_5 = new lib._2t1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(221.1,196.1,1,1,0,0,0,86.5,18.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({x:321.1,alpha:1},9,cjs.Ease.get(1)).wait(6).to({alpha:0},7).to({_off:true},1).wait(1));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320.1,82,1,1,0,0,0,57.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({alpha:0},8).to({_off:true},1).wait(33));

	// yinyue
	this.instance_7 = new lib.mmc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(591.4,47.3,0.684,0.684,0,0,0,41.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({alpha:0},7).to({_off:true},1).wait(1));

	// 1-1
	this.instance_8 = new lib._11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(42.6,100.8,1,1,0,0,0,0.2,72.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({alpha:1},12).wait(45).to({alpha:0},7).to({_off:true},1).wait(1));

	// guang.png
	this.instance_9 = new lib.guang_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(320,515,1,1,0,0,0,320,515);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({alpha:1},2).to({alpha:0},3).to({alpha:1},3).wait(17).to({alpha:0},7).to({_off:true},1).wait(1));

	// tishi
	this.instance_10 = new lib.tishi_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(316.8,736.8,1,1,0,0,0,79.5,71);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({alpha:1},10).wait(6).to({alpha:0},8).to({_off:true},1).wait(33));

	// btn
	this.instance_11 = new lib.btn();
	this.instance_11.parent = this;
	this.instance_11.setTransform(327.1,911.2,1,1,0,0,0,236.5,50);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({y:891.2,alpha:1},10,cjs.Ease.get(1)).wait(1).to({alpha:0},8).to({_off:true},1).wait(33));

	// tmc
	this.instance_12 = new lib.tmc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(322.2,403.6,1,1,0,0,0,227,210.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).wait(24).to({alpha:0},8).to({_off:true},1).wait(33));

	// che
	this.instance_13 = new lib.che_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(358.1,695.4,0.463,0.463,0,0,0,217.5,179.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},13).wait(32).to({regY:179,scaleX:1,scaleY:1,y:716.2},12,cjs.Ease.get(1)).wait(13).to({alpha:0},7).to({_off:true},1).wait(1));

	// bg.jpg
	this.instance_14 = new lib.bg2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(320,515,1,1,0,0,0,320,515);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).to({alpha:1},12).wait(13).to({alpha:0},7).to({_off:true},1).wait(1));

	// bg1.jpg
	this.instance_15 = new lib.bg1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(320,515,1,1,0,0,0,320,515);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},13,cjs.Ease.get(-1)).to({_off:true},45).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257.4,17.4,361.6,760.8);


// stage content:



(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.p1mc();
	this.instance.parent = this;
	this.instance.setTransform(345,568,1,1,0,0,0,345,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,515,619,778.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;