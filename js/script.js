//slider
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

//video
$(document).ready(function () {

   $('.video__icon').click(function () {
      $(this).hide();
      $('.video-yt').attr('src', 'https://www.youtube.com/embed/AWKzr6n0ea0?autoplay=1');
   });

});
//calendar

function Calendar(id, year, month) {
   var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = '<tr>',
      month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   if (DNfirst != 0) {
      for (var i = 1; i < DNfirst; i++) calendar += '<td>';
   } else {
      for (var i = 0; i < 6; i++) calendar += '<td>';
   }
   for (var i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
         calendar += '<td class="today">' + i;
      } else {
         calendar += '<td>' + i;
      }
      if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
         calendar += '<tr>';
      }
   }
   for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
   document.querySelector('#' + id + ' tbody').innerHTML = calendar;
   document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
   document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
   document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
   if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
   }
}
Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
   Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
   Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
}