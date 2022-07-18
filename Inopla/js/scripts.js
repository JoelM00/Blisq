$(document).ready(function() {

	$('.menu-button-close').on('click', function(){
		$('.menu').toggleClass("active")
	});

	$('.menu-button-open').on('click', function(){
		$('.menu').toggleClass("active")
	});
	

	$('.solutions-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 200,
		arrows: true,
		dots: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
	});
			  
				  
	$('.sub-about-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
	});

	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: 200,
		gutter: 20,
	  });
});

