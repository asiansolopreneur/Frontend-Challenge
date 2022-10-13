$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        loop:true,
       // autoplay:true,
        autoplayTimeout:5000,
        nav    : true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
  });


  $(document).ready(function($){
    $("#my-accordion").accordionjs();
});