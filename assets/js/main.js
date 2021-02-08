$(document).ready(function () {
  // choses-slider

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".testemonia-cards-slider").length) {
    $(".testemonia-cards-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl: currentDir == "rtl" ? true : false,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var swiper = new Swiper(".swiper-container.two", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
  });
});
