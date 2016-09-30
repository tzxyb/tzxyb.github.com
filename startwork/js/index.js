(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
//const towards = { up:1, right:2, down:3, left:4};
var towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);
$('.car').tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 7) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
	if (last.row == 6) {
		audio.pause();
		$('#music').css('display','none');
	}
});
$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 7) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
	if (last.row == 6) {
		audio.pause();
		$('#music').css('display','none');
	}
});

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'fade';
			inClass = 'fade';
			break;
		case towards.right:
			outClass = 'fade';
			inClass = 'fade';
			break;
		case towards.down:
			outClass = 'fade';
			inClass = 'fade';
			break;
		case towards.left:
			outClass = 'fade';
			inClass = 'fade';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},0);
}

})();
var audio = document.querySelector('#audio');
$('#music').tap(function() {
	if ($(this).hasClass('on')) {
		audio.pause();
		$(this).attr('src','image/stop.png');
		$(this).removeClass('on');
	} else {
		audio.play();
		$(this).attr('src','image/music.gif');
		$(this).addClass('on');
	}
});


/*   页面领券部分  */
$('.btn-share').tap(function(){
	$('.shadow .alcon').hide()
	$('.pic-share').show();
});
$('.pic-share').tap(function(){
	$('.shadow,.shadow .pic-share').hide()
})
$('.btn-go').click(function(){
	checkTel();
	if(checkTel()){
		var tel = $.trim($('#mobile').val());
		var mobile = tel.substr(0,3)+"****"+ tel.substr(7,4);

		$('.shadow,.shadow .alcon').show();
		$('#userTel').html(mobile);
	}
});

function checkTel(){
	var tel = $.trim($('#mobile').val());
	if(null === tel || '' === tel || tel.length === 0){
		ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}
	if(!mobileValidate(tel)){
		ucar.uitls.show("手机号填写错误<span class='face face-3'></span>");
		return false;
	}else{
		return true;
	}
}
