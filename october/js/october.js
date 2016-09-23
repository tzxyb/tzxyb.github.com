var acticode = "october";
$(".btn-go").click(function(){
    var mobile = $("#mobile").val();
    var userName = $('#username').val();
    shake();
    if(checkTel()){
       $.ajax({
                url : "/awardByMobile/award.do",
                type : "post",
                data : {
                    mobile : mobile,
                    from:acticode,
                    origin:acticode,
                    name:userName
                },
                dataType:"json",
                cache : false,
                success:function(data, textStatus){
                    if(data){
                        var status = data.status;
                        if(status == 0){//成功
                        	if(mobile){
     	                        mobile = mobile.substr(0,3)+"****"+mobile.substr(7,4);
     	                    }
                        	award_no = data.result.award_no;
                        	if('ruilan'==award_no){
                            	showPrize(result[6]);
    		             	}else if('quban'==award_no){
    		             		showPrize(result[4]);
    		            	}else if('shuiguang'==award_no){
    		            		showPrize(result[3]);
    		            	}else if('jijin'==award_no){
    		            		showPrize(result[5]);
    		            	}else if('tuomao_yexia'==award_no){
    		            		showPrize(result[2]);
    		            	}else if('tuomao_chun'==award_no){
    		            		showPrize(result[1]);
    		            	}else if('feiyada'==award_no){
    		            		showPrize(result[0]);
    		            	}
                        }else if(status == 6){
    		            	ucar.uitls.show("亲,活动已结束,<br>下次要赶早哦！");
    		            }else if(status == 7){
    		            	ucar.uitls.show("未找到配置信息！");
    		            }else if(status == 8){
    		            	ucar.uitls.show("您来晚了，奖品已经抽完！");
    		            }else{
    		            	ucar.uitls.show("纳尼,<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
    		            }
                    }else{
                    	ucar.uitls.show("纳尼,<br>系统出错了。<br>您可以稍等或过会再来！<br><br>");
                    }
                }
        });
 }});
//中奖弹层内容
function showPrize(prizeObj){
	setTimeout(function(){
		$('.alcon,.alcon .result').show();
		if(prizeObj.type === 'quan'){
			$('.pic-title').attr('src','http://mktimage.10101111cdn.com/wap/2016/october/pic_watch.jpg');
			$('.btn-leave').css('display','block');
			$('.intro').css('textAlign','center');
			$('.intro').html(prizeObj.word);
		}else if(prizeObj.type=='wu'){
			$('.pic-title').attr('src','http://mktimage.10101111cdn.com/wap/2016/october/pic_wu.png');
			$('.intro').css('textAlign','left');
			$('.intro').html(prizeObj.word);
			$('.btn-leave').css('display','none');
		}
	},1000);
};

var result=[
  {
	  prize:'飞亚达手表',
	  type:'quan',
	  word:'<span class="red">恭喜您获得飞亚达手表代金券！</span>',
	  href:'http://55582898.m.weimob.com/vshop/55582898/Index?PageId=454855&IsPre=1'
  },
  {
	  prize:'脱毛（唇毛一年包干）2500元',
	  type:'wu',
	  word:'<span class="red">恭喜您获得脱毛（唇毛一年包干）价值2500元！</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  },
  {
	  prize:'脱毛（腋毛一年包干）2500元',
	  type:'wu',
	  word:'<span class="red">恭喜您获得脱毛（腋毛一年包干）价值2500元！</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  },
  {
	  prize:'无针水光',
	  type:'wu',
	  word:'<span class="red">恭喜您获得无针水光一次价值1280元！</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  },
  {
	  prize:'祛斑',
	  type:'wu',
	  word:'<span class="red">恭喜您获得祛斑体验一次价值2580元！</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  },
  {
	  prize:'3000美丽基金',
	  type:'wu',
	  word:'<span class="red">恭喜您获得RMB3000元整形美容外科美丽基金！</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  },
  {
	  prize:'丽都整形 瑞蓝进口玻尿酸',
	  type:'wu',
	  word:'<span class="red">恭喜您获得瑞蓝进口玻尿酸一支价值6800元</span>活动结束后神州专车客服会在1-3个工作日与您联系，请保持手机畅通！<br>预约电话：400-000-7070！'
  }
];
function checkTel(){
    var userName = $('#username').val();
    if(null === userName || "" === userName || userName.length === 0 ){
    	ucar.uitls.show('姓名不能为空！');
        return false;
    }
    
    var tel =  $('#mobile').val(); 
    if (null === tel || "" === tel || tel.length === 0 || tel == '请输入手机号') {
         ucar.uitls.show("亲，填写手机号，<br>才能领券哦！");
        return false;
    }

    if(! mobileValidate(tel) ){
        ucar.uitls.show("亲，填错啦，<br>重新输入试试！");
        return false;
    }else{
        return true;
    }
}

function shake(){
	var oul = document.getElementById('oul');
	var aDiv=oul.getElementsByTagName('li');
	var i=0;
	var timer=setInterval(function(){	
		aDiv[i].style.opacity='.5';	
		i++;
		if(i==aDiv.length){
			clearInterval(timer);
		}
	},100);
};

$('.alcon,.btn-close').click(function(){
	$('.alcon').hide();
	$('.list li').css('opacity','1')
})
