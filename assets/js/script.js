$(document).ready(function () {
  $(".slick-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    nextArrow:
      '<button class="slider-next"><i class="fa-solid fa-arrow-left"></i></button>',
    prevArrow:
      '<button class="slider-prev"><i class="fa-solid fa-arrow-right"></i></button>',
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          variableWidth: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",

        },
      },
    ],
  });

  $('.counter').counterUp({
    delay:10,
    time:1600
});

AOS.init({

  duration: 1300,
  delay:60,
});



});
