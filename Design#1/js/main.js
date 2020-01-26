(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        //Owl carousel Start//
            $(".slider-area").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: true,
             items: 1,
             itemsDesktop:  [1199,1],
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false
            
         });

      

        var dot = $('.slider-area .owl-dot');
            dot.each(function() {
                var index = $(this).index() + 1;
              if(index < 10){
                $(this).html('0').append(index);
              }else{
                 $(this).html(index);
              }
        });
        
        
        
   



    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 