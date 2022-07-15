$(document).ready(function() {

	$('.menu-button-close').on('click', function(){
		$('.menu').toggleClass("active")
	});

	$('.menu-button-open').on('click', function(){
		$('.menu').toggleClass("active")
	});
	

	$('.slider').slick(
		{
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			speed: 200,
			arrows: true,
			adaptiveHeight: false,
			dots: false,
			prevArrow: $('.arrow-left'),
			nextArrow: $('.arrow-right'),
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

	$('.content-gallery').masonry({
		itemSelector: '.content-gallery-image',
		columnWidth: '.content-gallery-image',
		percentPosition: true,
		gutter: 10,
	});
});

