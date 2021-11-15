// _gallery
// _gallery-item
// API https://www.lightgalleryjs.com/docs/getting-started/
/* <a href="img/01.jpg" class="gallery-block-1__item _gallery-item">
   <img class='lazyload' alt="01 img/01.jpg" src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' data-src='img/01.jpg' alt='' />
</a> */
let _galleryItems = document.querySelectorAll('._gallery-item');
for (let index = 0; index < _galleryItems.length; index++) {
   const _galleryItem = _galleryItems[index];
   _galleryItem.setAttribute('data-src', _galleryItem.querySelector("img").getAttribute('data-src'));
}
lightGallery(document.querySelector('._gallery'), {
   selector: '._gallery-item',
   plugins: [lgZoom, lgThumbnail, lgFullscreen],
   speed: 250,
   // Продолжительность перехода фона
   backdropDuration: 250,
   // Значок загрузки
   download: false,
   // Атрибут миниатюр 
   exThumbImage: 'data-src',
   // Управление мышью
   mousewheel: true,
   mobileSettings: {

   },
   // Первый слайд
   // index: 0,
   // Убрать инструменты через
   // hideBarsDelay: 1000,

   // Миниатюры
   // Добавить миниатюры в 
   // appendThumbnailsTo: ".block",
   // currentPagerPosition: middle,
   // thumbMargin: 5,
   // thumbWidth: 100,

   fullScreen: true,
});
// thumbWidth