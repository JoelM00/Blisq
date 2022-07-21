$(document).ready(function() {

	AOS.init({
		once: true,
	});

	$('.menu-button-close').on('click', function(){
		$('.menu').removeClass("active")
	});

	$('.menu-button-open').on('click', function(){
		$('.menu').addClass("active")
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
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
			  

	$('.sub-about-gallery').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 1000,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
		responsive: [
			{
				breakpoint: 1460,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 573,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	})

	$('.grid').masonry({
		itemSelector: '.grid-item-image',
		columnWidth: '.grid-item-image',
		gutter: 10,
	  });
});

