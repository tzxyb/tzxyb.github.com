笔记
===========================================
响应式
	目标：一套页面，在多个设备上使用。
	媒体查询
touch
	移动端事件 		需要事件绑定
		touchstart 		
			ev.targetTouches[0].pageX/Y
		touchmove
			ev.targetTouches[0].pageX/Y
		touchend
			ev.changedTouches[0].pageX/Y

============================================
方向锁定
 		模拟手机新闻
 			先分开做
 					上下
 					左右
 			判断方向执行相应代码
============================================
移动端手势 		
	单点旋转
	多点旋转
	多点平移
	多点缩放

已知a边和b变求c变？
	c = Math.sqrt(a*a+b*b)

360° 多少弧度？
	2π
180° 1π

角度-》弧度
n*Math.PI/180;

弧度-》角度
n*180/Math.PI;
===============================================
jqueryMobile 			移动端库

官网：http://jquerymobile.com/
	非常“完美”库
		缺点:
			太大了。
			不适用每个项目

	特点：必须放在服务器环境下。
		布局
			分配任务
				data-role
					告诉它，它是什么角色
					button
					header
					page

多个页面怎么办？
	SPA 	single page web application
		单页应用程序

		比较适合小的项目。

		项目中用jquerymobile越来越少了。
=============================================
插件
swiper 		致力于解决各种滑块问题
官网：http://www.swiper.com.cn/

iscroll		致力于解决仿移动端滚屏
官网：http://cubiq.org/iscroll-5

============================================
zepto 		库
	移动端的jquery

官网：http://zeptojs.com/
	模块的方式做的。
	自带模块
		zepto 		核心
		event 		on 	off
		ajax 		交互
		form 		form交互
		ie 			兼容ie10+
	
	不包括，需要自己下载
		detect 			浏览器信息
		fx 				animate
		fx_methods 		.show()/.hide()/.toggle()
		assets 			ios垃圾回收
		selector 		选择器
		deferred 		缓存
		callbacks 		
		data
		touch 			触碰
		gesture 		手势
		stack
		ios3

	哪些模块是移动端必备
		fx
		touch
=========================================
	touch
		tap 			 	触碰	
		singleTap 			延迟
		doubleTap 			双击
		longTap 			长按
		swipe 				滑动
		swipeLeft 			左滑
		swipeRight 			右滑
		swipeUp 			上滑
		swipeDown 			下滑
==========================================











































































