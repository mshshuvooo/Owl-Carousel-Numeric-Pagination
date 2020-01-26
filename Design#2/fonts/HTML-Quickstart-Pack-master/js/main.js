(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        //Slicknav Responsive menu//
        $("ul#nav").slicknav({
            prependTo: ".slicknav-responsive-menu"
        });

        //Owl carousel Start//
            $(".").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dot:true,
             nav: true,
             navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:4,
                 },
                 1000:{
                     items:6,
                 }
             }
            
         });



       

         //Wow animation//
        new WOW().init();

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 