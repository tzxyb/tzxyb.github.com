var canvas, stage, exportRoot,loader,loading;

var LOAD_PART = 1;
var MAX_PART = 2;

var currPage = 1;
var way = 0;
var prvMc,nextMc;

var loadArray = new Array();

var imgUrl = "images/";
var jsUrl = "js/";
var soundUrl = "sounds/";

//// 是否服务器
var isServer = false;

var isPC = false;

var isAndroid = false;
var isIOS = false;
var bgSound;

var newPart;

var currPage = 1;
var backIndex = 1;
var loadArray = new Array();
var partArray = new Array();


function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return "";
}


var runInit = false;

var isPause = false;

function layout(){
    var winW,winH;
    winW = window.innerWidth ;
    winH = window.innerHeight;

    // console.log(winW,winH);
    //return;

    if(winW > winH)
    {
        //alert('为达到最佳浏览效果，请锁屏横屏观看');
        canvas.width = 1138;
        canvas.height = 551;
        var body_width = document.documentElement.clientWidth;
        var get_scale = (body_width)/1138;
        // console.log(get_scale);
        var get_content = "width=device-width, initial-scale="+get_scale+", minimum-scale="+get_scale+", maximum-scale="+get_scale + ", user-scalable=no";
        //document.getElementById("viewport").setAttribute('content',get_content);
        // alert(get_scale);
        //stage.update();

        document.getElementById("bbgImg").style.display = "block";
        isPause = true;

    }else{
        canvas.width = 640;
        canvas.height = 1030;
        var body_width = document.documentElement.clientWidth;
        var get_scale = (body_width)/640;
        var get_content = "width=device-width, initial-scale="+get_scale+", minimum-scale="+get_scale+", maximum-scale="+get_scale + ", user-scalable=no";
        // document.getElementById("viewport").setAttribute('content',get_content);

        //stage.update();
        // alert(get_scale);
        document.getElementById("bbgImg").style.display = "none";
        isPause = false;
    }

}

//判断手机横竖屏状态：
function hengshuping(){
    if(window.orientation==180||window.orientation==0){
        //alert("竖屏状态！")
        canvas.width = 640;
        canvas.height = 1030;
        var body_width = document.documentElement.clientWidth;
        var get_scale = (body_width)/640;
        var get_content = "width=device-width, initial-scale="+get_scale+", minimum-scale="+get_scale+", maximum-scale="+get_scale + ", user-scalable=no";
        // document.getElementById("viewport").setAttribute('content',get_content);

        document.getElementById("bbgImg").style.display = "none";
        //stage.update();
        // alert(get_scale);

        isPause = false;
    }
    if(window.orientation==90||window.orientation==-90){
        // alert("横屏状态！")
        canvas.width = 1138;
        canvas.height = 551;
        var body_width = document.documentElement.clientWidth;
        var get_scale = (body_width)/1138;
        // console.log(get_scale);
        var get_content = "width=device-width, initial-scale="+get_scale+", minimum-scale="+get_scale+", maximum-scale="+get_scale + ", user-scalable=no";
        //document.getElementById("viewport").setAttribute('content',get_content);
        // alert(get_scale);
        //stage.update();
        document.getElementById("bbgImg").style.display = "block";
        isPause = true;
    }
}

function init() {
    //alert("init");
    if(runInit)
    {
        return;
    }



    runInit = true;
    var typeId = getQueryString("id");

    if(typeId !=null || typeId !="")
    {
        //isGame = true;
        //playTime = 2;
        ///*
        currPage = Math.max(1,Number(typeId));




        if(currPage == MAX_PART)
        {
            backIndex = 1;
        }else{
            backIndex = Math.min(currPage + 1,MAX_PART);
        }


        if(Number(typeId == 7))
        {
            currPage = 7;
            backIndex = 7;
            MAX_PART = 1;
        }
       // */
      //  currPage = 1;
       // backIndex = 2;
    }else{
        currPage = 1;
        backIndex = 2;
    }

    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};
    stage = new createjs.Stage(canvas);


    createjs.Touch.enable(stage);
    stage.enableMouseOver();
    createjs.Ticker.setFPS(25);
    createjs.Ticker.addEventListener("tick", onTick);
    //stage.y = (window.innerHeight - canvas.height) * .5 ;
    if(isServer)
    {
        imgUrl = "Public/Home/images/";
        jsUrl = "Public/Home/js/";
        soundUrl = "Public/Home/sounds/";
    }

    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        isAndroid = true;
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        isIOS = true;
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }else{
        isPC = true;
        window.location.href = "index_pc.html";
    }

    createLoading();

    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

    window.onresize = layout;

    layout();


}

function sortArray()
{
   // ideaArray.sort(function(){ return 0.5 - Math.random() });
}

var gameMc;


var typeIndex;
var krpano;
var winIndex;

function initGame(mc)
{
    gameMc = mc;



    window.document.getElementById("img").className = "img2";

    gameMc.type_mc.gotoAndStop(typeIndex-1);
    gameMc.type_mc.getChildAt(0).gotoAndStop(0);
    gameMc.time_mc.mm.gotoAndStop(1);
    gameMc.time_mc.ss.gotoAndStop(5);
    gameMc.time_mc.visible = true;



    window.document.getElementById("pano").style.display = "block";

    krpano = document.getElementById("krpanoSWFObject");


    krpano.call("set(plugin[skin_gyro].enabled,true)");
    krpano.call("set(hotspot[eye1].visible,false)");
    krpano.call("set(hotspot[eye2].visible,false)");
    krpano.call("set(hotspot[eye3].visible,false)");

    krpano.call("set(view.hlookat,0)");
    krpano.call("set(view.vlookat,0)");


    if(typeIndex == 2)
    {
        winIndex = Math.ceil(Math.random()*3);


        krpano.call("set(hotspot[eye"+ winIndex +"].visible,true)");
    }

    //alert(winIndex);
    //winIndex = 2;


    var currTime = new Date();
    startTime = currTime.getTime();

    isEnd = false;


}

function endGame()
{
    isEnd = true;
    window.document.getElementById("img").className = "img";
    //window.document.getElementById("pano").style.display = "none";
    krpano.call("set(plugin[skin_gyro].enabled,false)");
    gameMc.type_mc.getChildAt(0).gotoAndStop(1);

    try {
        endShare();
    }catch(e){}
}

function winGame()
{
    isEnd = true;
    window.document.getElementById("img").className = "img";
    krpano.call("set(plugin[skin_gyro].enabled,false)");
    gameMc.type_mc.getChildAt(0).gotoAndStop(2);



    try {

        winShare(endTime);
    }catch(e){}
}

var TOTLE_TIME = 15;
var gameMc;
var total = 0;
var isEnd = true;
var startTime;



function playEndSound()
{
    createjs.Sound.play("mySound");
}

function test(p1,p2,p3)
{
    //krpano.trace(1, "lookat=" + krpano.view.hlookat + " / " + krpano.view.vlookat);
    alert(p1 + ":" + p2 + "/" + p3);

}



function onTick(e)
{

    stage.update();

    if(isEnd)
    {
        return;
    }

    var currTime = new Date();
    var leftTime = TOTLE_TIME - Math.floor((currTime.getTime() - startTime)/1000);


    var strTime = leftTime.toString();
    //console.log(Math.floor(krpano.get("view.hlookat")),Math.floor(krpano.get("view.vlookat")));
    //return;

    if(typeIndex == 2)
    {
        if(winIndex == 1)
        {
            if((krpano.get("view.hlookat")%360>=60 && krpano.get("view.hlookat")%360 <= 120 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25) || (krpano.get("view.hlookat")%360>=-300 && krpano.get("view.hlookat")%360 <= -240 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25))
            {
                isEnd = true;
                endTime = TOTLE_TIME-Math.ceil(leftTime);
                winGame();
            }
        }else if(winIndex == 3)
        {
            if((krpano.get("view.hlookat")%360>=-185 && krpano.get("view.hlookat")%360 <= -125 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25) || (krpano.get("view.hlookat")%360>=175 && krpano.get("view.hlookat")%360 <= 235 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25))
            {
                isEnd = true;
                endTime = TOTLE_TIME-Math.ceil(leftTime);
                winGame();
            }
        }else if(winIndex == 2)
        {
            if((krpano.get("view.hlookat")%360>=130 && krpano.get("view.hlookat")%360 <= 190 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25) || (krpano.get("view.hlookat")%360>=-230 && krpano.get("view.hlookat")%360 <= -170 && krpano.get("view.vlookat") >= 7 && krpano.get("view.vlookat") <= 25))
            {
                isEnd = true;
                endTime = TOTLE_TIME-Math.ceil(leftTime);
                winGame();
            }
        }




    }





    if(leftTime >= 10)
    {
        gameMc.time_mc.mm.gotoAndStop(strTime.substr(0,1));
        gameMc.time_mc.ss.gotoAndStop(strTime.substr(1,1));
    }else{
        gameMc.time_mc.mm.gotoAndStop(0);
        gameMc.time_mc.ss.gotoAndStop(strTime.substr(0,1));
    }


    if(leftTime == 0)
    {
        isEnd = true;

       // krpano.call("getHV");

        endGame();
    }

}

function createLoading()
{
    loader = new createjs.LoadQueue(false);
    ss = ss||{};

    loader.loadFile({src:imgUrl + "loading_atlas_.png", type:"spritesheet", id:"loading_atlas_"}, true);
    loader.loadFile({src:imgUrl + "loadBg.jpg", type:"image"}, true);
    loader.addEventListener("complete", handleCompleteLoading);
    loader.loadManifest(lib.properties.manifest);
    for(var i in lib.properties.manifest)
    {
        for(var j in lib.properties.manifest[i])
        {
           // alert(lib.properties.manifest[i][j])
        }

    }
}



function handleCompleteLoading(evt) {
    var queue = evt.target;

    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    //console.log(queue)
   // ss["loading_atlas_"] = queue.getResult("loading_atlas_");
    exportRoot = new lib.loading();
    loading = exportRoot.loading_mc;
    //exportRoot.arr_mc.visible = false;
    //exportRoot.y = (window.innerHeight - canvas.height) * .5 ;
    newPart = new createjs.Container();

    exportRoot.addChild(newPart,exportRoot.loading_mc);

    stage.addChild(exportRoot);

    //stage.y = (window.innerHeight - canvas.height) * .5 ;


    stage.update();

    loadPage(currPage);

    //setTimeout(showShare,2000);

}


var showBackLoading = false;
function loadPage(num)
{
    currPage = num;


    if(loadArray.indexOf(currPage) == -1) {


        if(currPage == 1)
        {
            loading.visible = true;
            loading.alpha = 0;
            createjs.Tween.get(loading)
                .to({alpha: 1}, 1000, createjs.Ease.quintOut);
            //.call(handleComplete);

            stage.addChild(loading);

            if(currPage == backIndex)
            {
                //loading.num_txt.text = backPer + "%";
                //loading.num_mc.gotoAndStop(backPer);
                showBackLoading = true;

                return;
            }
        }

        showBackLoading = false;

        //alert("load");
        loader = new createjs.LoadQueue(true);
        ss = ss||{};
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", onPageLoad);


        loader.loadFile({id:"js" + currPage, src:jsUrl + "p" + currPage + ".js", type:"javascript"},true);

        //loader.loadManifest(lib.properties.manifest);
        if(currPage == 1)
        {
            loader.loadFile({src:imgUrl + "p1_1.jpg"}, true);
            loader.loadFile({src:imgUrl + "p1_2.jpg"}, true);
        }


        loader.loadFile({src:imgUrl + "p" + currPage + "_atlas_.png",id:"p" + currPage + "_atlas_"}, true);




        //loader.loadFile({id:"shareVoice", src:"sounds/20160709210312169_3.mp3"}, true);


        loader.addEventListener('progress', onPreloadProgress);
        loadArray.push(currPage);


    }else{

        loading.visible = false;

        if(newPart.numChildren != 0)
        {
            newPart.removeChildAt(0);
        }

        newPart.addChild(partArray[currPage]);

        if(currPage == 1)
        {
            window.document.getElementById("pano").style.display = "none";
            krpano.call("lookto(0,0,120);");

            try {
                firstShare();
            }catch(e){}

            partArray[currPage].getChildAt(0).gotoAndPlay(46);
        }else{
            try{
                partArray[currPage].getChildAt(0).gotoAndPlay(0);
            }catch(e){}
        }

    }



}

function hideLoading()
{
    createjs.Tween.get(loading)
        .to({alpha: 0}, 500, createjs.Ease.quintOut)
        .call(handleComplete);

    function handleComplete() {
        //Tween complete
        loading.visible = false;

        //console.log(2222);
    }
    //console.log("hideLoading");
}

function showLoading()
{
    loading.visible = true;
    loading.alpha = 0;
    createjs.Tween.get(loading)
        .to({alpha: 1}, 500, createjs.Ease.quintOut);

    stage.addChild(loading);
    //console.log("hideLoading");
}

var isSound = true;
function playSound(id, loop) {
    //console.log(id);
    if(isAndroid )
    {
      // return;
    }


    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}


var backLoader;
function backLoading()
{

    backLoader = new createjs.LoadQueue(false);
    backLoader.installPlugin(createjs.Sound);
    backLoader.addEventListener("fileload", handleFileLoad);
    backLoader.addEventListener("complete", onBackLoad);
    backLoader.addEventListener('progress', onPreloadProgress2);

    //if(!isAndroid)
    //{
    //  backLoader.loadFile({src:"sounds/p" + backIndex  + "yinyue.mp3", id:"p" + backIndex  + "yinyue"}, true);


    //if(backLoader != 1 && backLoader != 5)
    // {
    //   backLoader.loadFile({src:"sounds/s" + backIndex  + ".mp3", id:"s" + backIndex }, true);
    //}
    //}

    backLoader.loadFile({src:imgUrl + "p" + backIndex + "_atlas_.png", id:"p" + backIndex + "_atlas_"}, true);

    backLoader.loadFile({id:"js", src: jsUrl + "p" + backIndex + ".js", type:"javascript"},true);




    //loader.loadManifest(lib.properties.manifest);

}

function onBackLoad(evt)
{
    var queue = evt.target;

   // console.log(backIndex);

   // ss["p" + backIndex +  "_atlas_"] = queue.getResult("p" + backIndex +  "_atlas_");

    var ssMetadata = ssAraay[backIndex]
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }

    partArray[backIndex] = new lib["p" + backIndex]();

    if(loadArray.indexOf(backIndex) == -1) {
        loadArray.push(backIndex);
    }

    if(showBackLoading)
    {
        createjs.Tween.get(loading)
            .to({alpha:0},100,createjs.Ease.quintOut)
            .call(handleComplete);

        function handleComplete() {
            //Tween complete
            loading.visible = false;
            //console.log(3333);
        }

        loadPage(backIndex);
        showBackLoading = false;
    }

    //console.log("backIndex",backIndex,"       loaded");

    backIndex ++;

    if(backIndex > MAX_PART)
    {
        backIndex = 1;
    }
    // backLoading();


    if(loadArray.length < MAX_PART)
    {
        backLoading();
    }
}



function onPreloadProgress(e) {


   // loading.num_txt.text =  Math.floor(e.progress * 100)  + "%";
    //loading.num_mc.gotoAndStop(Math.floor(e.progress * 100));
    //console.log( Math.floor(e.progress * 100)  + "%");
    stage.update();
}

var backPer;
function onPreloadProgress2(e) {

    if(showBackLoading)
    {
        //loading.num_txt.text =  Math.floor(e.progress * 100)  + "%";
        //loading.num_mc.gotoAndStop(Math.floor(e.progress * 100));
        stage.update();
    }else{
        backPer = Math.floor(e.progress * 100);
    }
}



function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

var isFirst = true;

var ssAraay = [];

ssAraay[1] = [
    {name:"p1_atlas_", frames: [[727,646,173,37],[806,701,175,36],[455,1392,473,100],[712,849,107,28],[833,194,184,182],[841,0,170,175],[833,378,169,174],[455,1032,435,358],[0,0,640,1030],[883,821,115,37],[642,646,83,85],[642,819,68,68],[642,0,197,192],[642,194,189,200],[883,739,74,80],[727,685,77,83],[806,739,75,82],[642,733,74,84],[718,770,70,77],[642,554,263,50],[642,606,221,38],[0,1032,453,421],[642,396,159,142],[841,177,18,8],[965,554,40,18],[803,396,25,16],[907,554,56,145]]}
];

ssAraay[2] = [
    {name:"p2_atlas_", frames: [[646,1032,597,251],[1662,1378,252,65],[587,1285,598,129],[1515,1484,453,53],[1996,790,33,48],[1996,691,34,48],[0,0,644,1034],[2019,0,19,47],[1996,493,36,47],[1996,443,36,48],[1996,592,35,47],[1996,542,35,48],[1996,641,34,48],[1996,741,34,47],[1996,393,36,48],[0,1430,473,93],[1187,1378,473,104],[1062,1484,451,77],[587,1416,473,103],[646,0,640,1030],[1288,0,640,1030],[1245,1032,614,213],[1861,1032,157,100],[1996,0,21,391],[1245,1247,598,129],[1930,0,64,873],[0,1245,585,183],[0,1036,609,207]]}
];





function onPageLoad(evt)
{
    /*
     createjs.Tween.get(loading)
     .to({alpha:0},100,createjs.Ease.quintOut)
     .call(handleComplete);

     function handleComplete() {
     //Tween complete
     loading.visible = false;
     }
     */

        createjs.Tween.get(loading)
            .to({alpha:0},100,createjs.Ease.quintOut)
            .call(handleComplete);

        function handleComplete() {
            //Tween complete
            loading.visible = false;
            if(currPage != 2)
            {
                //loading.visible = false;
                //console.log(4444);
            }else{
               // loading.alpha = 1;
               // loading.visible = true;
            }
        }



    if(loadArray.indexOf(currPage) == -1) {
        loadArray.push(currPage);
    }

    var queue = evt.target;


    var ssMetadata = ssAraay[currPage]
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }


   // ss["p" + currPage +  "_atlas_"] = queue.getResult("p" + currPage +  "_atlas_");


    partArray[currPage] = new lib["p" + currPage]();

    if(newPart.numChildren != 0)
    {
        newPart.removeChildAt(0);
    }

    if(isFirst)
    {
        backLoading();
       // var bg = new createjs.Bitmap(queue.getResult("bg"));
        //stage.addChild(bg,exportRoot);
    }
    isFirst = false;

    newPart.addChild(partArray[currPage]);

    try{
        partArray[currPage].getChildAt(0).gotoAndPlay(0);
    }catch(e){}
    stage.update();

}

function loadPic(mc,url)
{

    var bg = new createjs.Bitmap(imgUrl + url);
    mc.addChild(bg);
}


function showShare()
{
    //$(".img").style.display = "none";
    document.getElementById("tb").style.display = "none";

    document.getElementById("ewm").style.display = "none";
    //exportRoot.share_mc.gotoAndPlay(1);
    //document.getElementById("ewm").style.display = "block";
}

function closeShare()
{
    document.getElementById("tb").style.display = "block";
    document.getElementById("ewm").style.display = "block";
    //document.getElementById("ewm").style.display = "none";
}




function resizeMc(mc)
{
    //console.log(mc.y);
    mc.y = 568;
    mc.y = 568 + (window.innerHeight - canvas.height) * .5 ;
}


function toBtm(mc)
{

    if(isAndroid)
    {
        if(window.innerHeight < 1030)
        {
            mc.y += (window.innerHeight - 1030) ;
        }

        //mc.y -= 60;
    }else{
        if(window.innerHeight < 1030)
        {
            mc.y += (window.innerHeight - 1030) ;
        }
    }


   // mc.y = 50;
}


function showShare2()
{
    partArray[8].getChildAt(0).gotoAndStop("share");
}



