$.fn.NavSlither = function () {
	var $_NavDiv = $(this),
		$_NavUl = $('ul', $_NavDiv),
		$_NavLi = $('li', $_NavUl),
		$_NavHua = $('.border', $_NavDiv),
		$_NavMHK = $('span', $_NavHua),
		dnum = $_NavLi.index($_NavDiv.find(' ul li.active')),
		$Ac_li = $_NavLi.eq(dnum),
		widthA = $Ac_li.width(),
		leftA = $Ac_li.position().left;
	$_NavMHK.css({ width: widthA, left: leftA });
	$_NavLi.hover(function () {
		var index = $_NavLi.index(this),
			widthB = $_NavLi.eq(index).width(),
			leftB = $_NavLi.eq(index).position().left;
		$_NavMHK.stop().animate({ width: widthB, left: leftB }, 200);
	}, function () {
		$_NavMHK.stop().animate({ width: widthA, left: leftA }, 200);
	});
}
$(function(){
	$('#page-tab').NavSlither();
	$(window).resize(function() {
	  $('#page-tab').NavSlither();
	});
});
