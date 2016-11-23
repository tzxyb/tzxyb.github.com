(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
//const towards = { up:1, right:2, down:3, left:4};
var towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

//s=window.innerHeight/500;
//ss=250*(1-s);

//$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 5) { now.row = last.row+1; now.col = 1; pageMove(towards.left);}
	if (last.row == 5) { now.row = 1; now.col = 1; pageMove(towards.left);}
});

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.right);}	
	if (last.row==1) { now.row = 5; now.col = 1; pageMove(towards.right);}
});


function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
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
	},600);
}

})();


$('#music').on('touchstart', function() {
	if ($(this).hasClass('on')) {
		$('audio').get(0).pause();
		$(this).addClass('off').removeClass('on');
	} else {
		$('audio').get(0).play();
		$(this).removeClass('off').addClass('on');
	}
});