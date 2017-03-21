$(document).ready(function () {

  var $slider = $('.slider');
  var $sliderText = $('.slider-text');
  var whichWay = true;
  var interval;

  $('.wrapper, .wrapper-text').on('mouseenter', stopSlider).on('mouseleave', startSlider);
  $('.next').on('click', animateSlides);

  startSlider();

  function animateSlides () {
    if (whichWay === true) {
      $slider.addClass('animation-img');
      $slider.removeClass('animation-img-rev');
      $sliderText.addClass('animation-text');
      $sliderText.removeClass('animation-text-rev');
      whichWay = false;
    }
    else {
      $slider.addClass('animation-img-rev');
      $slider.removeClass('animation-img');
      $sliderText.addClass('animation-text-rev');
      $sliderText.removeClass('animation-text');
      whichWay = true;
    }
  }

  function stopSlider() {
    clearInterval(interval);
  }

  function startSlider() {
    interval = setInterval(animateSlides, 3000);
  }
});
