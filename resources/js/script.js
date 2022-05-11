// =====================sticky menu================
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#main_menu').addClass("sticky");
      }
      else{
        $('#main_menu').removeClass("sticky");
      }
    });
// ==================type js==============
var typed = new Typed('.element', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'Web Coder. ',
    'Contant Writer.',
    'Web Devloper.',
    'Graphics Designer.',
    'Web Designer.',
  ],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 100,
  smartBackspace: true,
  shuffle: false,
  backDelay: 700,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: false,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
});

// ==========barfiller part================
$(document).ready(function(){
  $('#bar1').barfiller();
});
$(document).ready(function(){
  $('#bar2').barfiller();
});
$(document).ready(function(){
  $('#bar3').barfiller();
});
$(document).ready(function(){
  $('#bar4').barfiller();
});
$(document).ready(function(){
  $('#bar5').barfiller();
});
$(document).ready(function(){
  $('#bar6').barfiller();
});
// ============CounterUp================
$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 0,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});
// ==============service_slider=============
$('.service_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  autoplay:false,
});
// ============mixitup============
var mixer = mixitup('.project');
// ===============clients_slider===============
$('.clients_slider').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows:false,
  autoplay:true,
});
// =====================sticky menu================
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){  
      $('#main_menu').addClass("sticky");
    }
    else{
      $('#main_menu').removeClass("sticky");
    }
  });