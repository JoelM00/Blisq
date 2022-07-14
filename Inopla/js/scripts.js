$(document).ready(function() {
	AOS.init({
		once: true,
	});
	if(!$("body").hasClass("home")) {
		if($(window).width() > 1280) {
			$('.top-menu').toggleClass('active');
		}
	}

	$('.btn-menu').on('click', function(){
		$('.menu-list').toggleClass('menu-list-close');
	});
	$('.menu-button').on('click', function(){
		$('.top-menu').toggleClass("active")
	});
	$('.menu-button-close').on('click', function(){
		$('.top-menu').toggleClass("active")
	});


	$('.home-solutions-showcase-grid').slick(
		{
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			speed: 200,
			arrows: true,
			adaptiveHeight: false,
			dots: false,
			prevArrow: $('.home-showcase-arrow-left'),
			nextArrow: $('.home-showcase-arrow-right'),
			infinite:true,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
						dots: false,
						arrows: true,
					}
				},
				{
					breakpoint: 701,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						dots: false,
						arrows: true,
					}

				}
			]
		}

	)
	$('.about-cta3-gallery').slick(
		{
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			dots: false,
			infinite: false,
			prevArrow: $('.cta3-gallery-arrow-left'),
			nextArrow: $('.cta3-gallery-arrow-right')
		}

	)
	$('.solution-product-gallery').masonry({
		// options
		itemSelector: '.solution-product-gallery-image',
		columnWidth: '.solution-product-gallery-image',
		percentPosition: true,
		gutter: 10,
	});

	$video = $('.solution-product-video');
	$button = $('#play-button')
	if($video) {
		$('.solution-product-video, #play-button').on('click', function() {
			if($video.get(0).paused) {
				$video.get(0).play();
				$button.addClass('play-button-pause');
				$button.attr('src',`${theme.assets}/assets/images/svg/pause-button.svg`);
			} else {
				$video.get(0).pause();
				$button.removeClass('play-button-pause');
				$button.attr('src',`${theme.assets}/assets/images/play-button.png`);
			}
		});
	}
});

