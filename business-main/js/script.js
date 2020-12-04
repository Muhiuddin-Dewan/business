$(function () {

    // Counter

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });


    //Mixit UP

    var mixer = mixitup('.mixitup');


});
//progress-bar js
$(document).ready(function(){
	$('#bar1').barfiller({barColor: '#76bbf6',duration: 1000});
	$('#bar2').barfiller({barColor: '#4f9ee1',duration: 1000});
	$('#bar3').barfiller({barColor: '#3b89cb',duration: 1000});
	$('#bar4').barfiller({barColor: '#36b2d4',duration: 1000});
	$('#bar5').barfiller({barColor: '#1f98b9',duration: 1000});
	$('#bar6').barfiller({barColor: '#0e7c9a',duration: 1000});	
});
//slider js
$(document).ready(function () {
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true
    });
});

