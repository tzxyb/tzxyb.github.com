(function(){
	var now = { row:1 }, last = { row:0};
	var towards = { up:1, right:2, down:3, left:4};
	var isAnimating = false;

	document.addEventListener('touchmove',function(event){
		event.preventDefault(); },false);

	$(document).swipeUp(function(){
		if (isAnimating) return;
		last.row = now.row;
		if (last.row != 6) { 
			now.row = last.row+1; pageMove(towards.up);
			if(now.row == 6){
				$('.arrow').hide();
			}};
	});

	$(document).swipeDown(function(){
		if (isAnimating) return;
		last.row = now.row;
		if (last.row!=1) { now.row = last.row-1;  pageMove(towards.down);
			if(now.row==5){
				$('.arrow').show();
			}}
	});

	function pageMove(tw){
		var lastPage = ".slide-"+last.row;
		var nowPage = ".slide-"+now.row;
		switch(tw){
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

		$(lastPage).removeClass('slide-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");

		$(nowPage).addClass('slide-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");

		isAnimating = false;
	};
})();
