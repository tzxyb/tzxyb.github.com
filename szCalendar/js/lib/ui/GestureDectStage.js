/**
 * User: PatrickSze/22632643@qq.com
 * Date: 2015/10/30
 * Time: 14:39
 */

// namespace:
this.createjs = this.createjs || {};


/*
 * 扩展了Stage
 * */

(function () {
    "use strict";

//构造函数
    function GestureDectStage( canvas ) {

        this.Stage_constructor(canvas);
        this.level = false;

        this.self = this;
        this.activeFingers = 0;
        this.fingers = [];
        this.changed = false;
        this.pid;
        this.stackNum = 5;
        // 保存每一步的状态
        this.stack = [];
        this.ifMouseDown=false;
        this.init();


    }


    var p = createjs.extend(GestureDectStage, createjs.Stage);


//扩展的原型方法


    /*
     *初始化。
     *@method init
     * */
    p.init = function () {
        var o = this;
        o._addListener();
    };

    p._addListener = function () {

        var o = this;

        o.addEventListener('stagemousemove', o._pressmoveHandle);
        o.addEventListener('stagemousedown', o._mousedownHandle);
        o.addEventListener('stagemouseup', o._pressupHandle);

    };


    p._removeListener = function () {
        var o = this;
        o.removeEventListener('stagemousemove', o._pressmoveHandle);
        o.removeEventListener('stagemousedown', o._mousedownHandle);
        o.removeEventListener('stagemouseup', o._pressupHandle);

    };




    p._mousedownHandle = function (evt) {

        var o = evt.currentTarget;

        o.ifMouseDown=true;
        //Util.CjsUtil.showVal(130,o.stage,["down" ]);
        //Util.CjsUtil.showVal(130,o.stage,["sss",evt.pointerID]);
        if (!evt.pointerID) {
            evt.pointerID = -1;
        }

        o.fingers[evt.pointerID] = {
            start: {x: evt.stageX, y: evt.stageY},
            current: {x: evt.stageX, y: evt.stageY},
            old: {x: evt.stageX, y: evt.stageY}
        };
        o.addEventListener('tick', o._ontickHandle);
        o._calculateActiveFingers();

    };


    p._pressmoveHandle = function (evt) {

        var o = evt.currentTarget;
        if(o.ifMouseDown)
        {
           // Util.CjsUtil.showVal(130,o.stage,["move" ]);

            if (!evt.pointerID) {
                evt.pointerID = -1;
            }

            o.fingers[evt.pointerID].current.x = evt.stageX;
            o.fingers[evt.pointerID].current.y = evt.stageY;
            //console.log(o.fingers[evt.pointerID].current.x)
            o._calculateActiveFingers();
            o.changed = true;
        }

    };

    p._pressupHandle = function (evt) {

        var o = evt.currentTarget;
        //Util.CjsUtil.showVal(130,o.stage,["up" ]);
        o.ifMouseDown=false;
        if (!evt.pointerID) {
            evt.pointerID = -1;
        }

        if (o.fingers[evt.pointerID]) {
            delete(o.fingers[evt.pointerID]);
        }


        if (o.stack.length == 0 ) {
            //o.dispatchMoveComplete();
        } else  {

            var average = {x: 0, y: 0};


            for (var i = 1, _len = o.stack.length; i < _len; i++) {
                average.x += (o.stack[i].x - o.stack[i - 1].x);
                average.y += (o.stack[i].y - o.stack[i - 1].y);

                console.log(average.x)

            }

            average.x = average.x / o.stack.length;
            average.y = average.y / o.stack.length;

            var angle = -Math.floor(Math.atan2(average.y,average.x)*180/Math.PI);
            var dis=Math.floor(Math.sqrt(average.x*average.x+average.y*average.y));
            o._gestureDect(angle,dis);
           // Util.CjsUtil.showVal(130,o.stage,["x===",Math.floor(average.x),"y===",Math.floor(average.y),"角度===",angle,"力度===",dis]);

        }

        o._calculateActiveFingers();
        o.removeEventListener('tick', o._ontickHandle);
        o.stack = [];


    };

    p._ontickHandle = function (evt) {


        var o = evt.currentTarget
        //Util.CjsUtil.showVal(130,o.stage,["tick" ]);
        if (o.changed) {
            o.changed = false;
             for (var pointerID in o.fingers) {
               // Util.CjsUtil.showVal(130,o.stage,["xc",pointerID]);
                if (o.fingers[pointerID].start) {
                    o.fingers[pointerID].old.x = o.fingers[pointerID].current.x;
                    o.fingers[pointerID].old.y = o.fingers[pointerID].current.y;

                }
            }
        }

        //
        var tstack = {};
        //Util.CjsUtil.showVal(130,o.stage,["xc",o.pid]);
        tstack.x = o.fingers[o.pid].old.x;
        tstack.y = o.fingers[o.pid].old.y;

        if (o.stack.length > o.stackNum) {
            o.stack.shift();
        }

        o.stack.push(tstack);

    };

    p._gestureDect = function (angel,dis) {

        if(Math.abs(angel)>=0&&Math.abs(angel)<=90)
        {


            if(angel>60&&angel<=90)
            {
                console.log("up")
                SiteSignalController.ActionSignal.dispatch("up");

            }
            else if(angel<-60&&angel>=-90)
            {
                console.log("down")
                SiteSignalController.ActionSignal.dispatch("down");
            }
            else
            {

                console.log("right")
                SiteSignalController.ActionSignal.dispatch("right");

            }

        }
        else if(Math.abs(angel)>90&&Math.abs(angel)<=180)
        {



            if(angel>90&&angel<=120)
            {
                console.log("up")
                SiteSignalController.ActionSignal.dispatch("up");

            }
            else if(angel<-90&&angel>=-120)
            {
                console.log("down")
                SiteSignalController.ActionSignal.dispatch("down");
            }
            else
            {

                console.log("left")
                SiteSignalController.ActionSignal.dispatch("left");

            }


        }





    };

    p._calculateActiveFingers = function () {

        this.activeFingers = 0;

        for (var pointerID in this.fingers) {
            if (this.fingers[pointerID].start) {
                this.activeFingers++;
                if(this.activeFingers==1)
                {
                    //因为各种设备上pointerid不同，所以需要保存第一个摁下的pointerid
                    this.pid=pointerID;
                }
            }
        }

    };


    createjs.GestureDectStage = createjs.promote(GestureDectStage, "Stage");

}());
