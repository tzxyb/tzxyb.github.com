笔记

iphone4/5 		320 		640 		
					
iphone6 		375 		750
					
iphone6p		414			828 		

==============================================
响应式
==============================================
目标：一套页面，在不同尺寸的设备上用。
	不同尺寸下使用不同的样式

媒体查询
	类似于if判断
@media 条件{
	
}
条件
(max-width:400px)
(min-width:500px)

改变尺寸，变div颜色
				#ccc
	800 		red
	600 		green
	400 		blue

<link media="条件" />

===============================================
拖拽
	onmousedown
			存位置
	onmousemove
			改变位置
	onmouseup
			清除事件

在移动端中
	onmousedown
	onmousemove
	onmouseup
	没用。

	在移动端中不用onload用DOMReady


	touchstart 		onmousedown
	touchmove 	 	onmousemove
	touchend		onmouseup

	要使用事件绑定

	鼠标事件
	ev.pageX/clientX
	ev.pageY/clientY

	touch事件
	ev.targetTouches 		所有手指的列表
	var touch = ev.targetTouches[0]; 	一个手指
	touch.pageX/clientX
	touch.pageY/clientY


	为了减少Dom操作，所以不使用left，top
	使用translate

	touchstart的时候不能使用offsetLeft/Top
	要使用translate的X和Y


只能拖一次 			
		不给oBox加事件
		给document加事件

		给transform加前缀

一切卡顿问题都用3D加速解决。
	translate3d(x,y,z)

多点		
	区分是哪个手指
	ev.targetTouches[0].identifier

 	touchstart
 		targetTouches
 	touchmove
 		targetTouches
 	touchend
 		changedTouches


===========================================
轮播图

	左 			下一张
		downX>upX
			iNow++
	右 			上一张
		downX<upX
			iNow--

无缝
===========================================
方向锁定
	






