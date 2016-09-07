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
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p2_atlas_.png", id:"p2_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"p2_atlas_", frames: [[646,1032,597,251],[1662,1378,252,65],[587,1285,598,129],[1515,1484,453,53],[1996,790,33,48],[1996,691,34,48],[0,0,644,1034],[2019,0,19,47],[1996,493,36,47],[1996,443,36,48],[1996,592,35,47],[1996,542,35,48],[1996,641,34,48],[1996,741,34,47],[1996,393,36,48],[0,1430,473,93],[1187,1378,473,104],[1062,1484,451,77],[587,1416,473,103],[646,0,640,1030],[1288,0,640,1030],[1245,1032,614,213],[1861,1032,157,100],[1996,0,21,391],[1245,1247,598,129],[1930,0,64,873],[0,1245,585,183],[0,1036,609,207]]}
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



(lib._111 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11111 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._15s = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.anniu1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.btn1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.btn2 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.btn3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.btn3_1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.c1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ccc3 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hongseyanjing = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.shijiandi = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.t1_1 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.yanjing = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.yanjingguang = function() {
	this.spriteSheet = ss["p2_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.yaoqinganniu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,104);


(lib.yanjingshancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.hongseyanjing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,614,213);


(lib.yanjingshan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yanjingguang();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609,207);


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


(lib.Symbol13df = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(36,14);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,15);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,14);

	this.instance_3 = new lib.Bitmap4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32,14);

	this.instance_4 = new lib.Bitmap5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(33,15);

	this.instance_5 = new lib.Bitmap6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34,15);

	this.instance_6 = new lib.Bitmap7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(36,14);

	this.instance_7 = new lib.Bitmap8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36,15);

	this.instance_8 = new lib.Bitmap9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(34,14);

	this.instance_9 = new lib.Bitmap10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(34,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,14,33,48);


(lib.saoguang31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,0.498,1],-37.4,-9.9,37.5,9.9).s().p("AllT8IABgEQABgGgEAJIlaglQFU0NGK0iIErBSIABgCIF5BlQkdUSmRTsg");
	this.shape.setTransform(65.7,137.1,1.354,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,0,191.3,274.2);


(lib.ct1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.time_txt.text = endTime;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.time_txt = new cjs.Text("", "italic 42px 'Arial'", "#DAB37C");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "center";
	this.time_txt.lineHeight = 49;
	this.time_txt.lineWidth = 62;
	this.time_txt.parent = this;
	this.time_txt.setTransform(143,14);

	this.timeline.addTween(cjs.Tween.get(this.time_txt).wait(1));

	// Layer 2
	this.instance = new lib._111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,597,251);


(lib.bgbgg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t2();
	this.instance.parent = this;

	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,873);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("Egx/BQdMAAAig6MBj+AAAMAAACg6g");
	this.shape.setTransform(320,515);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1030);


(lib.yanjingshan2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yanjingshancopy();
	this.instance.parent = this;
	this.instance.setTransform(304.5,103.5,1,1,0,0,0,304.5,103.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,614,213);


(lib.yanjingshan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yanjingshan();
	this.instance.parent = this;
	this.instance.setTransform(304.5,103.5,1,1,0,0,0,304.5,103.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609,207);


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


(lib.shijian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 0
	this.ss = new lib.Symbol13df();
	this.ss.parent = this;
	this.ss.setTransform(116.5,58.3,1,1,0,0,0,52,44);

	this.timeline.addTween(cjs.Tween.get(this.ss).wait(1));

	// shijiandi.png
	this.mm = new lib.Symbol13df();
	this.mm.parent = this;
	this.mm.setTransform(42.7,58.3,1,1,0,0,0,52,44);

	this.instance = new lib.shijiandi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.mm}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,100);


(lib.saoguangmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlcN6IjJgTQjdgbhngsQg0gPg/g0Qh/hpgrjGQhulUgZk+QgEAAgEgfQgGgngEhrQgFhqBiioQAFgRAcgcQA7g4BngTQBQgQCFgWQEQgtETgMQAFAKD/gPQBtAEC2AQQFqAfFeA7QA4AHBAAUQB+ApAiBIIAIARQAIAXAGAgQATBngQCcQAAALgUDLQgYDmgQByQAAATgTBsQgYCEgWApIgLATQgRAbgWAYQhLBThzAlQAXAAkFBCQkKBDh+AHIjQAVQh1AJhtAAQh2AAhqgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:451,y:90}).wait(30).to({graphics:null,x:0,y:0}).wait(40));

	// 图层 4
	this.instance = new lib.saoguang31();
	this.instance.parent = this;
	this.instance.setTransform(270.4,67.1,1,1,0,0,0,68.2,137.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:648.4,y:96.1},29,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// 图层 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhiN7IjQgVQh+gHkKhDQkFhCAXAAQhzglhLhTQgWgYgRgbIgLgTQgWgpgYiEQgThsAAgTQgQhygYjmQgUjLAAgLQgQicAThnQAGggAIgXIAIgRQAihIB+gpQBAgUA4gHQFeg7FqgfQC2gQBtgEQD/APAFgKQETAMEQAtQCFAWBQAQQBnATA7A4QAcAcAFARQBPCxAICaQACAygGAnQgEAfgEAAQgZE+huFUQgrDGh/BpQg/A0g0APQhnAsjdAbIjJATQhqAKh2AAQhtAAh1gJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:131,y:90}).wait(30).to({graphics:null,x:0,y:0}).wait(40));

	// 图层 2
	this.instance_1 = new lib.saoguang31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-68.6,63.1,1,1,0,0,0,68.2,137.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:317.4,y:97.1},29,cjs.Ease.get(1)).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.6,180.1);


(lib.dimccopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			window.location.href = "http://mktm2.10101111.com/html5/2016/template_2/index.html?sharefrom=caisi160";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(145.7,100.5,0.356,0.053,0,0,0,320.7,514.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.dimccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			window.location.href = "http://qr03.cn/CAfnt9";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(145.7,100.5,0.356,0.053,0,0,0,320.7,514.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.dimc = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(79.1,77.4,0.247,0.15,0,0,0,320.2,514.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daoju3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yanjing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.saoguangmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(291.1,92,1,1,0,0,0,291.1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.8,-72,751.8,278.2);


(lib.chongwanbtncopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(228.3,38.3,0.73,0.093,0,0,0,320.1,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.chongwanbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			loadPage(1);
			thisMc.parent.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(228.3,38.3,0.73,0.093,0,0,0,320.1,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.btn1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,93);


(lib.btn21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.instance = new lib.chongwanbtncopy();
	this.instance.parent = this;
	this.instance.setTransform(233,47.8,1,1,0,0,0,236.5,46.5);

	this.instance_1 = new lib.dimccopy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303,-25.4,1,1,0,0,0,108.5,106);

	this.ikNode_1 = new lib.dimccopy();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(73,-25.4,1,1,0,0,0,108.5,106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.ikNode_1},{t:this.instance_1}]},1).wait(1));

	// 图层 2
	this.instance_2 = new lib.anniu1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-57);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.instance_3 = new lib.btn3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.btn3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,451,77);


(lib.yaoqinghaoyou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			thisMc.parent.parent.parent.share_mc.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(228.3,44.2,0.73,0.093,0,0,0,320.1,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,104);


(lib.wangyuanjing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// t2.png
	this.instance = new lib._15s();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// chongwanbtn
	this.instance_1 = new lib.yaoqinghaoyou();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.1,725.1,1,1,0,0,0,236.5,52);

	this.instance_2 = new lib.chongwanbtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.1,622.6,1,1,0,0,0,236.5,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// 图层 6
	this.instance_3 = new lib.ccc3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-208,640,1030);


(lib.Symbol123d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var thisMc = this;
		thisMc.addEventListener("mousedown",onDown);
		
		function onDown(e)
		{
			//window.location.href = "http://v.qq.com/x/page/b01706o6mpr.html";
			showPlayer();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1dxxx();
	this.instance.parent = this;
	this.instance.setTransform(118.9,23.9,0.409,0.063,0,0,0,320.5,515.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib._11111();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,65);


(lib.fenxiangmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Layer 2
	this.instance = new lib.dimc();
	this.instance.parent = this;
	this.instance.setTransform(439.5,704.6,4.051,6.647,0,0,0,108.5,106);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},1).wait(9));

	// t2.png
	this.instance_1 = new lib.bgbgg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(576.1,451.1,1,1,0,0,0,32,436.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},8).to({alpha:0},9).wait(1));

	// yaoqinganniu
	this.instance_2 = new lib.yaoqinganniu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.7,932.6,1,1,0,0,0,236.5,52);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},8).to({alpha:0},9).wait(1));

	// 图层 4
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,515,1,1,0,0,0,320,515);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},8).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daoju3mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// t2.png
	this.instance = new lib._15s();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// yaoqinghaoyou
	this.instance_1 = new lib.yaoqinghaoyou();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.1,725.1,1,1,0,0,0,236.5,52);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// chongwanbtn
	this.instance_2 = new lib.chongwanbtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.1,622.6,1,1,0,0,0,236.5,46.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.instance_3 = new lib.c1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-208,640,1030);


(lib.yanjingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.instance = new lib.yanjingshan2copy();
	this.instance.parent = this;
	this.instance.setTransform(318.1,295.2,1,1,0,0,0,304.5,103.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// daoju3
	this.instance_1 = new lib.daoju3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.1,299.1,1,1,0,0,0,292.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// ct1
	this.instance_2 = new lib.t1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,14.5);

	this.instance_3 = new lib.Symbol123d();
	this.instance_3.parent = this;
	this.instance_3.setTransform(156,157.5,1,1,0,0,0,126,32.5);

	this.instance_4 = new lib.ct1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,62.5,1,1,0,0,0,300,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

	// btn2.png
	this.instance_5 = new lib.chongwanbtn();
	this.instance_5.parent = this;
	this.instance_5.setTransform(328.1,623.6,1,1,0,0,0,236.5,46.5);

	this.instance_6 = new lib.btn21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(323.6,607.6,1,1,0,0,0,225.5,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// btn1.png
	this.instance_7 = new lib.yaoqinghaoyou();
	this.instance_7.parent = this;
	this.instance_7.setTransform(328.1,726.1,1,1,0,0,0,236.5,52);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(2));

	// 图层 2
	this.instance_8 = new lib.yanjingshan2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(320.1,299.2,1,1,0,0,0,304.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(2));

	// 眼镜黑层
	this.instance_9 = new lib.Bitmap14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-208,800.8,1034);


(lib.daojumc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 三个道具
	this.instance = new lib.daoju3mc();
	this.instance.parent = this;
	this.instance.setTransform(320,388.6,1,1,0,0,0,320,388.6);

	this.instance_1 = new lib.yanjingmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(309.5,395.8,1.001,1,0,0,0,309.3,395.8);

	this.instance_2 = new lib.wangyuanjing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315,388.6,1,1,0,0,0,315,388.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-208,640,1030);


(lib.fucengmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.share_mc.gotoAndStop(0);
		this.time_mc.visible = false;
		this.type_mc.visible = false;
	}
	this.frame_2 = function() {
		this.stop();
		this.share_mc.gotoAndStop(0);
		initGame(this);
		this.type_mc.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 2
	this.share_mc = new lib.fenxiangmc();
	this.share_mc.parent = this;
	this.share_mc.setTransform(320,515,1,1,0,0,0,320,515);
	this.share_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.share_mc).wait(1).to({_off:false},0).wait(2));

	// shijian
	this.time_mc = new lib.shijian();
	this.time_mc.parent = this;
	this.time_mc.setTransform(324.1,92.1,1,1,0,0,0,78.5,50);
	this.time_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.time_mc).wait(1).to({_off:false},0).wait(2));

	// daojumc
	this.type_mc = new lib.daojumc();
	this.type_mc.parent = this;
	this.type_mc.setTransform(320,600.2,1,1,0,0,0,320,392.6);
	this.type_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.type_mc).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.2,880.6,473,104);


// stage content:



(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.fucengmc();
	this.instance.parent = this;
	this.instance.setTransform(320,515,1,1,0,0,0,320,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;