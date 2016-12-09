(function(){

var now = { row:1 }, last = { row:0};
var towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;


document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	if (last.row != 15) { now.row = last.row+1; pageMove(towards.up);}
});

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	if (last.row!=1) { now.row = last.row-1;  pageMove(towards.down);}	
});


function pageMove(tw){
	var lastPage = ".slide-"+last.row;
	var nowPage = ".slide-"+now.row;
	
	switch(tw) {
		case towards.up:
			outClass = 'fadeIn';
			inClass = 'fadeOut';
			break;
		case towards.down:
			outClass = 'fadeOut';
			inClass = 'fadeIn';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('slide-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('slide-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},200);
}

})();


$('#music-btn').on('touchstart', function() {
	if ($(this).hasClass('on')) {
		$('audio').get(0).pause();
		$(this).addClass('off').removeClass('on');
	} else {
		$('audio').get(0).play();
		$(this).removeClass('off').addClass('on');
	}
});
var parts={
	start: {
		'img':['1_1','1_2','1_3','1_4','1_5','cap'],
		'animate':['fadeIn','fadeIn','fadeIn','slideLeft','slideRight','cap'],
		'delay':['0.1','0.4','0.9','1.2','1.5']
	},
	startStory: {
		
	},
	special: {
	},
	specialCar: {
		
	},
	uniform:{
	},
	uniformChapter:{
		
	},
	elk:{
	},
	elkArticles:{
		
	},
	christmas:{
	},
	christmasKnot:{
		
	},
	old:{
	},
	oldDriver:{
		
	},
	sleep:{
	},
	sleepArticle:{
		
	}
	
};
var chriscomics={
		
};