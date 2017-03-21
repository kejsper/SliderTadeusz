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
      $sliderText.animate({'margin-left': '-=640'}, 400).promise().done(function(){
        $slider.animate({'margin-left': '-=640'}, 600);
      });

      whichWay = false;
    }
    else {
      $slider.animate({'margin-left': '+=640'}, 400).promise().done(function() {
        $sliderText.animate({'margin-left': '+=640'}, 600);
      });
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
