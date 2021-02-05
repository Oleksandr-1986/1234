new Swiper('.image-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: true,
   slideToClickedSlide: true,
   keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   autoHeight: true,
   slidesPerView: 'auto',
   watchOverflow: true,
   spaceBetween: 0,
   slidesPerGroup: 1,
   centeredSlides: true,
   initialSlide: 0,
   loop: true,
   loopedSlides: 3,
   freeMode: true,

   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,

});

