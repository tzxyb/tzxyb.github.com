/* 2015 by gongxy */


/***** 全局参数 *****/
window.gv = {};
gv.ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
gv.weixin = !!navigator.userAgent.match(/MicroMessenger/i);
gv.width = $(window).width()>640?640:$(window).width();
gv.height = $(window).height();
gv.ratio = window.devicePixelRatio?window.devicePixelRatio:1;
gv.isTouch = window.ontouchstart===undefined ? false : true;
gv.evtDown = gv.isTouch?"touchstart":"mousedown";
gv.evtMove = gv.isTouch?"touchmove":"mousemove";
gv.evtUp = gv.isTouch?"touchend":"mouseup";
gv.evtClick = gv.isTouch?"tap":"click";


/***** 用户数据 *****/
window.user = {};
user.todayTicket=0; //用户今日领券金额
user.allTicket=0; //用户连续领券天数
user.overTicket=0; //券是否已领完
user.phone=0; //用户手机号



/***** 自定义tap事件 *****/
if(gv.isTouch){
	 $.event.special.tap = {
        setup: function () {
            $(this).on('touchstart.tap', function (e) {
                $(this).data('@touchstartTime', e.timeStamp);
            });
            $(this).on('touchmove.tap', function (e) {
                $(this).removeData('@touchstartTime');
            });
            $(this).on('touchend.tap', function (e) {
                if($(this).data('@touchstartTime') && e.timeStamp-$(this).data('@touchstartTime')<1000){
                	e.stopPropagation();
                	$(this).removeData('@touchstartTime');
                	var mytap=$.Event("tap");
                	mytap.touch=e.originalEvent.changedTouches[0];
                	$.event.trigger(mytap, null, e.target);
                } 
            });
        },
        teardown: function () {
            $.event.remove(this, 'tap');
            $.removeData(this, '@touchstartTime');
        }
    };
	$.fn.tap = function (callback) { // tap快捷方式
	        return this.on('tap', callback);
	};
}



/***** 显示和关闭规则 *****/
$(".rule a").on(gv.evtClick, function(){
	$(".rule").addClass('rule2');
})
$(".rule del").on(gv.evtClick, function(){
	$(".rule").transit({y:'100%'},300,function(){
		$(this).removeClass('rule2').attr('style', '');
	});
})

/***** 显示和关闭分享提示 *****/
$(".card dd a").eq(0).on(gv.evtClick, function(){
	$(".share").show();
})
$(".share").on(gv.evtClick, function(){
	$(".share").hide();
})

/***** 输入框闪烁及验证 *****/
$(".scene").on(gv.evtDown, function(e){
	if(!$(e.target).is('.phone input') && $('.phone input').is(':focus')){ 
		 $('.phone input').blur(); 
	}
})
$(".phone input").on('focus', function(){
	$(this).addClass('has');
	clearTimeout($(".time center a")[0].timer);
});
$(".phone input").on('blur', function(){
	if($(".handle a")[0].enabled){ return; }
	var phone=$.trim($(this).val());
	if(phone==''){
		$(".time .arrow").hide();
		$(".time center a")[0].enabled=false;
		$(this).removeClass('has');
	}else if(!phone.match(/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/)){
		$(".time .arrow").hide();
		$(".time center a")[0].enabled=false;
		alert('手机号有错误哦');
	}else{
		$(".time .arrow").show();
		$(".time center a")[0].enabled=true;
	}
});

/***** 选择时间段 *****/
$(".time center a").on(gv.evtDown, function(e){
	if(!this.enabled){ return;}
	clearTimeout(this.timer);
	this.evtY= gv.isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY;
});
$(".time center a").on(gv.evtMove, function(e){
	if(!this.enabled){ return;}
	var currY = gv.isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY;
	if(currY-this.evtY>15){
		this.evtY=currY;
		$(this).trigger('rolldown');
	}else if(currY-this.evtY<-15){
		this.evtY=currY;
		$(this).trigger('rollup');
	}
});
$(".time center a").on('rolldown rollup', function(e){
	var _this=this;
	var type= e.type=='rolldown' ? 1 : -1;
	this.enabled=false;
	clearTimeout(this.timer);
	gv.sound.roll.currentTime=0;
	gv.sound.roll.play();
	$(".time center p").transit({y: type*15+'%'}, 300, function(){
		$(this).css({y:0});
	});
	$(".time ul").transit({y: type*33.33+'%'}, 400, function(){
		type>0 ? $(this).prepend($(this).children(':last-child')) : $(this).append($(this).children(':first-child'));
		$(this).css({y:0});
		_this.enabled=true;
		_this.timer=setTimeout(function(){ //无操作1秒后确定选择
			_this.enabled=false;
			$(".time .arrow").hide();
			$(".handle .arrow").delay(60).show(0, function(){
				$(".handle a")[0].enabled=true;
			});
		},1000);
	});
})

/***** 拉动把手 *****/
$(".handle a").on(gv.evtDown, function(e){
	if(!this.enabled){ return;}
	this.evtY= gv.isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY;
	$(".handle .arrow").hide();
});
$(".handle a").on(gv.evtUp, function(e){
	if(!this.enabled){ return;}
	var currY = gv.isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY;
	currY-=this.evtY;
	if(currY<gv.width*0.2){
		this.enabled=false;
		$(".handle dt").transit({scale:[1, 1]}, 300);
		$(".handle dd").transit({y:0}, 300);
		$(".handle a")[0].enabled=true;
	}
})
$(".handle a").on(gv.evtMove, function(e){
	if(!this.enabled){ return;}
	var currY = gv.isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY;
	currY-=this.evtY;
	if(currY<0){
		currY=0;
	}else if(currY>gv.width*0.2){
		currY=gv.width*0.2;
	}
	$(".handle dd").css({y:currY});
	$(".handle dt").css({scale:[1, 1-currY/(gv.width*0.2)]});
	if(currY==gv.width*0.2){ //把手下拉到位
		this.enabled=false;
		gv.sound.pull.currentTime=0;
		gv.sound.pull.play();
		$(".handle dt").transit({scale:[1, 1]}, 300);
		$(".handle dd").transit({y:0}, 300, function(){
			$(".card").trigger('print');
			gv.sound.print.currentTime=0;
			gv.sound.print.play();
		});
		$(".card dl").hide(0, function(){ //设置打卡显示内容
			$(this).attr('style', '');
			$(this).children().attr('style', '');
			if(user.overTicket){ //券已领完
				$(".card dd figure").attr('class', 'type2');
			}else if(user.todayTicket==0){ //今日未领券
				$(".card dt figure").attr('class', 'type'+(Math.floor(Math.random()*14)+1));
				$(".card dt var").attr('class', 'type'+$(".time li").eq(1).attr('class').replace('time', ''));
			}else if(user.allTicket>=5){ //已连续5天领券
				$(".card dd figure").attr('class', 'type3');
			}else if(user.todayTicket>0){ //今日已领券
				$(".card dd figure").attr('class', 'type1');
			}
		});
	}
});

function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}

/***** 显示打卡结果 *****/
$(".card").on('print', function(){
	if(user.overTicket){ //券已领完
		$(".card dd").show();
	}else if(user.todayTicket==0){ //今日未领券
		$(".card dt").show();
		switch(parseInt($(".time li").eq(1).attr('class').replace('time', ''))){
			case 1: user.todayTicket=8; break;
			case 2: user.todayTicket=10; break;
			case 3: user.todayTicket=12; break;
			default: user.todayTicket=8; break;
		}
		user.allTicket+=1;
	}else if(user.allTicket>=5){ //已连续5天领券
		$(".card dd").show();
	}else if(user.todayTicket>0){ //今日已领券
		$(".card dd").show();
	}
	
		var numR='type'+rnd(1,14);
		$(".card dt figure").addClass(numR);
		
	if(user.todayTicket==8){
		$(".card dt var").removeClass();
		$(".card dt var").addClass("type1");
	}
	if(user.todayTicket==10){
		$(".card dt var").removeClass();
		$(".card dt var").addClass("type2");
	}
	if(user.todayTicket==12){
		$(".card dt var").removeClass();
		$(".card dt var").addClass("type3");
	}
	
	
	console.log(user.todayTicket)
	setTimeout(function(){ //消息滚动
		$(".msg dl").addClass('change');
	},3000);
	setTimeout(function(){ //重新开始
		$(".msg dl").append($(".msg dl").children(':first-child')).removeClass('change');
		$(".phone input").trigger('blur');
	},5000);
})


/***** 链接跳转 *****/
$(".card dt a").on(gv.evtClick, function(){
	//领用优惠券
	location.href="http://www.10101111.com/";
})
$(".card dd a").eq(1).on(gv.evtClick, function(){
	//下载APP
	location.href="http://www.10101111.com/";
})


/***** 开始 *****/
function appBegin(){
	
	//关闭assetloading，显示场景
	$(".assetloading").transit({opacity:0},300,function(){ 
		$(this).add(".asset").remove();
		$(".scene").css({display:'block', opacity:0}).transit({opacity:1}, 500, 'linear', function(){
			$(this).addClass('show').attr('style', '').height(gv.height);
			gv.sound.bg.play();
		});
	});
	
	//优化设置
	$(".phone input").val('');
	$(".time ul, .time center p").css({y:0});
	$(".handle dd").css({y:0});
	$(".handle dt").css({scale:[1,1]});
	
	//音频加载 
	gv.sound={};
	gv.sound.print=new Audio('sound/print.mp3');
	gv.sound.pull=new Audio('sound/pull.mp3');
	gv.sound.roll=new Audio('sound/roll.mp3');
	gv.sound.bg=new Audio('sound/bg.mp3');
	if(gv.weixin){
		wx.config({});
		wx.ready(function(){ 
			gv.sound.print.load();
			gv.sound.pull.load();
			gv.sound.roll.load();
			gv.sound.bg.load();
		});
		wx.error(function(){
			gv.sound.print.load();
			gv.sound.pull.load();
			gv.sound.roll.load();
			gv.sound.bg.load();
		});
	}else{
		gv.sound.print.load();
		gv.sound.pull.load();
		gv.sound.roll.load();
		gv.sound.bg.load();
	}
	

}





