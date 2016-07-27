(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer, that = this;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(function(){sets.hoverEvent.apply(that)}, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(function(){sets.outEvent.apply(that)}, sets.outDuring);
            });
        });
    };
    $(".menu li.ahover").each(function(){
        var that = $(this);
        that.hoverDelay({
            outDuring: 500,
            hoverEvent: function(){
                that.addClass("acur");
                that.find(".hoverbox").show();
            },
            outEvent: function(){
                that.removeClass("acur");
                that.find(".hoverbox").hide();
            }
        });
    });
    function stopPropagation(e) {
        e = e || window.e;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    }
    $("#ucarsearch").on('click',function(e){
        stopPropagation(e);
        $("#header").addClass("searchshow");
        function attrshow(){
            $(".searchshow").attr("class","searchopen");
            $("#ac-gn-searchresults").show();
        }
        setTimeout(function(){
            attrshow();
        },500);

    });
    $("#ac-gn-searchview-close").on('click',function(){
        $("#header").removeClass("searchopen");
        function addhide(){
            $("#header").addClass("searchhide");
        }
        function removehide(){
            $("#header").removeClass("searchhide");
            $("#ac-gn-searchresults").hide();
        }
        setTimeout(function(){
            addhide();
        },1);
        setTimeout(function(){
            removehide();
        },500);
    });
    $("#ac-gn-searchresults li a").click(function(){
        $("#header").removeClass("searchopen");
        $("#ac-gn-searchresults").hide();
    });
})(jQuery);
