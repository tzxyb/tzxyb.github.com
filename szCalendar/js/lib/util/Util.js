/**
 * User: PatrickSze/22632643@qq.com
 * Date: 2015/11/2
 * Time: 15:45
 */

var Util = {

    DOMUtil: {
        getEl: function (id) {
            return document.getElementById(id);
        },
        getSize: function () {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight,
                w2: window.innerWidth,
                h2: window.innerHeight
            }

        }
    },
    //Createjs工具类，需要搭配createjs
    CjsUtil: {

        showFps: function (stage) {
            fpsLabel = new createjs.Text("-- fps", "bold 23px Arial", "#c48600");
            stage.addChild(fpsLabel);
            fpsLabel.x = 5;
            fpsLabel.y = 10;
            fpsLabel.visible = true;
            fpsLabel.addEventListener('tick', fpsEnterFrameHandle);
            function fpsEnterFrameHandle(evt) {
                fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
            }
        },
        showVal: function (x,stage,val) {
            if (typeof(valLabel) != "undefined") {

                stage.removeChild(valLabel);
            }

            valLabel = new createjs.Text("", "bold 23px Arial", "#c48600");
            stage.addChild(valLabel);
            valLabel.x = x;
            valLabel.y = 10;
            valLabel.visible = true;
            valLabel.text =   val;

        },
        removeAll: function (container) {
            console.log(container.numChildren)
            while (container.numChildren > 0) {

                container.removeChildAt(0);


            }

        },
        setImageToContainer: function (img,container,root) {
            var bitmap = new createjs.Bitmap(img);
            setTimeout(function () {
                Util.CjsUtil.removeAll(container);
                Util.CjsUtil.resizeImageToFit(bitmap);
                container.addChild(bitmap);
                root.addChild(container);
                container.x=container.getBounds().width/2;
                container.y=container.getBounds().height/2;
                //console.log(_canvas.toDataURL())
            }, 300);

        },
        resizeImageToFit: function (DisplayObj) {

            var w=DisplayObj.getBounds().width;
            var h=DisplayObj.getBounds().height;
            //_orgWidth为canvas的宽度
            var s=_orgWidth/w;
            //显示对象宽强制固定为canvas的宽
            DisplayObj.scaleX= DisplayObj.scaleY=s;
            //将显示对象的中心点至于容器0，0位置 缩放不会出错。
            DisplayObj.x=-w*s/2;
            DisplayObj.y=-h*s/2;

        }
    },

    NumberUtil: {

        addLeadingZeros:function(num , len )
        {
            var _str = num.toString();
            while (_str.length < len) {
                _str = "0" + _str;
            }
            return _str;
        }

    },

    ArrayUtil: {

        shuffle:function(array)
        {

            var arr=[];
            for (var i = 0; i < array.length; i++) {
                arr.push(array[i]);
            }
            var arr2= arr.sort(function(){ return 0.5 - Math.random() });
            var arr3= arr2.sort(function(){ return 0.5 - Math.random() });

            return arr3;

        }

    },

    StringUtil: {

        getLen:function(str)
        {
            var realLength = 0, len = str.length, charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) realLength += 1;
                else realLength += 2;
            }
            return realLength;
        }

    }



}

