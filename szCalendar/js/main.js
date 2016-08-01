var _domain="./";
var _domain2="./";
var _couponPage=_domain2+"gift.html";
var _canvas, _stage, _bg, _exportRoot, _flip,_flip2,_calendar,_bg2,_soundBtn,_msg,_ending;
var images = images || {};
var _ifBgmPlay=false;
var _ifScreenLock=true;
var _loadedPecent = 0;
var _qNum = 0;
var _qLock = false;
var _orgWidth = 640;
var _orgHeight = 1008;
var _screenRatio = _orgHeight / _orgWidth;
var _ifAllLoad;
var _preloadManifest = [
    {src:_domain+"images/loading_sprite.png", id:"loadingSprite"}
];
var _loadingBar;

var _bgmUrl=_domain+"audio/loop.mp3";
var _mainManifest = [
    //{src:_domain+"audio/loop.mp3", id:"loop"},
    {src:_domain+"images/soundicon.png", id:"soundicon"},
    {src:_domain+"images/bg_calendar.png", id:"bg_calendar"},
    {src:_domain+"images/main_bg.jpg", id:"main_bg"},
    {src:_domain+"images/m_1.png", id:"m_1"},
    {src:_domain+"images/m_2.png", id:"m_2"},
    {src:_domain+"images/m_3.png", id:"m_3"},
    {src:_domain+"images/m_4.png", id:"m_4"},
    {src:_domain+"images/m_5.png", id:"m_5"},
    {src:_domain+"images/ending_btn.png", id:"ending_btn"},
    {src:_domain+"images/ending_logo.png", id:"ending_logo"},
    {src:_domain+"images/ending_t1.jpg", id:"ending_t1"},
    {src:_domain+"images/ending_t2.png", id:"ending_t2"},
    {src:_domain+"images/ending_t3.png", id:"ending_t3"},
    {src:_domain+"images/main_bg2.jpg", id:"main_bg2"},
    {src:_domain+"images/bg_mask.png", id:"bg_mask"},
    {src:_domain+"images/msg_arrow.png", id:"msg_arrow"},
    {src:_domain+"images/msg_hand.png", id:"msg_hand"},
    {src:_domain+"images/msg_txt.png", id:"msg_txt"},
    {src:_domain+"images/msg_txt2.png", id:"msg_txt2"},
    {src:_domain+"images/msg_txt3.png", id:"msg_txt3"},
    {src:_domain+"images/calendar_1.jpg", id:"calendar_1"},
    {src:_domain+"images/calendar_10.jpg", id:"calendar_10"},
    {src:_domain+"images/calendar_11.jpg", id:"calendar_11"},
    {src:_domain+"images/calendar_2.jpg", id:"calendar_2"},
    {src:_domain+"images/calendar_3.jpg", id:"calendar_3"},
    {src:_domain+"images/calendar_4.jpg", id:"calendar_4"},
    {src:_domain+"images/calendar_5.jpg", id:"calendar_5"},
    {src:_domain+"images/calendar_6.jpg", id:"calendar_6"},
    {src:_domain+"images/calendar_7.jpg", id:"calendar_7"},
    {src:_domain+"images/calendar_8.jpg", id:"calendar_8"},
    {src:_domain+"images/calendar_9.jpg", id:"calendar_9"}

];

var Signal = signals.Signal;

//custom object that dispatch signals
var SiteSignalController = {
    ChangePageSignal : new Signal(),
    ActionSignal : new Signal(),
    stopped : new Signal()
};

function init() {



    createjs.MotionGuidePlugin.install();
    _canvas = Util.DOMUtil.getEl('canvas');
    canvasScale();

    _stage = new createjs.GestureDectStage(_canvas);

    _stage.update();
    _stage.enableMouseOver();
    createjs.Touch.enable(_stage);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener('tick', _stage);




    _exportRoot = new lib.libContainer();
    ss["stage"] =_exportRoot;
    ss["main"] =this;
    _stage.addChild(_exportRoot);
    _preloadManifest != null ? preloading() : mainLoading();
    loadAudio(_bgmUrl,audioComplete);
}


//预载loading界面 预加载在mainloading出现之前的页面
function preloading() {
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', preloadFileLoadHandle);
    loader.addEventListener('complete', preloadCompleteHandle);
    loader.loadManifest(_preloadManifest);
}
function preloadFileLoadHandle(evt) {

    if (evt.item.type == 'image') {
        images[evt.item.id] = evt.result;
    }
}

function preloadCompleteHandle() {


    mainLoading();


}


//主场景loading
function mainLoading() {


    var st=new createjs.SpriteSheet({images: [new lib.loadingSpirteSheetContainer().image], frames:  [[295,0,115,131],[0,0,293,83],[0,133,300,21],[84,107,45,20],[35,107,47,20],[35,85,54,20],[0,85,33,33]]});
    ss["libContainer_atlas_"] =st;



    _loadingBar = new lib.mc_loading_bar();
    _loadingBar.txt_loadingNum.text = "";
    _loadingBar.x = 420;
    _loadingBar.y = Util.DOMUtil.getSize().h/2;
    _loadingBar.alpha=0;
    createjs.Tween.get(_loadingBar).to({alpha:1,x:320}, 500,createjs.Ease.get(1));
    _exportRoot.addChild(_loadingBar);

    var loader = new createjs.LoadQueue(true);
    //loader.installPlugin(createjs.Sound);
    loader.addEventListener("fileload", mainFileLoadHandle);
    loader.addEventListener("progress", mainProgressHandle);
    loader.addEventListener("complete", mainCompleteHandle);
    loader.loadManifest(_mainManifest);
}

function fadeOutRemove(target) {
    _exportRoot.removeChild(target);
    setStartBody( );
}


function mainFileLoadHandle(evt) {
    if (evt.item.type == 'image') {
        images[evt.item.id] = evt.result;
    }
}


function mainProgressHandle(evt) {
    _loadedPecent = Math.floor(evt.progress * 100);
    if(_loadedPecent==100)
    {
        _loadedPecent=99;
    }
    _loadingBar.txt_loadingNum.text = Util.NumberUtil.addLeadingZeros(_loadedPecent,2) ;


}


function loadAudio(src) {

    var audio =document.getElementById("bgm");
    audio.autoplay=true;
    audio.loop=true;
    //audio.onloadedmetadata = audioComplete( );
    audio.oncanplay = audioCanPlay( );
    audio.src = src;

}

function audioComplete( ) {
   // Util.CjsUtil.showVal(130,_stage,["music ok==="]);
    console.log("music ok===")
    $('#bgm')[0].play();
    _ifBgmPlay=true;

}
function audioCanPlay( ) {
    // Util.CjsUtil.showVal(130,_stage,["music ok==="]);
    console.log("music canplay===")
    $('#bgm')[0].play();
    _ifBgmPlay=true;

}

function mainCompleteHandle(evt) {
    // createjs.Sound.play("loop", {interrupt: createjs.Sound.INTERRUPT_NONE, loop: 999, volume: 0.4});

    setSoundIcon();
    SiteSignalController.ChangePageSignal.add(ChangeHandle);
    SiteSignalController.ActionSignal.add(ActionHandle);
    createjs.Tween.get(_loadingBar).to({alpha:0,x:200}, 800,createjs.Ease.get(1)).call(fadeOutRemove,[_loadingBar]) ;
    console.log("main In===");



}
function setSoundIcon( ) {
    var sd=new createjs.SpriteSheet(
        {images: [new lib.soundIconContainer().image],
            frames:{width:48, height:48, regX:0, regY:0, spacing:0, margin:0}
        });
    ss["soundIcon_atlas_"] =sd;

}


function setStartBody( ) {

    _bg= new lib.main_bg();
    _bg.x =0;
    _bg.y =0;
    _bg.alpha=0;
    _exportRoot.addChild(_bg);
    createjs.Tween.get(_bg).wait(0).to({alpha:1}, 800,createjs.Ease.get(1));
    _bg.scaleY = Util.DOMUtil.getSize().h / _orgHeight;



    _bg2= new lib.bg_calendar();
    _bg2.x =0;
    _bg2.y =0;
    _bg2.alpha=0;
    _exportRoot.addChild(_bg2);
    createjs.Tween.get(_bg2).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;

    _calendar= new lib.mc_calendar();
    _calendar.x =77;
    _calendar.y =175;
    _calendar.alpha=0;
    _exportRoot.addChild(_calendar);
    createjs.Tween.get(_calendar).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;

    _flip= new lib.mc_filp();
    _flip.x =0;
    _flip.y =0;
    _flip.alpha=0;
    _exportRoot.addChild(_flip);
    createjs.Tween.get(_flip).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;

    _soundBtn = new lib.soundIcon();
    _soundBtn.x = 10;
    _soundBtn.y = 10;
    _soundBtn.alpha=0;
    _exportRoot.addChild(_soundBtn);
    if(_ifBgmPlay)
    {
        createjs.Tween.get(_soundBtn).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;
        _soundBtn.gotoAndStop(1);
        _soundBtn.addEventListener("mousedown",soundHandle);
    }


    _msg= new lib.mc_msg_1();
    _msg.x =0;
    _msg.y =0;
    _msg.alpha=0;
    _exportRoot.addChild(_msg);
    createjs.Tween.get(_msg).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;
    //_msg["mc_bg"].scaleY = Util.DOMUtil.getSize().h / _orgHeight;
     autoFade();

}


function autoFade() {

    createjs.Tween.get(_exportRoot).wait(3000).call(fadeOutMsg,[_msg]) ;
    //createjs.Tween.removeTweens (_exportRoot)  ;

}


function showMsg2() {

    _msg= new lib.mc_msg_2();
    _msg.x =0;
    _msg.y =0;
    _msg.alpha=0;
    _exportRoot.addChild(_msg);
    createjs.Tween.get(_msg).wait(0).to({alpha:1}, 800,createjs.Ease.get(1)) ;
    autoFade()
    //createjs.Tween.removeTweens (_exportRoot)  ;

}

function showEnding() {

    _ending= new lib.mc_ending();
    _ending.x =0;
    _ending.y =0;
    _exportRoot.addChild(_ending);
    _ending["mc_bg"].scaleY = Util.DOMUtil.getSize().h / _orgHeight;
    console.log("mcbg", _ending["mc_bg"].x)
    console.log("mcbg",Util.DOMUtil.getSize().h / _orgHeight)
    console.log("mcbg", _ending["mc_bg"].x)

}
function fadeOutMsg(target) {
    createjs.Tween.get(target).to({alpha:0}, 500,createjs.Ease.get(1)).call(function(){_exportRoot.removeChild(target);_ifScreenLock=false;}) ;

}



function soundHandle() {
    if(_ifBgmPlay){
        _ifBgmPlay=false;
        _soundBtn.gotoAndStop(0)
        $('#bgm')[0].pause();
    }else{
        _ifBgmPlay=true;
        _soundBtn.gotoAndStop(1)
        $('#bgm')[0].play();
    }
}



function FlipHandle() {
    console.log("flip===")

    _flip.gotoAndPlay(1);
}

function ChangeHandle() {

    var t=_calendar.currentFrame+1

    if(t<5)
    {

    }
    else if(t==5)
    {
        console.log("auto===");
        autoFlip();
    }
    else if(t==10)
    {
        console.log("flip stop===");
        _flip2.gotoAndStop(0);
        createjs.Tween.get(_exportRoot).wait(500).call(showMsg2) ;
        _ifScreenLock=true;
    }
    else if(t>10)
    {
        console.log("go ending===");
        _ifScreenLock=true;
        showEnding();

    }
    //console.log("change===",t)
    if(t<=10)
    {
        _calendar.gotoAndStop(t)
    }

}


function autoFlip() {
    _ifScreenLock=true;
    _flip2= new lib.mc_filp_2();
    _flip2.x =0;
    _flip2.y =0;
    _exportRoot.addChild(_flip2);

}

function ActionHandle(f) {
   if(f=="left")
    {
            if(!_ifScreenLock)
            {

                FlipHandle();
            }
    }

}




function canvasScale() {
    /*
     * 初始化canvas高度，使其与当前屏幕大小一致。
     * */

    w = Util.DOMUtil.getSize().w//window宽度
    h = Util.DOMUtil.getSize().h//window高度
    //console.log("window=====",h)
    //console.log("canvas=====",w*_screenRatio)
    //Util.DOMUtil.getEl("canvas").height=h;
    $("#canvas").attr("height", h);

}


function bgScale() {
    /*
     * 场景元素初始化时自适应，如需底部对齐或者背景铺满请在此设置。
     * 可以在resize事件触发时加入此侦测，使元素始终可以自适应，但是安卓上在操作dom输入导致
     * 屏幕尺寸发生变化时会产生bug，所以不建议加入。
     * */

    _bg.scaleY = Util.DOMUtil.getSize().h / _orgHeight;

}



