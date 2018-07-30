// $(document).ready(function(){
//     $("nav").sticky({topSpacing:0});
//   });





$( document ).ready(function() {

 var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BRANDS')
    .pauseFor(2500)
    .deleteAll()
    .typeString('WEBSITES')
    .pauseFor(2500)
    .deleteAll()
    .typeString('LOGOS')
    .pauseFor(2500)
    .start();


});

$(document).ready(function() {
    var project1 = $('#homepage #header').offset();
    var project2 = $('#homepage #green').offset();
    var project3 = $('#homepage #pink').offset();
    var project4 = $('#homepage #orange').offset();
    var project5 = $('#homepage #purple').offset();
    var project6 = $('#homepage #grey').offset();
    var project7 = $('#homepage #footer').offset();
    var $window = $(window);
    
    $window.scroll(function() {
        if ( $window.scrollTop() >= project1.top) {
            $('body').css({"background-color": "#4cd5e7"});
            $('nav').css({"background-color": "#4cd5e7"});
            // $('.menu').css({"background-color": "#4cd5e7"});
            $('nav p').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "/images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project2.top - 225 ) {
            $('body').css({"background-color": "#26C281"});
            $('nav').css({"background-color": "#26C281"});
            // $('.menu').css({"background-color": "#26C281"});
            $('nav p').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project3.top - 225 ) {
            $('body').css({"background-color": "#f31878"});
            $('nav').css({"background-color": "#f31878"});
            // $('.menu').css({"background-color": "#f31878"});
            $('nav p').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project4.top - 225 ) {
            $('body').css({"background-color": "#F9690E"});
            $('nav').css({"background-color": "#F9690E"});
            // $('.menu').css({"background-color": "#F9690E"});
            $('nav p').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project5.top - 225 ) {
             $('body').css({"background-color": "#6600cc"});
            $('nav').css({"background-color": "#6600cc"});
            // $('.menu').css({"background-color": "#6600cc"});
            $('nav p').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project6.top - 225 ) {
            $('body').css({"background-color": "#aab2b8"});
            $('nav').css({"background-color": "#aab2b8"});
            // $('.menu').css({"background-color": "#aab2b8"});
            $("#logo").attr("src", "/images/LOGO.png");
            $('nav a').css({"color": "white"});
            $("nav a").css("border-bottom-color", "white");
            $("#logo").attr("src", "/images/LOGO.png");
            $('#logo polygon').css({"fill":"white"});
            $('nav label').css({"color":"white"});
            
        }
        if ( $window.scrollTop() >= project7.top - 225 ) {
            $('body').css({"background-color": "#f1f2f6"});
            $('nav').css({"background-color": "#f1f2f6"});
            // $('.menu').css({"background-color": "#f1f2f6"});
            $('nav a').css({"color": "#f31878"});
            $("nav a").css("border-bottom-color", "#f31878");
            $('#logo polygon').css({"fill":"#f31878"});
            $('nav label').css({"color":"#f31878"});
            
        }
    });         
});


$(".jump-to-work").click(function() {
    $('html, body').animate({
        scrollTop: $("#green").offset().top - 110
    }, 1000);
});




 $('#logo').hover(
       function(){ $(this).toggleClass('animated rubberBand') }
);

 $('.btn').hover(
       function(){ $(this).toggleClass('animated rubberBand') }
);





// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $("#green").scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//        $('#green').addClass('animated fadeInUpBig');
//    } else {
//       // upscroll code
//        $('#green').removeClass('animated fadeInUpBig');
//    }
//    lastScrollTop = st;
// });

$(function(){  // $(document).ready shorthand
  $('.work-section').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).toggleClass('animated fadeInUpBig');
                $(this).removeClass('hideme');
                    
            }
            
        }); 
    
    });
    
});

$('.img-wrap').hover(
       function(){ $(".img-wrap a h2").toggleClass('animated fadeInUpBig') }
);








       $('#toggle').click(
       function(){ $('.nav').toggleClass('mobile-nav') }
);

