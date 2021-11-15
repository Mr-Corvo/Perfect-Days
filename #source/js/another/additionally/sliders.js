//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.parentElement.classList.contains('swiper-bild')) {
         let sliderItems = slider.children;
         slider.parentElement.classList.add('swiper-container');
         if (sliderItems) {
            for (let index = 0; index < sliderItems.length; index++) {
               let el = sliderItems[index];
               el.classList.add('swiper-slide');
            }
         }
         if (!slider.parentElement.classList.contains('_swiper-controll')) {
            slider.parentElement.insertAdjacentElement('afterend', slider.parentElement.querySelector('._swp-arrow-r'));
            slider.parentElement.insertAdjacentElement('afterend', slider.parentElement.querySelector('._swp-arrow-l'));
            slider.parentElement.insertAdjacentElement('afterend', slider.parentElement.querySelector('._swp-pagging'));
         }
         slider.parentElement.classList.add('swiper-bild');
         slider.classList.add('swiper-wrapper');
      }
   }
   let swiperSlider = new Swiper('.swiper-block-2__container', {
      centeredSlides: true,
      // autoHeight: true,
      // direction: 'horizontal',
      effect: 'slide',
      // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
      // freeMode: true,
      grabCursor: true,
      // nested: true,
      observer: true,
      observeParents: true,
      // observeSlideChildren: true,
      // preloadImages: false,
      //simulateTouch: false,
      // slidesPerColumn: 2,
      // slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30,
      // speed: 150
      loop: true,


      pagination: {
         el: '._swp-pagging',
         clickable: true,
         dynamicBullets: true,
         // dynamicMainBullets: 3,
         // type: "progressbar",
         // 'bullets' | 'fraction' | 'progressbar' | 'custom'
         // renderBullet: function (index, className) {
         //    return '<span class="' + className + '">' + (index + 1) + "</span>";
         // },
      },
      navigation: {
         nextEl: '._swp-arrow-r',
         prevEl: '._swp-arrow-l',
      },
      scrollbar: {
         el: "._swp-scroll-bar",
         draggable: true,
         // dragSize: 50,
         // snapOnRelease: true,
      },
      // autoplay: {
      //    delay: 1500,
      //    disableOnInteraction: false,
      //    pauseOnMouseEnter: true,
      //    // stopOnLastSlide: true,
      // },
      keyboard: {
         enabled: true,
         // onlyInViewport: false,
      },
      mousewheel: {
         // invert: true,
      },
      // scrollbar: {
      //    el: "._swp-scroll-bar",
      //    draggable: true,
      // },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         479.98: {
            slidesPerView: 2,
         },
         767.98: {
            slidesPerView: 3,
         },
         991.98: {
            slidesPerView: 4,
         }
      },
      on: {
         lazyImageReady: function () {
            ibg();
         },
      }
   });
}
//Slick
// $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//    console.log(nextSlide)
// });
// $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//    console.log(currentSlide)
// });
//перезагрузить слайд
//$('.slider').slick('setPosition');
//Пролистнуть до слайда
//$('.slider').slick('goTo', 2);
//листнуть
// $('.slider').slick('slickPrev');
// $('.slider').slick('slickNext');
//Остоновить или запустить
// $('.slider').slick('slickPause');
// $('.slider').slick('slickPlay');
// $('.add').click(function (event) {
//    $('.slider').slick('slickAdd', '<div class="slider__item">< img src = "img/slides/01.jpg" alt = "" /></div >');
//    return false;
// });
// $('.remove').click(function (event) {
//    $('.slider').slick('slickRemove', 0);
//    return false;
// });
// var filtered = false;
// $('.filter').on('click', function(){
//    if (filtered === false) {
//       $('.slider').slick('slickFilter','filter');
//       $(this).text('del');
//       filtered = true;
//    } else {
//       $('.slider').slick('slickUnfilter');
//       $(this).text('filter');
//       filtered = false;
//    }
//    return false;
// });
// $('.slider').slick({
//    //Переместить стрелки или точки
//    //appendArrows:$('.arrow'),
//    //appendDots:$('.arrow'),
//    //Стрелки
//    arrows: true,
//    //Точки
//    dots: true,
//    //Адаптивная высота
//    // adaptiveHeight: true,
//    //Сколько слайдов будет видно
//    slidesToShow: 3,
//    //По сколько слайдов будет скролиться
//    slidesToScroll: 3,
//    //Скорость прокрутки
//    // speed: 300,
//    //Тип анимации
//    // easing:'linear',
//    //Будут ли слайды бесконечные
//    infinite: true,
//    //Какой слайд будет первый
//    // initialSlide: 0,
//    //Автопроигрывание
//    // autoplay: true,
//    //Скорость задержики на слайдах
//    // autoplaySpeed: 3000,
//    //Остонавливать автопроигрывание при
//    // pauseOnFocus: true,
//    // pauseOnHover: true,
//    // pauseOnDotsHover: true,
//    //Свайп на пк
//    draggabel: true,
//    //Свайп на телефоне
//    // swipe: true,
//    //Сколько нужно просвайпить для скрола
//    // touchThreshold: 5,
//    //Нельзя передвигать а свайпить можно
//    // touchMove: true,
//    //Ждать конца анимации
//    waitForAnimate: false,
//    //Центрирование
//    //centerMode: true,
//    //Исходная ширина
//    //variableWidth: true,
//    //Ряды
//    // rows: 1,
//    //Сколько слайдов в ряду
//    // slidesPerRow: 1,
//    //Вертикальный слайдерб слудует указать фикированую ширину для слайдов
//    //vertical: true,
//    //
//    //verticalSwiping: true,
//    //Связать слайдоры
//    // asNavFor: ".sliderbig",
//    //Красивое слайдшоу
//    // fade: true,
//    //Метод
//    //mobileFirst: true,
//    //Адаптив
//    responsive:[
//       {
//          breakpoint: 991.98,
//          settings: {
//             slidesToShow: 2,
//          }
//       },
//       {
//          breakpoint: 767.98,
//          settings: {
//             slidesToShow: 2,
//          }
//       },
//       {
//          breakpoint: 479.98,
//          settings: {
//             slidesToShow: 1,
//          }
//       },

//    ],
// });