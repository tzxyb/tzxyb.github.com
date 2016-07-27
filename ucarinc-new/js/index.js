$(function(){
   /* var animateBlock= {
        isVisiable: function (el, wh, st, delta) {
            delta = delta || 160;
            //console.log($(el).offset().top,wh,st,delta)
            return $(el).offset().top < wh + st - delta;
        },
        animations: {
            band: function (wh, st) {
                return;
                var $el = $("#band");
                if (animateBlock.isVisiable($el, wh, st)) {
                    //background:time:0-500.o
                    //text:time:500-733.o.p:10px;
                    //menu:time:633-900.o.p:-10px;
                    $("#js-band-bg").animate({opacity: 1}, 500);
                    $("#js-band-text").delay(500).animate({bottom: "9%", opacity: 1}, 233);
                    $("#js-header").delay(633).animate({top: 0, opacity: 1}, 267);
                    delete animateBlock.animations.band;
                }
            },
            character: function (wh, st) {
                var $el = $("#characters");
                if (animateBlock.isVisiable($el, wh, st)) {
                    $el.find(".char-icon1").animate({top: 50, opacity: 1}, 333);
                    $el.find(".char-icon2").delay(200).animate({top: 50, opacity: 1}, 533);
                    $el.find(".char-icon3").delay(400).animate({top: 50, opacity: 1}, 733);

                    delete animateBlock.animations.character;
                }
            },
            intro1: function (wh, st) {
                var $el = $("#intro1");
                if (animateBlock.isVisiable($el, wh, st)) {
                    //console.log("trigger intro1 animate");
                    $el.find(".intro1-video").animate({
                        "bottom": 0,
                        opacity: 1
                    }, 500);
                    $el.find(".intro1-text").delay(167).animate({opacity: 1}, 500);
                    $el.find(".intro1-star").delay(333).animate({opacity: 1}, 333);
                    delete animateBlock.animations.intro1;
                }
            }
        }
    }
    $(window).on("scroll",function(){
        var animations,
            name,
            winHeight=$(window).height(),
            scrollTop=$(window).scrollTop();

        animations=animateBlock.animations;
        for(name in animations){
            animations[name](winHeight,scrollTop);
        }
    });
    if($(window).height()>500){
        $(window).trigger("scroll");
    }
    // 默认滚动，触发动画检测
    $(window).trigger('scroll');*/
})