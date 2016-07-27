

var queue = new createjs.LoadQueue(false);


createjs.Sound.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin]);
createjs.Sound.alternateExtensions = ["mp3"];
queue.installPlugin(createjs.Sound);

function load() {
    var _main = $("#Jm_loding");
    var el = {};
    el.hours = _main.find(".J_hours");
    el.minutes = _main.find(".J_minutes");
    //queue.installPlugin(createjs.Sound);
    queue.on("loadstart", handLoadstart, this); //文件加载开始
    queue.on("complete", handleComplete, this); //所有文件加载完成触发
    queue.on("progress", handleProgress, this); //加载进度
    queue.on("fileload", handleFileLoad, this); //每当一个文件加载完成触发
    queue.setMaxConnections(20); //最大加载线程
    //queue.on("error", handleFileError, this); //加载出现错误的时候
    var manifest = {
        "path": "images/",
        "manifest": ["bg.jpg","btn_1_1.png","btn_1_2.png","btn_1_3.png","btn_1_4.png","btn_1_5.png","btn_2_1.png","btn_2_2.png","btn_2_3.png","btn_2_4.png","l5m_sm_1_1.png","l5m_sm_1_2.png","l5m_sm_1_3.png","l5m_sm_2.png","l6m_sm_1.png","l6m_sm_2.png","l6m_sm_3.png","l6m_sm_4.png","l6m_sm_5.png","l7m_bg.jpg","l8m_sm_1.png","l9m_sm_1.png","l10m_bg.png","sm_1_1.png","sm_1_2.png","sm_1_3.png","sm_1_4.png","sm_1_5.png","video0bg.jpg","video1bg.jpg","video2bg.jpg","video3bg.jpg","video4bg.jpg","video5bg.jpg","Alarm3.mp3"]
    };
    queue.loadManifest(manifest);
    //.loadManifest("images/");
    //queue.load();
    function handLoadstart() {
        console.log("开始加载");
    }
    function handleComplete() {
        console.log("加载完成");
        $.get("home.html", function (html) {
            // $("#J_loding").remove();
           // $("#main-container").show();
            $("#main-container").append(html);
             $("#main-container").show();
            main();
        });
    }
    function handleProgress() {
        var num = (queue.progress * 100 + 20) / 2;
        num = parseInt(num);
        if (num < 10) {
            el.minutes.html("0" + num);
        } else {
            el.minutes.html(num);
        }
        if (num > 59) {
            el.hours.html("6");
            el.minutes.html("00");
        }
        //el.minutes.html(parseInt(queue.progress * 100))
        // loadfileNum = parseInt(queue.progress * 100);
        // $(".J_loding_num").html(loadfileNum + "%");
    }
    function handleFileLoad(event) {
        //    var item = event.item;
        //    var type = item.type;
        //    if (type == createjs.LoadQueue.IMAGE) {
        //        document.body.appendChild(event.result);
        //    }
        //console.log(1)
    }
    // mtPage.loding();
}