$(function () {
  'use strict';
  // start contact form
  var container = $('.section-contact .contact-box').innerWidth();
  var button = $('.section-contact .button-primary').outerWidth();
  var oneWidth = (container - (button + 14)) / 2;
  $('.section-contact .contact-box > input').css('width', oneWidth + 'px')

  // Adjust Slider Height
  var winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - 70);

  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
  // start owl carousel
  var owl = $('.owl-carousel');
  var owl2 = $('section-certifications .owl-carousel');
  owl2.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });

});