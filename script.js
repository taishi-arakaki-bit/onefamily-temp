$(document).ready(function () {

  // Back to Top ボタンにアニメーションをつける
  $('.low .btn').on({
    'mouseover': function () {
      $('.fa-hand-point-up').addClass('to-top');
    },
    'mouseout': function () {
      $('.fa-hand-point-up').removeClass('to-top');
    }
  });

  // ページトップへスクロール
  $('a[href^="#"]').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  // slick slider
  var slick = $('.slick')

  var slick_title = $('.slick-title')
  var slick_content = $('.slick-content')

  slick.on('init', function(){
    slick_title.addClass('slick-title-show');
  });

  slick.on('init', function(){
    slick_content.addClass('slick-content-show');
  });

  slick.slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
    nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
  });

  slick.on('beforeChange', function(){
    slick_title.removeClass('slick-title-show');
  });
  slick.on('beforeChange', function(){
    slick_content.removeClass('slick-content-show');
  });

  slick.on('afterChange', function(){
    slick_title.addClass('slick-title-show');
  });
  slick.on('afterChange', function(){
    slick_content.addClass('slick-content-show');
  });

});