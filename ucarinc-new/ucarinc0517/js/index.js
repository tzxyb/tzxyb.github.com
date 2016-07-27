$(function(){
    /*var animateBlock= {
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
    }*//*var animateBlock= {
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

    //banner
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
    function stopPropagation(e) {
        e = e || window.e;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    }
    $(".ac-gn-searchform-wrapper").click(function(e){
        stopPropagation(e);
        $("#ac-gn-searchresults").show();
    });
    $(document).bind('click',function(){
        $("#ac-gn-searchresults").hide();
    });
    $(window).scroll(function(){
        //var distanceTop = $('#execute').offset().top - $(window).height();
        //alert(distanceTop);
        if  ($(window).scrollTop() > 790){
            //$('#glory-list').animate({'right':'0px'},300);
            //$('.glory-list').hide();
            $('.glory-list dd.g-l-o').delay(600).animate({'left':'0px','opacity':'1'}, 600);
            $('.glory-list dd.g-l-t').delay(450).animate({'right':'0px','opacity':'1'}, 600);
            $('.glory-list dd.g-l-th').delay(300).animate({'left':'0px','opacity':'1'}, 600);
            $('.glory-list dd.g-l-fo').delay(150).animate({'right':'0px','opacity':'1'}, 600);
            $('.glory-list dd.g-l-fi').delay(0).animate({'left':'0px','opacity':'1'}, 600);
            $('.history-list dd.h-l-o').delay(900).animate({'opacity':'1'}, 2000);
            $('.history-list dd.h-l-t').delay(600).animate({'opacity':'1'}, 2000);
            $('.history-list dd.h-l-th').delay(300).animate({'opacity':'1'}, 2000);
            $('.history-list dd.h-l-fo').delay(0).animate({'opacity':'1'}, 2000);
        }
    });
})