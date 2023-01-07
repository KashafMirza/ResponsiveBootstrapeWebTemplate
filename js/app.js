$(document).ready(function(){
    //hero Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        navText: ['PREV','NEXT'],
        smartSpeed:1000,
        responsive:{
            0:{
               nav:false,
            },
           786:{
             nav:true,
           }
        }
    });

   //Project Slider
   $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    margin:24,
    smartSpeed:1000,
    responsive:{
        0:{
          items: 1,
          nav: false,
          margin: 0,
        },
       786:{
           items:2,
       },
       1140:{
         items:2,
         center:true,
       }
    }
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  items:1,
  smartSpeed:800,

 
   })
});
