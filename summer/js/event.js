var winH = $(window).height(),
		season = {
			summer: {
				start: 0,
				end: $('.con2').height() - 500,
				conArr: ['.con1 .img1'],
				animateType: ['animated infinite pulseCloud']
			},
			autumn: {
				start: $('.con2').position().top - 500,
				end: $('.con3').position().top - 500,
				conArr: ['.con2 .leaves', '.con2 .leaf1', '.con2 .leaf2'],
				animateType: ['animated fadeOutRightLeaf', 'animated delay5 fadeOutRightLeaf', 'animated delay8 fadeOutRightLeaf']
			},
			winter: {
				start: $('.con3').position().top - 500,
				end: $('.con4').position().top - 300,
				conArr: ['.con3 .cloudl1', '.con3 .cloudl2', '.con3 .cloudr1', '.con3 .cloudr2'],
				animateType: ['animated fadeInLeft', 'animated fadeInLeft', 'animated fadeInRight', 'animated fadeInRight']
			},
			spring: {
				start: $('.con4').position().top - 300,
				end: $('.container').height() - 300,
				conArr: ['.con4 .flower', '.con4 .flowers', '.con5 .treel', '.con5 .treer'],
				animateType: ['animated duration5 fadeOutRightFlower', 'animated delay3 fadeInLeft', 'animated delay12 fadeOutLeft', 'animated delay12 fadeOutRight']
			}
		},
		winTop = 0,
		animatePos = 0,
		animateDelay = 1500,
		cacheSeason = '',
		currentSeason = '',
		$animateObj = null,
		renderAnimate = false;

	animateObj($(season['summer']['conArr'][0]), season['summer'].animateType[0]);

	//console.dir(season);
	window.onscroll = function () {

		winTop = $(window).scrollTop();

		countSeason(winTop);

		animatePos = season[currentSeason].start;

		if (winTop > animatePos) {
			renderAnimate = true;
		}

		if (currentSeason === 'summer') {
			return;
		}

		if (renderAnimate) {

			for (var i = 0; i < season[currentSeason]['conArr'].length; i++) {

					$animateObj = $(season[currentSeason]['conArr'][i]);
					animateClass = season[currentSeason]['animateType'][i];
					//console.log(i, $animateObj.children('img'));
					//console.log($animateObj);

					animateObj($animateObj, animateClass);

			}

			resetObj(currentSeason);

		} else {
			return false;
		}


	};

	function animateObj($animateObj, animateClass, delay) {

		$animateObj.stop().animate({
			'opacity': '1'
		}).addClass(animateClass);

		renderAnimate = false;

	}

	function resetObj(currentSeason) {

		var animateClass = '';

		for (prop in season) {

			if (prop === currentSeason || prop === 'summer') {
				continue;
			}

			for (var i = 0; i < season[prop]['conArr'].length; i++) {

				var $restObj = $(season[prop]['conArr'][i]),
					$imgs = $restObj.children();

				animateClass = season[prop]['animateType'][i];

				if (season[prop]['conArr'][i] === '.con5 .treel' || season[prop]['conArr'][i] === '.con5 .treer') {
					$restObj.stop().removeClass(animateClass);
					continue;
				}

				$restObj.stop().animate({
					'opacity': '0'
				}, 500).removeClass(animateClass);

			}

		}

	}

	function countSeason(winTop) {

		if (winTop >= season.spring.start && winTop < season.spring.end) {
			currentSeason = 'spring';
		} else if (winTop >= season.summer.start && winTop < season.summer.end) {
			currentSeason = 'summer';
		} else if (winTop >= season.autumn.start && winTop < season.autumn.end) {
			currentSeason = 'autumn';
		} else if (winTop >= season.winter.start && winTop < season.winter.end) {
			currentSeason = 'winter';
		}

		//console.log(currentSeason);
	}