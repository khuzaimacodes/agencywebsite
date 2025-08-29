export const sliderProps = {
  projectSlider: {
    loop: true,
    speed: 1000,
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1, 
        spaceBetween: 15,
        centeredSlides: true,
        initialSlide: 0,
        loop: true
      },
      576: { 
        slidesPerView: 1, 
        centeredSlides: true, 
        spaceBetween: 20,
        initialSlide: 0,
        loop: true
      },
      768: { 
        slidesPerView: 2, 
        spaceBetween: 25,
        centeredSlides: false,
        initialSlide: 0,
        loop: true
      },
      992: { 
        slidesPerView: 3, 
        spaceBetween: 30,
        centeredSlides: false,
        initialSlide: 0,
        loop: true
      },
      1200: { 
        slidesPerView: 4, 
        spaceBetween: 30,
        centeredSlides: false,
        initialSlide: 0,
        loop: true
      },
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
  },
};
