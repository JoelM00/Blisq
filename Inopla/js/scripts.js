$(document).ready(function() {

	AOS.init({
		once: true,
	});

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
		autoplay: false,
		autoplaySpeed: 1000,
		speed: 200,
		arrows: true,
		dots: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
	});
			  

	$('.sub-about-gallery').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	})

	$('.grid').masonry({
		// options
		itemSelector: '.grid-item-image',
		columnWidth: '.grid-item-image',
		gutter: 10,
	  });
});

