
function animateStatistics(){
if ($('.project-statistics-row').is(":visible")) {
    console.log("ola")
    $(".project-statistics-row").each(function(index) {
        var targetValue = $(this).attr("data-target");
        var targeElement = $(this).find(".project-statistics-number");          

        
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
        } else {
            // the element is not visible, do something else
        }
    });
} else {
    console.log("xau")
}
}

animateStatistics();
$(window).scroll(function(){
    animateStatistics();
});