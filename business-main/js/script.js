$(function () {

    // Counter

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });


    //Mixit UP

    var mixer = mixitup('.mixitup');


});
$(document).ready(function () {
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay:true
    });
});
