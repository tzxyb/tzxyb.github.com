var audioTap = document.getElementById('audioTap');
var _lang = {
	zh: {
		title: "抓住那只南瓜",
		score: "lv.",
		lv_txt: ["脑残粉", "忠实粉", "路人粉", "慧眼识象牙", "火眼金睛", "洞察一切", "两眼冒光", "24k氪金眼", "已被亮瞎！"],
	}
},
_config = {
	lang: "zh",
	color: {
		allTime: 30,   //时间30秒
		addTime: 0,
		lvMap: [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9,10, 11, 12]
	}
},
shareData1 = {
}; !
function() {
	var a = _lang[_config.lang],
	b = $("#tpl").html(),
	c = _.template(b, a);
	$("#container").html(c);
} (),
function() {
	var a = $("#box"),
	b = {
		//lv: $("#room .lv span"),
		time: $("#room .time"),
		start: $(".btn_again"),
		back: $("#dialog .btn-back")
		},
	c = {
		init: function(a, b, c) {
			this.type = a,
			this.api = API[a],
			this.config = _config[a],
			this.reset(),
			this.parent = c,
			this.el = b,
			this.renderUI(),
			this.inited || this.initEvent(),
			this.inited = !0,
			this.start()
		},
		renderUI: function() {
			this.el.show()
		},
		initEvent: function() {
			var d = "ontouchstart" in document.documentElement ? "touchend": "click",
			e = this;
			$(window).resize(function() {
				c.renderUI()
			}),
			a.on(d, "img",
			function() {
				var a = $(this).data("type");
				"a" == a && e.nextLv.call(e);
			}),
			b.start.on(d, _.bind(this.start, this)),
			b.back.on(d, _.bind(this.back, this));
		},
		start: function() {
			$(".slide2").addClass("active").fadeIn();
		    $(".slide3").removeClass("active").fadeOut();
			/*var  a = $(this).attr("class");
			alert(a);
			if(a=="btn_again"){
				audioTap.play() ;
			}*/
			this._pause = !1,
			this.lv = "undefined" != typeof this.lv ? this.lv + 1 : 0,
			this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap),
			this.renderMap(),
			this.renderInfo(),
			this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1e3));
		},
		tick: function() {
			var timerr=(100/this.config.allTime)*(this.time-1);
			timer2=timerr+"%";
			return this._pause ? void 0 : (this.time--, this.time < 0 ? void this.gameOver() : void b.time.css({"background":"url(images/timeLine.png) no-repeat","background-size":""+timer2+" 100%"}), $(".timebg span").text(parseInt(this.time))/*剩余时间*/)
		},
		renderMap: function() {
			if (!this._pause) {
				var b = this.lvMap * this.lvMap,
				c = "",
				d = "lv" + this.lvMap;
				_(b).times(function() {
					c += "<img></img>"
				}),
				a.attr("class", d).html(c),
				this.api.render(this.lvMap, this.lv)
			}
		},
		renderInfo: function() {
			//b.lv.text(this.lv + 1)
		},
		gameOver: function() {
			var Rankstr = "";
			var d = this.api.getGameOverText(this.lv);
			dp_submitScore(this.lv,d.lv);
			//this.lastLv = this.lv,
			//this.lastGameTxt = d.txt,
			//this.lastGamePercent = d.percent,
			//b.d_gameover.show().find("h3").text(this.lastGameTxt),
			
			this._pause = !0,
			//_hmt.push(["_trackEvent", "score", "score_" + (this.lv + 1)]),
			this.reset()
		},
		reset: function() {
			this.time = this.config.allTime,
			this.lv = -1
		},
		nextLv: function() {
			this.time += this.config.addTime,
			//b.time.text(parseInt(this.time)),
			this._pause || this.start()
		},
		back: function() {
			this._pause = !0,
			this.el.hide(),
			this.parent.render()
		}
	};
	window.Game = c
} (),
function(a) {
	var b = {
		index: $("#index"),
		room: $("#room"),
		loading: $("#loading"),
		play: $(".btn_find")
	},
	c = window.navigator.userAgent.toLowerCase(),
	d = /android/i.test(c),
	e = /iphone|ipad|ipod/i.test(c),
	f = {
		init: function() {
			this.initEvent(),
			f.render();
			var h = _lang[_config.lang];
		},
		render: function() {
			setTimeout(function() {
				b.loading.hide(),
				b.index.show()
			},
			1e3)
		},
		initEvent: function() {
			var a = "ontouchstart" in document.documentElement ? "touchstart": "click",
			c = this;
			b.play.on(a,
			function() {
				audioTap.play();
				var a = $(this).data("type") || "color";
				$(".slide2").addClass("active").fadeIn();
		        $(".slide1").removeClass("active").fadeOut();
				Game.init(a, b.room, c);
				$(".timebg").show();
				$(this).hide();
			})
		}
	};
	f.init(),
	a.API = {}
} (window),
function() {
	var a = $("#box"),
	b = "img",
	c = $("#help p"),
	d = $("#help_color"),
	e = {
		lvT: _lang[_config.lang].lv_txt,
		render: function(e, f) {
			this.lv = f,
			c.hide(),
			d.show();
			var g = _config.color.lvMap[f] || _.last(_config.color.lvMap);
			this.d = 15 * Math.max(9 - g, 1),
			this.d = f > 20 ? 10 : this.d,
			this.d = f > 40 ? 8 : this.d,
			this.d = f > 50 ? 5 : this.d;
			var h = Math.floor(Math.random() * e * e);
			var size = a.find(b).height() * 0.96;
			 a.find(b).data("type", "b").attr({"src": "images/pkNG.png"}), a.find(b).eq(h).data("type", "a").attr({"src": "images/pkSZ.png"});
		},
		getGameOverText: function(a) {
			var b = 20 > a ? 0 : Math.ceil((a - 20) / 10),
			c = this.lvT[b] || _.last(this.lvT),
			d = c + "lv" + (a + 1),
			e = a;
			return e = 20 > e ? 2 * a: 30 > a ? 3 * (a - 20) + 40 : 40 > a ? 1.5 * (a - 30) + 70 : 50 > a ? 1.35 * (a - 40) + 85 : 60 > a ? .05 * (a - 50) + 98.5 : 70 > a ? .02 * (a - 60) + 99 : 80 > a ? .02 * (a - 70) + 99.2 : 90 > a ? .02 * (a - 80) + 99.4 : 100 > a ? .02 * (a - 90) + 99.6 : 110 > a ? .02 * (a - 100) + 99.8 : 100,
			e = ("" + e).length > 5 ? e.toFixed(2) : e,
			{
				txt: d,
				percent: e,
				lv:c
			}
		}
	};
	API.color = e
} ();
var myData = {gameid: "xyc"};
function dp_submitScore(score) {
                myData.score = parseInt(score);
                  alert("我找到" + score + "个神州专车南瓜灯");
				  //alert("游戏结束");	
				  $(".slide3").addClass("active").fadeIn();
		          $(".slide2").removeClass("active").fadeOut();	
				  $(".slide3 .pkUp").css({"top":"42.5%"});
				  $(".slide3 .pkDown").css({"top":"48%"});
				  $(".btn_sub, .telinput, .succes, .sucText").fadeIn();
				  $(".quanbg").fadeOut();
				  $(".sucText").html(score);
            }