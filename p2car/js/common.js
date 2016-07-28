// JavaScript Document
$(function(){
	$(".getback").click(function(){
		window.history.back(-1);
	});
	$(".homeback").click(function(){
		window.location="../index.html";
	});
	$(".yzq_out").click(function(){
		window.location="index.html";
	});
	$(".yzq_personal-inf").click(function(){
		window.location="租客认证.html";
	});
	// 我要租车12345

    $("#table-equal li>.table-li").each(function(index){
    	$(this).click(function(){
    		$("#table-equal li>.table-li").removeClass('selected');
    		$(this).addClass('selected');
    		$("#yzp-dl .yzp-droplist").removeClass('droplist-expand');
    		var $itemselected=$('#yzp-dl .yzp-droplist').eq(index);
    		$itemselected.addClass('droplist-expand');

    	})
    })
  
    $("#yzp-dl-1>.drop-left>.drop-f").each(function(index){
		$(this).click(function(){
			$("#yzp-dl-1>.drop-left>.drop-f").removeClass('current');
			$(this).addClass('current');
			var $_index=$(this).index();
			$("#yzp-dl-1>.drop-right>.droplist-right").removeClass('cur-list');
    		$('#yzp-dl-1>.drop-right>.droplist-right').eq($_index).addClass('cur-list');
		})
    })

   
    // 租客订单 选项卡
    $("#table-equal li>.table-li").each(function(index){
    	$(this).click(function(){
    		$("#table-equal li>.table-li").removeClass('selected');
    		$(this).addClass('selected');
    		$("#yzp-zk .yzp-zklist").removeClass('zklist-expand');
    		var $itemselected=$('#yzp-zk .yzp-zklist').eq(index);
    		$itemselected.addClass('zklist-expand');
    	})
    })
})
