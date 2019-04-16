/*------------------------------*/
//  TYPE JS Initialization
/*------------------------------*/

// const options = {
//     strings: ["Welcome to Olso ^1000","Rent almost anything ^500"],
//     typeSpeed: 80, 
//     loop:true,
//     showCursor:true,
//     smartBackspace: true
    
//   }
  
//   const typed = new Typed(".element", options);


/*------------------------------*/
//  PARTICLE JS INITIALIATION
/*------------------------------*/

particlesJS.load('particles', './js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});





/*------------------------*/
    // NAVBAR ON SCROLL
/*-------------------------*/
console.log(window.screen.width)
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if ($(window).width() > 700 && scrollPos <= 0) {
        $('.navbar').addClass('top-of-page');
        $('.navbar').removeClass('setbakground');
    
    } else {
        $('.navbar').removeClass('top-of-page');
        $('.navbar').addClass('setbakground');
    }
});
/*------------------------*/
  // Width On small Screen
/*-------------------------*/
(function($) {
  var $window = $(window),
      $html = $('.navbar');

  function resize() {
      if ($window.width() < 700) {
          return $html.addClass('setbakground');
      }

      $html.removeClass('setbakground');
  }

  $window
      .resize(resize)
      .trigger('resize');
})(jQuery);

/*------------------------*/
// Slick Slider Initialization
/*-------------------------*/



// TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



// // AOS INITILIZATION

AOS.init();

//   INITIATIZATION OF THE MORPH TEXT
$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});
  
// INITIALIZATION OF THE COUNTER UP JS
$('.counter').counterUp({
    delay: 10,
    time: 1000
});




