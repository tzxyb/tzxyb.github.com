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

$('.car').tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 7) { now.row = last.row+1; now.col = 1; pageMove();}
	if (last.row == 7) { now.row = 1; now.col = 1; pageMove();}
});

$('.car').tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove();}	
	if (last.row==1) { now.row = 7; now.col = 1; pageMove();}
});


function pageMove(){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	

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
