/**
 *视觉窗口设置
 */
;(function(){
	//判断设备，返回设备名称
	var equip = function(){
			var userAgentInfo = navigator.userAgent,
				Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
				
			for (var v = 0; v < Agents.length; v++) { 
				if (userAgentInfo.indexOf(Agents[v]) > 0) { return Agents[v]; };
			};
			return "pc";
		};
		
	//视觉宽度设置
	;(function( viewWidth ){
		var viewport = document.querySelector("meta[name=viewport]"),
			winWidths = document.documentElement.clientWidth,
			densityDpi = viewWidth/winWidths,
			sEquip = equip();

		densityDpi = densityDpi > 1 ? 300*viewWidth*densityDpi/viewWidth : densityDpi;
		if ( sEquip === "iPhone" || sEquip === "iPad" || sEquip === "iPod" ) {
			viewport.setAttribute('content', 'width='+ viewWidth +', target-densityDpi='+densityDpi +', user-scalable=no');
		} else {
			viewport.setAttribute('content', 'width='+ viewWidth +', target-densityDpi='+densityDpi +', user-scalable=no');
		};
	})( 640 );
})();