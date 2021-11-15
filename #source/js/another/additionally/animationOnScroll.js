// ._anim-items
// ._anim-no-hide
// ._anim-item-show
var initMore = true;
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemId = animItem.getAttribute('id');

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (document.querySelector('.header').classList.contains('_no-sticky')) {
            setTimeout(() => {
               const headerHeigth = document.querySelector('.header').offsetHeight;
               if ((pageYOffset + headerHeigth + 1 > animItemOffset) && pageYOffset + headerHeigth + 2 < (animItemOffset + animItemHeight)) {
                  let links = document.querySelectorAll('a[href="#' + animItemId + '"]');
                  for (let index = 0; index < links.length; index++) {
                     const link = links[index];
                     link.classList.add('_active');
                  }
               } else {
                  let links = document.querySelectorAll('a[href="#' + animItemId + '"]');
                  for (let index = 0; index < links.length; index++) {
                     const link = links[index];
                     link.classList.remove('_active');
                  }
               }
            }, 100);
         }

         if (document.querySelector('.header').classList.contains('_sticky')) {
            setTimeout(() => {
               const headerStickyHeigth = document.querySelector('.header').offsetHeight;
               if ((pageYOffset + headerStickyHeigth + 1 > animItemOffset) && pageYOffset + headerStickyHeigth + 2 < (animItemOffset + animItemHeight)) {
                  let links = document.querySelectorAll('a[href="#' + animItemId + '"]');
                  for (let index = 0; index < links.length; index++) {
                     const link = links[index];
                     link.classList.add('_active');
                  }
               } else {
                  let links = document.querySelectorAll('a[href="#' + animItemId + '"]');
                  for (let index = 0; index < links.length; index++) {
                     const link = links[index];
                     link.classList.remove('_active');
                  }
               }
            }, 100);
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            if (initMore == true) {
               //!
               // InitMoreFunction();
            }
            initMore = false;
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}