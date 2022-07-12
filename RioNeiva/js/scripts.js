
function animateStatistics(){
    if ($('.statistics-row').is(":visible")) {

        $(".statistics-row").each(function(index) {
            var targetValue = $(this).attr("data-target");
            var targeElement = $(this).find(".statistics-number");          

            
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();
            
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                // the element is visible, do something
                $(targeElement).prop('Counter',0).animate({
                    Counter: targetValue
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(targeElement).text(Math.ceil(now));
                    }
                });
            } 
        });
    }
}

animateStatistics();
$(window).scroll(function(){
    animateStatistics();
});

//Plugin Slider

$(".activity-slider-container").each(function(){
    var currentSlider = $(this).find(".activity-slider");
    $(currentSlider).slick({
        dots : true,
        prevArrow : $(this).find('.activity-button-left'),
        nextArrow : $(this).find('.activity-button-right')
    });
});

$(".slick-dots button").html("");


$('.inside-button').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    targerOffSet = $(id).offset().top;

    $('html, body').animate({scrollTop: targerOffSet - 40},500);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}