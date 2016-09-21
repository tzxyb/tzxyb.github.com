笔记
==============================================
canvas
	画图

	获取绘图上下文
		var gd = oC.getContext('2d');

	gd.moveTo(x,y)
	gd.lineTo(x,y)

	gd.beginPath();
	gd.closePath();

	gd.lineWidth 			线宽
	gd.strokeStyle
	gd.fillStyle

==========================================
矩形
	gd.strokeRect(x,y,w,h)
	gd.fillRect(x,y,w,h)
	gd.rect(x,y,w,h);
	gd.stroke()/fill();

弧
	gd.arc(cx,cy,r,s,e,b);
			圆心 半径 开始 	结束 	是否翻转

变形
	gd.save();

	gd.translate
	gd.rotate
	gd.scale

	gd.restore();

============================================
运动

	开个定时器
		先清
			gd.clearRect(x,y,w,h);
		后画

===========================================
引入背景图
createPattern(oImg,平铺方式)
============================================
导出图片
	oC.toDataURL('指定导出格式');

画图
	gd.drawImage(
		oImg,
		sx,sy,sw,sh,
		dx,dy,dw,dh
	);

像素级操作
	var result = gd.getImageData(x,y,w,h);
	var data = result.data;

	操作修改

	gd.putImageData(data,x,y);

=====================================
小游戏
	难在哪？
		产品、运营 
		UI

面向对象？
	对象：属性+方法

人类
Person	
	属性
		name 	age
	方法
		showName()
		showAge();	

Box
	属性
		value

	方法
		add(n,n,n,n);
		del(n);

=======================================
捕鱼达人
	
	加载资源


物体 	Sprite
	属性
		x 	y 	width 	height
		r 	iSpeed
	方法
		draw()
		move()

鱼 	Fish
 	属性
 		x 	y 	width 	height
 		rotate 	iSpeedX iSpeedY
 		type
 	方法
 		draw() 		画
 		move() 		移动

炮弹	Bullet
	属性
		x 	y 	width 	height
		rotate 	iSpeedX iSpeedY
		type
	方法
		draw() 		画
		move() 		移动

=======================================
微信开发
	微信公众账号
		订阅号
			潜在客户
		服务号
			已有客户
		企业号
			为企业服务

微信公众平台:
https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN

a) 	非技术用户

b)	技术用户
	后台 		主力是后台
	前端 		
		写移动端页面加功能。

	微信年开发流程
		1.
			找后台
				校验+配置
		2.

			a).创建移动端页面
			b).引入jsapi接口
			c).验证
			d).ready
			e).开发
========================================
作业：
	捕鱼达人
	个人站


























