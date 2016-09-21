笔记
===========================================
canvas
	行内块
	本身是透明的
	设置宽高要设置属性

	画图
		获取绘图上下文
		var gd = oC.getContext('2d');

		gd.moveTo()
		gd.lineTo()
		gd.beginPath()
		gd.closePath()
		gd.stroke()
		gd.fill()
		gd.strokeStyle
		gd.fillStyle
		gd.lineWidth
		gd.rect()
		gd.strokeRect()
		gd.fillRect()
		gd.arc()
		gd.clearRect()
		gd.textAlign
		gd.font
		gd.textBaseline

================================================
变形
	原点永远都在画布的左上角。
	改变的永远都是画布。
	rotate 				旋转

	translate 			平移

	scale 				缩放

		画完图形要变回去。	

		1.保存画布状态
			gd.save();
		2.画图
		3.还原
			gd.restore();


左上角旋转
中心点旋转
============================================
渐变
线性渐变
	var lg = gd.createLinearGradient(x1,y1,x2,y2);
	lg.addColorStop(0-1,color);

	fillStyle = lg;
	strokeStyle = lg;

径向渐变
	var rg = gd.createRadialGradient(cx1,cy1,r1,cx2,cy2,r2);
	rg.addColorStop(0-1,color);

	fillStyle = rg;
	strokeStyle = rg;
================================================
阴影
	gd.shadowOffsetX
	gd.shadowOffsetY
	gd.shadowColor
	gd.shadowBlur

===============================================
导出图片
	oC.toDataURL(MIME-Type);
===============================================
背景图
	gd.createPattern(oImg,'平铺方式');
							repeat
							repeat-x
							repeat-y
							no-repeat

=============================================
引入外部图片
	gd.drawImage(
		oImg,
		dx,dy,dw,dh
	);

	gd.drawImage(
		oImg,
		sx,sy,sw,sh,
		dx,dy,dw,dh
	);

============================================
像素级操作
	配合服务器环境使用

	1.获取像素
		var result = gd.getImageData(x,y,w,h);

	2.获取像素颜色
		var d = result.data;

	3.修改

	4.把像素还回去
		gd.putImageData(result,0,0);


		计算机图形学



效果
复古效果：
    d[i]=(r*0.393)+(g*0.769)+(b*0.189); 	// red
    d[i+1]=(r*0.349)+(g*0.686)+(b*0.168); 	// green
    d[i+2]=(r*0.272)+(g*0.534)+(b*0.131); 	// blue
红色蒙版效果：
    d[i]=(r+g+b)/3;        // 红色通道取平均值
    d[i+1]=d[i+2]=0;  		// 绿色通道和蓝色通道都设为0

图片曝光(高亮效果)：
    d[i]+=200;
    d[i+1]+=200;
    d[i+2]+=200;
颜色反转：
    d[i]=255-d[i];
    d[i+1]=255-d[i+1];
    d[i+2]=255-d[i+2];

============================================
面向对象 	
	类 		一类事物 		人
	对象 	具体某一个 		王二

对象 	
	属性+方法

构造函数
	特点：首字母大写
	
Person类
	属性
		name 	age 	gender
	方法
		showName()
		showAge()
		showGender()


	面向对象特点:
		封装+继承+多态

继承:
	父类有的子类有，子类有的父类不一定有。父类做出改变，子类跟着变。

Person
	属性
		name 	age 	gender
	方法
		showName()
		showAge()
		showGender()
Worker
	属性
		name 	age 	gender 	job
	方法
		showName()
		showAge()
		showGender()
		showJob()

属性继承
	父类.call(this,item1,item2,...);
	父类.apply(this,arguments);
方法继承
	子类.prototype = new 父类();
	子类.prototype.constructor = 子类;



this
	不能看定义，要看调用。

优先级:从高到低
 	new 		Object
 	定时器 		window
 	方法 		方法属于哪个对象
 	正常调用 	window||undefined

============================================
拖拽
	限制范围拖拽
	带框拖拽
=============================================
构造+原型
单例模式:
	var p1 = {
		name : '张三',
		age : 14,
		showName : function(){
			return this.name;
		},
		showAge : function(){
			return this.age;
		}
	};
	p1.showName()
	p1.showAge()



============================================
作业：
	键盘控制怪兽走。
	键盘控制妹子走。

	移动端+canvas





================================================
8月8号、9号、10号、11号
************就业指导课+个人站
8月15号~~~~专业课
================================================




	
	

	


















