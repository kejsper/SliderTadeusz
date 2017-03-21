$(document).ready(function () {

  var $slider = $('.slider');
  var $sliderText = $('.slider-text');
  var whichWay = true;
  var interval;

  $('.wrapper, .wrapper-text').on('mouseenter', stopSlider).on('mouseleave', startSlider);
  $('.next').on('click', animateSlides);

  prepareSlides();
  startSlider();

  function prepareSlides() {
    var $setTextDiv = $('#slide-text-1');
    var $moveClear = $('#clear');
    $setTextDiv.clone().appendTo($sliderText);
    $moveClear.clone().appendTo($sliderText);
    $setTextDiv.remove();
    $moveClear.remove();
    $sliderText.css('margin-left', -640);
  }

  function animateSlides () {
    if (whichWay === true) {
      $slider.animate({'margin-left': '-=640'}, 1000);
      $sliderText.animate({'margin-left': '+=640'}, 1000);
      whichWay = false;
    }
    else {
      $slider.animate({'margin-left': '+=640'}, 1000);
      $sliderText.animate({'margin-left': '-=640'}, 1000);
      whichWay = true;
    }
  }

  function stopSlider() {
    clearInterval(interval);
  }

  function startSlider() {
    interval = setInterval(animateSlides, 4000);
  }
});
