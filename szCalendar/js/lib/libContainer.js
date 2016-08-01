(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// soundicon
    (lib.soundIconContainer = function() {
        this.initialize(img.soundicon);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,96,48);

    (lib.soundIcon = function() {
        this.spriteSheet = ss["soundIcon_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();

//loading

    (lib.loadingSpirteSheetContainer = function() {
        this.initialize(img.loadingSprite);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,512,512);


    (lib.loading_bar_bg = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_car = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_mask = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_txt_1 = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_txt_2 = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_txt_3 = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.loading_wheel = function() {
        this.spriteSheet = ss["libContainer_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.mc_loadingbar_rolltxt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 5
        this.instance = new lib.loading_txt_3();
        this.instance.setTransform(-73.5,-11.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(20));

        // 图层 6
        this.instance_1 = new lib.loading_txt_2();
        this.instance_1.setTransform(-73.5,-11.1);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},10).wait(10));

        // 图层 4
        this.instance_2 = new lib.loading_txt_1();
        this.instance_2.setTransform(-73.5,-11.1);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(10));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-73.5,-11.1,54,20);


    (lib.gra_loading_wheel = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.loading_wheel();
        this.instance.setTransform(-16.5,-16.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


    (lib.gra_loading_mask = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.loading_mask();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,300,21);


    (lib.gra_loading_car = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.loading_car();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,293,83);


    (lib.mc_loading_wheel = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.instance = new lib.gra_loading_wheel();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},15).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


    (lib.gra_loading_car_body = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.mc_loading_wheel();
        this.instance.setTransform(88,22);

        this.instance_1 = new lib.mc_loading_wheel();
        this.instance_1.setTransform(-92.7,22);

        this.instance_2 = new lib.gra_loading_car();
        this.instance_2.setTransform(0,0,1,1,0,0,0,146.5,41.5);

        this.addChild(this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-146.5,-41.5,293,83);


    (lib.gra_loading_bar_bg = function() {
        this.initialize();

        // 图层 3
        this.instance = new lib.mc_loadingbar_rolltxt();
        this.instance.setTransform(26.5,28.6,0.78,0.78,0,0,0,-46.5,-1.1);

        // 图层 1
        this.instance_1 = new lib.loading_bar_bg();

        this.addChild(this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,115,131);


    (lib.mc_loading_car_body = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // 图层 1
        this.instance = new lib.gra_loading_car_body();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1},7).to({y:0},8).wait(1));

        // 图层 2
        this.instance_1 = new lib.gra_loading_mask();
        this.instance_1.setTransform(1,43,1,1,0,0,0,150,10.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.01,y:44},7).to({scaleX:1,y:43},8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-149,-41.5,300,95);


    (lib.mc_loading_car = function() {
        this.initialize();

        // 图层 2
        this.instance = new lib.mc_loading_car_body();
        this.instance.setTransform(3.5,-17.8);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-145.5,-59.3,300,95);


    (lib.mc_loading_bar = function() {
        this.initialize();

        // 图层 1
        this.txt_loadingNum = new cjs.Text("99", "bold 67px 'Arial'", "#FF0000");
        this.txt_loadingNum.name = "txt_loadingNum";
        this.txt_loadingNum.textAlign = "center";
        this.txt_loadingNum.lineHeight = 69;
        this.txt_loadingNum.lineWidth = 87;
        this.txt_loadingNum.setTransform(-5.4,-98.9);

        this.instance = new lib.mc_loading_car();
        this.instance.setTransform(-4.5,100.1);

        this.instance_1 = new lib.gra_loading_bar_bg();
        this.instance_1.setTransform(0.8,-70.1,1,1,0,0,0,57.5,65.5);

        this.addChild(this.instance_1,this.instance,this.txt_loadingNum);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-150,-135.6,300,271.4);




// bg

    (lib.bg_calendar = function() {
        this.initialize(img.bg_calendar);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.main_bg = function() {
        this.initialize(img.main_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.gra_main_bg = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.main_bg();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.gra_bg_calendar = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.bg_calendar();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);






//calendar


    (lib.calendar_1 = function() {
        this.initialize(img.calendar_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,701,930);


    (lib.calendar_2 = function() {
        this.initialize(img.calendar_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,701,930);


    (lib.m_1 = function() {
        this.initialize(img.m_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.m_2 = function() {
        this.initialize(img.m_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.m_3 = function() {
        this.initialize(img.m_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.m_4 = function() {
        this.initialize(img.m_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.m_5 = function() {
        this.initialize(img.m_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.mc_filp_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_3 = function() {
            SiteSignalController.ChangePageSignal.dispatch();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(2));

        // m_1.png
        this.instance = new lib.m_3();

        this.instance_1 = new lib.m_4();

        this.instance_2 = new lib.m_5();

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

    (lib.mc_filp = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_0 = function() {
            this.stop()
        }
        this.frame_5 = function() {
            SiteSignalController.ChangePageSignal.dispatch();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(2));

        // m_1.png
        this.instance = new lib.m_1();

        this.instance_1 = new lib.m_2();

        this.instance_2 = new lib.m_3();

        this.instance_3 = new lib.m_4();

        this.instance_4 = new lib.m_5();

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


 //calendar




    (lib.calendar_1 = function() {
        this.initialize(img.calendar_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_10 = function() {
        this.initialize(img.calendar_10);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_11 = function() {
        this.initialize(img.calendar_11);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_2 = function() {
        this.initialize(img.calendar_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_3 = function() {
        this.initialize(img.calendar_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_4 = function() {
        this.initialize(img.calendar_4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_5 = function() {
        this.initialize(img.calendar_5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_6 = function() {
        this.initialize(img.calendar_6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_7 = function() {
        this.initialize(img.calendar_7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_8 = function() {
        this.initialize(img.calendar_8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.calendar_9 = function() {
        this.initialize(img.calendar_9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


    (lib.mc_calendar = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_0 = function() {
            this.stop()
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

        // calendar_1.jpg
        this.instance = new lib.calendar_1();

        this.instance_1 = new lib.calendar_2();

        this.instance_2 = new lib.calendar_3();

        this.instance_3 = new lib.calendar_4();

        this.instance_4 = new lib.calendar_5();

        this.instance_5 = new lib.calendar_7();

        this.instance_6 = new lib.calendar_8();

        this.instance_7 = new lib.calendar_9();

        this.instance_8 = new lib.calendar_10();

        this.instance_9 = new lib.calendar_11();

        this.instance_10 = new lib.calendar_6();

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,468,620);


//ending page

    (lib.ending_btn = function() {
        this.initialize(img.ending_btn);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,400,107);


    (lib.ending_logo = function() {
        this.initialize(img.ending_logo);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,199,57);


    (lib.ending_t1 = function() {
        this.initialize(img.ending_t1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,548,62);


    (lib.ending_t2 = function() {
        this.initialize(img.ending_t2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,413,188);


    (lib.ending_t3 = function() {
        this.initialize(img.ending_t3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,548,163);


    (lib.main_bg2 = function() {
        this.initialize(img.main_bg2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.gra_main_bg2 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.main_bg2();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.gra_end_t3 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.ending_t3();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,548,163);


    (lib.gra_end_t2 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.ending_t2();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,413,188);


    (lib.gra_end_t1 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.ending_t1();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,548,62);


    (lib.gra_end_logo = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.ending_logo();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,199,57);


    (lib.gra_end_btn = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.ending_btn();

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("A/PIXIAAwtMA+eAAAIAAQtg");
        this.shape.setTransform(200,53.5);

        this.addChild(this.shape,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,400,107);


    (lib.mc_btn_go = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{out:0,down:1});
        this.initData=function()
        {
            this.setEnabled(true)
        };
        this.setEnabled = function(value) {
            if (value == this._enabled) { return; }

            if (value) {
                this.cursor = "pointer";
                this.addEventListener("mousedown", this);

            } else {
                this.cursor = null;
                this.removeEventListener("mousedown", this);
            }
        };

        this.handleEvent = function(evt) {
            var  type = evt.type;
            if (type == "mousedown") {

                this.gotoAndPlay("down")
                this.doSomething()

            }
        };
        this.doSomething= function()
        {
            console.log("go url===" );
            window.location.href="http://www.weidongs.com/ptest/shengzhou/gift.html";
        };
        this.initData();

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

        // 图层 1
        this.instance = new lib.gra_end_btn();
        this.instance.setTransform(200,53.5,1,1,0,0,0,200,53.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,400,107);


    (lib.mc_ending = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_19 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

        // gra_end_t3
        this.instance = new lib.gra_end_t3();
        this.instance.setTransform(318.8,639.2,1,1,0,0,0,274,81.5);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:593.2,alpha:1},8,cjs.Ease.get(1)).to({y:599.2},4,cjs.Ease.get(1)).wait(5));

        // gra_end_t1
        this.instance_1 = new lib.gra_end_t1();
        this.instance_1.setTransform(318.8,218.9,1,1,0,0,0,274,31);
        this.instance_1.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:172.9,alpha:1},8,cjs.Ease.get(1)).to({y:178.9},4,cjs.Ease.get(1)).wait(6));

        // gra_end_t2
        this.instance_2 = new lib.gra_end_t2();
        this.instance_2.setTransform(327.3,403.9,1,1,0,0,0,206.5,94);
        this.instance_2.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:357.9,alpha:1},8,cjs.Ease.get(1)).to({y:363.9},4,cjs.Ease.get(1)).wait(7));

        // gra_end_logo
        this.instance_3 = new lib.gra_end_logo();
        this.instance_3.setTransform(322.2,106.5,1,1,0,0,0,99.5,28.5);
        this.instance_3.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:60.5,alpha:1},8,cjs.Ease.get(1)).to({y:66.5},4,cjs.Ease.get(1)).wait(8));

        // gra_end_btn
        this.btn_go = new lib.mc_btn_go();
        this.btn_go.setTransform(320.8,850.2,1,1,0,0,0,200,53.5);
        this.btn_go.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.btn_go).wait(4).to({y:890.2},0).to({y:840.2,alpha:1},8,cjs.Ease.get(1)).to({y:850.2},4,cjs.Ease.get(1)).wait(4));

        // 图层 2
        this.mc_bg = new lib.gra_main_bg2();
        this.mc_bg.setTransform(320,0,1,1,0,0,0,320,0);

        this.timeline.addTween(cjs.Tween.get(this.mc_bg).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);





// msgboard:



    (lib.bg_mask = function() {
        this.initialize(img.bg_mask);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1108);


    (lib.msg_arrow = function() {
        this.initialize(img.msg_arrow);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,131,19);


    (lib.msg_hand = function() {
        this.initialize(img.msg_hand);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,165,418);


    (lib.msg_txt = function() {
        this.initialize(img.msg_txt);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,259,38);


    (lib.msg_txt2 = function() {
        this.initialize(img.msg_txt2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,455,93);


    (lib.msg_txt3 = function() {
        this.initialize(img.msg_txt3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,187,38);


    (lib.gra_msg_txt3 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.msg_txt3();
        this.instance.setTransform(-93.5,-38);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-93.5,-38,187,38);


    (lib.gra_msg_txt2 = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.msg_txt2();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,455,93);


    (lib.gra_msg_txt = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.msg_txt();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,259,38);


    (lib.gra_msg_hand = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.msg_hand();
        this.instance.setTransform(-82.5,-418);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-82.5,-418,165,418);


    (lib.gra_msg_arrow = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.msg_arrow();
        this.instance.setTransform(-65.5,-19);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-65.5,-19,131,19);


    (lib.gra_bg_mask = function() {
        this.initialize();

        // 图层 1
        this.instance = new lib.bg_mask();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


    (lib.mc_msg_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        this.initData=function()
        {
            this.setEnabled(true)
        };
        this.setEnabled = function(value) {
            if (value == this._enabled) { return; }

            if (value) {
                this.cursor = "pointer";
                this.addEventListener("mousedown", this);

            } else {
                this.cursor = null;
                this.removeEventListener("mousedown", this);
            }
        };

        this.handleEvent = function(evt) {
            var  type = evt.type;
            if (type == "mousedown") {

                this.doSomething()

            }
        };
        this.doSomething= function()
        {
            cjs.Tween.get(this).wait(0).to({alpha:0}, 500,createjs.Ease.get(1)).call(function(){ss["stage"].removeChild(this); ss["main"]._ifScreenLock=false;}) ;
            cjs.Tween.removeTweens (ss["stage"])  ;

            console.log("remove msg_2===" );
        };
        this.initData();
        // timeline functions:
        this.frame_129 = function() {
            this.gotoAndPlay(56)
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

        // gra_msg_txt2
        this.instance = new lib.gra_msg_txt2();
        this.instance.setTransform(325.5,520.3,1,1,0,0,0,227.5,46.5);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:480.3,alpha:1},10,cjs.Ease.get(1)).wait(115));

        // gra_msg_txt3
        this.instance_1 = new lib.gra_msg_txt3();
        this.instance_1.setTransform(277.5,912.7,1,1,0,0,0,0,-19);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:872.7,alpha:1},10,cjs.Ease.get(1)).wait(113));

        // gra_msg_arrow
        this.instance_2 = new lib.gra_msg_arrow();
        this.instance_2.setTransform(518.6,645.3,1,1,0,0,0,0,-9.5);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(9).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({x:518.6},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({x:518.6},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(10));

        // gra_msg_hand
        this.instance_3 = new lib.gra_msg_hand();
        this.instance_3.setTransform(495.6,1337.8,1,1,12.4);
        this.instance_3.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({y:1097.8,alpha:1},14,cjs.Ease.get(1)).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(9).to({rotation:-9.2},0).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({rotation:12.4,alpha:1},0).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({rotation:12.4,alpha:1},0).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(10));

        // 图层 1
        this.mc_bg = new lib.gra_bg_mask();
        this.mc_bg.setTransform(320,504,1,1,0,0,0,320,504);
        this.mc_bg.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.mc_bg).to({alpha:1},7).wait(123));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,666.3,1355.6);


    (lib.mc_msg_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        this.initData=function()
        {
            this.setEnabled(true)
        };
        this.setEnabled = function(value) {
            if (value == this._enabled) { return; }

            if (value) {
                this.cursor = "pointer";
                this.addEventListener("mousedown", this);

            } else {
                this.cursor = null;
                this.removeEventListener("mousedown", this);
            }
        };

        this.handleEvent = function(evt) {
            var  type = evt.type;
            if (type == "mousedown") {

                this.doSomething()

            }
        };
        this.doSomething= function()
        {
            cjs.Tween.get(this).wait(0).to({alpha:0}, 500,createjs.Ease.get(1)).call(function(){ss["stage"].removeChild(this); ss["main"]._ifScreenLock=false;}) ;
            cjs.Tween.removeTweens (ss["stage"])  ;

            console.log("remove msg_1===" );
        };
        this.initData();

        // timeline functions:
        this.frame_129 = function() {
            this.gotoAndPlay(56)
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

        // gra_msg_txt3
        this.instance = new lib.gra_msg_txt();
        this.instance.setTransform(96.5,866.7,1,1,0,0,0,0,-19);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:846.7,alpha:1},10,cjs.Ease.get(1)).wait(113));

        // gra_msg_arrow
        this.instance_1 = new lib.gra_msg_arrow();
        this.instance_1.setTransform(518.6,645.3,1,1,0,0,0,0,-9.5);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(9).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({x:518.6},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({x:518.6},0).to({x:478.6,alpha:1},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(10));

        // gra_msg_hand
        this.instance_2 = new lib.gra_msg_hand();
        this.instance_2.setTransform(495.6,1337.8,1,1,12.4);
        this.instance_2.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({y:1097.8,alpha:1},14,cjs.Ease.get(1)).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(9).to({rotation:-9.2},0).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({rotation:12.4,alpha:1},0).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(11).to({rotation:12.4,alpha:1},0).to({rotation:-9.2},10,cjs.Ease.get(1)).wait(11).to({alpha:0},6,cjs.Ease.get(1)).wait(10));

        // 图层 1
        this.mc_bg = new lib.gra_bg_mask();
        this.mc_bg.setTransform(320,504,1,1,0,0,0,320,504);
        this.mc_bg.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.mc_bg).to({alpha:1},7).wait(123));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,666.3,1355.6);


// stage content:
    (lib.libContainer = function() {
        this.initialize();

        //// 图层 3
        //this.instance = new lib.gra_loadingbar();
        //this.instance.setTransform(334.1,572.6,1,1,0,0,0,166,31);
        //
        //// 图层 2
        //this.instance_1 = new lib.mc_qbody();
        //this.instance_1.setTransform(328.5,498.6,1,1,0,0,0,297,498.6);
        //
        //// 图层 1
        //this.instance_2 = new lib.gra_bg();
        //this.instance_2.setTransform(320,568,1,1,0,0,0,320,568);
        //
        //this.addChild(this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(320,553,1257,1136);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;