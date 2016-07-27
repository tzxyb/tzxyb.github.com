// JavaScript Document
jQuery(document).ready(function($) {
	//获取文本框值
	$(".t_val").focus(function() {
		var txt_value = $(this).val();
		if (txt_value == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		var txt_value = $(this).val();
		if (txt_value == "") {
			$(this).val(this.defaultValue).css({
				color: '#999'
			});
		}
	}).keydown(function() {
		var txt_value = $(this).val();
		if (txt_value == this.defaultValue) {
			$(this).css({
				color: '#999'
			});
		} else {
			$(this).css({
				color: '#333'
			});
		}
	});

	//select模拟效果
	$(".zc_selectjs").each(function() {
		var s = $(this);
		var z = parseInt(886);
		var input = $(this).find("dt input");
		var dd = $(this).children("dd");
		var _show = function() {
			dd.slideDown(200);
			input.addClass("cur");
			s.css("z-index", z + 1);
		}; //展开效果
		var _hide = function() {
			dd.slideUp(200);
			input.removeClass("cur");
			s.css("z-index", z);
		}; //关闭效果
		input.click(function() {
			dd.is(":hidden") ? _show() : _hide();
		});
		dd.find("a").click(function() {
			input.val($(this).html());
			_hide();
		}); //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$(document).click(function(i) { ! $(i.target).parents(".zc_selectjs").first().is(s) ? _hide() : "";
		});
	});
	//鼠标划过效果
	$(".a_hoverdelay").each(function(){
		var that = $(this);
		var left = $(this).position().left;
		var tops = $(this).position().top;
		var h = $(this).outerHeight();
		var w = $(this).next().outerWidth()-$(this).outerWidth();
		that.hoverDelay({
			outDuring: 500,
			hoverEvent: function(){
				$(this).children('div.a_hover_box').show().css({left: (left), top: (tops + h) });      
			},
			outEvent: function(){
				$(this).children('div.a_hover_box').hide('slow');
			}
		});
	});
	/* 标签页切换 */
	$('.tabs li').each(function(i){
		$(this).click(function(){
			$('.tabs li').removeClass('cur').eq(i).addClass('cur');
			$('.tabcontents').removeClass('cur').eq(i).addClass('cur');
		});
	});
});