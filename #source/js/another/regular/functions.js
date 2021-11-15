var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
   ua = navigator.userAgent;
   var isIe = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return isIe;
}
if (isIE()) {
   document.querySelector('body').classList.add('_ie');
}
if (isMobile.any()) {
   document.querySelector('body').classList.add('_touch');
   // dropDownArrow();
} else {
   document.querySelector('body').classList.add('_mouse');
}
//ibg=================================================================================================================================================================================================================
// function ibg() {
//    if (isIE()) {
//       let ibg = document.querySelectorAll("._ibg");
//       for (var i = 0; i < ibg.length; i++) {
//          if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
//             ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
//          }
//       }
//    }
// }
// ibg();
// let unlock = true;
//====================================================================================================================================================================================================================
// function offset(el) {
//    let rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }
//Author==============================================================================================================================================================================================================
console.log('Сайт разработан Mr.Corvo\nhttps://www.weblancer.net/users/MrCorvo/');
//ActionsOnHash=======================================================================================================================================================================================================
// if (location.hash) {
//    const hsh = location.hash.replace('#', '');
//    if (document.querySelector('.popup_' + hsh)) {
//       popupOpen(hsh);
//    }
// }
//Burger==============================================================================================================================================================================================================
// let burgers = document.querySelectorAll(".header__burger,._close-zone");
// if (burgers != null) {
//    let delay = 500;
//    let menu = document.querySelector(".menu");
//    for (let index = 0; index < burgers.length; index++) {
//       const burger = burgers[index];
//       burger.addEventListener("click", function (e) {
//          if (unlock) {
//             bodyLock(delay);
//             burger.classList.toggle("_active");
//             menu.classList.toggle("_active");
//          }
//       });
//    }
// };
//====================================================================================================================================================================================================================
// function stickyHeader() {
//    let newScrollPosition = 0;
//    let lastScrollPosition;
//    body.classList.add("_no-sticky");
//    header.classList.add("_no-sticky");
//    let headerHeigth;
//    window.addEventListener('scroll', function (e) {
//       lastScrollPosition = window.scrollY;
//       if (document.querySelector('.header._no-sticky')) {
//          headerHeigth = document.querySelector('.header._no-sticky').offsetHeight;
//       }
//       if (newScrollPosition < lastScrollPosition) {
//          if (pageYOffset > headerHeigth) {
//             body.classList.remove("_no-sticky");
//             body.classList.add("_sticky");
//             header.classList.remove("_no-sticky");
//             header.classList.add("_sticky");
//          }
//       } else if (newScrollPosition > lastScrollPosition) {
//          body.classList.remove("_sticky");
//          body.classList.add("_no-sticky");
//          header.classList.remove("_sticky");
//          header.classList.add("_no-sticky");
//       }
//       newScrollPosition = lastScrollPosition;
//    });
// }
// stickyHeader();
//BodyLock============================================================================================================================================================================================================
// function bodyLock(delay) {
//    if (body.classList.contains('_lock')) {
//       bodyLockRemove(delay);
//    } else {
//       bodyLockAdd(delay);
//    }
// }
// function bodyLockRemove(delay) {
//    if (unlock) {
//       let lockPadding = document.querySelectorAll("._lp");
//       setTimeout(() => {
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//          }
//          body.style.paddingRight = '0px';
//          body.classList.remove("_lock");
//       }, delay);

//       unlock = false;
//       setTimeout(function () {
//          unlock = true;
//       }, delay);
//    }
// }
// function bodyLockAdd(delay) {
//    if (unlock) {
//       let lockPadding = document.querySelectorAll("._lp");
//       for (let index = 0; index < lockPadding.length; index++) {
//          const el = lockPadding[index];
//          el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//       }
//       body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
//       body.classList.add("_lock");

//       unlock = false;
//       setTimeout(function () {
//          unlock = true;
//       }, delay);
//    }
// }
//Tabs================================================================================================================================================================================================================
// let tabs = document.querySelectorAll("._tabs");
// for (let index = 0; index < tabs.length; index++) {
//    let tab = tabs[index];
//    let tabsItems = tab.querySelectorAll("._tabs-item");
//    let tabsBlocks = tab.querySelectorAll("._tabs-content");
//    for (let index = 0; index < tabsItems.length; index++) {
//       let tabsItem = tabsItems[index];
//       tabsItem.addEventListener("click", function (e) {
//          for (let index = 0; index < tabsItems.length; index++) {
//             let tabsItem = tabsItems[index];
//             tabsItem.classList.remove('_active');
//             tabsBlocks[index].classList.remove('_active');
//          }
//          tabsItem.classList.add('_active');
//          tabsBlocks[index].classList.add('_active');
//          e.preventDefault();
//       });
//    }
// }
//Spollers============================================================================================================================================================================================================
// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {
//    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//       return !item.dataset.spollers.split(",")[0];
//    });
//    if (spollersRegular.length > 0) {
//       initSpollers(spollersRegular);
//    }

//    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//       return item.dataset.spollers.split(",")[0];
//    });

//    if (spollersMedia.length > 0) {
//       const breakpointsArray = [];
//       spollersMedia.forEach(item => {
//          const params = item.dataset.spollers;
//          const breakpoint = {};
//          const paramsArray = params.split(",");
//          breakpoint.value = paramsArray[0];
//          breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
//          breakpoint.item = item;
//          breakpointsArray.push(breakpoint);
//       });

//       let mediaQueries = breakpointsArray.map(function (item) {
//          return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
//       });
//       mediaQueries = mediaQueries.filter(function (item, index, self) {
//          return self.indexOf(item) === index;
//       });

//       mediaQueries.forEach(breakpoint => {
//          const paramsArray = breakpoint.split(",");
//          const mediaBreakpoint = paramsArray[1];
//          const mediaType = paramsArray[2];
//          const matchMedia = window.matchMedia(paramsArray[0]);

//          const spollersArray = breakpointsArray.filter(function (item) {
//             if (item.value === mediaBreakpoint && item.type === mediaType) {
//                return true;
//             }
//          });
//          matchMedia.addListener(function () {
//             initSpollers(spollersArray, matchMedia);
//          });
//          initSpollers(spollersArray, matchMedia);
//       });
//    }
//    function initSpollers(spollersArray, matchMedia = false) {
//       spollersArray.forEach(spollersBlock => {
//          spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//          if (matchMedia.matches || !matchMedia) {
//             spollersBlock.classList.add('_init');
//             initSpollerBody(spollersBlock);
//             spollersBlock.addEventListener("click", setSpollerAction);
//          } else {
//             spollersBlock.classList.remove('_init');
//             initSpollerBody(spollersBlock, false);
//             spollersBlock.removeEventListener("click", setSpollerAction);
//          }
//       });
//    }
//    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//       const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//       if (spollerTitles.length > 0) {
//          spollerTitles.forEach(spollerTitle => {
//             if (hideSpollerBody) {
//                spollerTitle.removeAttribute('tabindex');
//                if (!spollerTitle.classList.contains('_active')) {
//                   spollerTitle.nextElementSibling.hidden = true;
//                }
//             } else {
//                spollerTitle.setAttribute('tabindex', '-1');
//                spollerTitle.nextElementSibling.hidden = false;
//             }
//          });
//       }
//    }
//    function setSpollerAction(e) {
//       const el = e.target;
//       if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//          const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//          const spollersBlock = spollerTitle.closest('[data-spollers]');
//          const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//          if (!spollersBlock.querySelectorAll('._slide').length) {
//             if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//                hideSpollersBody(spollersBlock);
//             }
//             spollerTitle.classList.toggle('_active');
//             _slideToggle(spollerTitle.nextElementSibling, 500);
//          }
//          e.preventDefault();
//       }
//    }
//    function hideSpollersBody(spollersBlock) {
//       const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//       if (spollerActiveTitle) {
//          spollerActiveTitle.classList.remove('_active');
//          _slideUp(spollerActiveTitle.nextElementSibling, 500);
//       }
//    }
// }
//Popups==============================================================================================================================================================================================================
// let popupLink = document.querySelectorAll('._popup-link');
// let popups = document.querySelectorAll('.popup');
// for (let index = 0; index < popupLink.length; index++) {
//    const el = popupLink[index];
//    el.addEventListener('click', function (e) {
//       if (unlock) {
//          let item = el.getAttribute('href').replace('#', '');
//          let video = el.getAttribute('data-video');
//          popupOpen(item, video);
//       }
//       e.preventDefault();
//    })
// }
// for (let index = 0; index < popups.length; index++) {
//    const popup = popups[index];
//    popup.addEventListener("click", function (e) {
//       if (!e.target.closest('.popup__body')) {
//          popup_close(e.target.closest('.popup'));
//       }
//    });
// }
// function popupOpen(item, video = '') {
//    let activePopup = document.querySelectorAll('.popup._active');
//    if (activePopup.length > 0) {
//       popup_close('', false);
//    }
//    let curentPopup = document.querySelector('.popup_' + item);
//    if (curentPopup && unlock) {
//       if (video != '' && video != null) {
//          let popupVideo = document.querySelector('.popupVideo');
//          popupVideo.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
//       }
//       if (!document.querySelector('.menu__body._active')) {
//          bodyLockAdd(500);
//       }
//       curentPopup.classList.add('_active');
//       let historyPopup = document.querySelectorAll('.popup._history');
//       if (historyPopup.length > 0) {
//          history.pushState('', '', '#' + item);
//       }
//    }
// }
// function popup_close(item, bodyUnlock = true) {
//    if (unlock) {
//       if (!item) {
//          for (let index = 0; index < popups.length; index++) {
//             const popup = popups[index];
//             let video = popup.querySelector('.popup__video');
//             if (video) {
//                video.innerHTML = '';
//             }
//             popup.classList.remove('_active');
//          }
//       } else {
//          let video = item.querySelector('.popup__video');
//          if (video) {
//             video.innerHTML = '';
//          }
//          item.classList.remove('_active');
//       }
//       if (!document.querySelector('.menu._active') && bodyUnlock) {
//          bodyLockRemove(500);
//       }
//       let historyPopup = document.querySelectorAll('.popup._history');
//       if (historyPopup.length > 0) {
//          history.pushState('', '', window.location.href.split('#')[0]);
//       }
//    }
// }
// let popupCloseIcon = document.querySelectorAll('.popup__close,._popup-close');
// if (popupCloseIcon) {
//    for (let index = 0; index < popupCloseIcon.length; index++) {
//       const el = popupCloseIcon[index];
//       el.addEventListener('click', function () {
//          popup_close(el.closest('.popup'));
//       })
//    }
// }
// document.addEventListener('keydown', function (e) {
//    if (e.which == 27) {
//       popup_close();
//    }
// });
//SlideToggle=========================================================================================================================================================================================================
// let _slideUp = (target, duration = 500) => {
//    if (!target.classList.contains('_slide')) {
//       target.classList.add('_slide');
//       target.style.transitionProperty = 'height, margin, padding';
//       target.style.transitionDuration = duration + 'ms';
//       target.style.height = target.offsetHeight + 'px';
//       target.offsetHeight;
//       target.style.overflow = 'hidden';
//       target.style.height = 0;
//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;
//       window.setTimeout(() => {
//          target.hidden = true;
//          target.style.removeProperty('height');
//          target.style.removeProperty('padding-top');
//          target.style.removeProperty('padding-bottom');
//          target.style.removeProperty('margin-top');
//          target.style.removeProperty('margin-bottom');
//          target.style.removeProperty('overflow');
//          target.style.removeProperty('transition-duration');
//          target.style.removeProperty('transition-property');
//          target.classList.remove('_slide');
//       }, duration);
//    }
// }
// let _slideDown = (target, duration = 500) => {
//    if (!target.classList.contains('_slide')) {
//       target.classList.add('_slide');
//       if (target.hidden) {
//          target.hidden = false;
//       }
//       let height = target.offsetHeight;
//       target.style.overflow = 'hidden';
//       target.style.height = 0;
//       target.style.paddingTop = 0;
//       target.style.paddingBottom = 0;
//       target.style.marginTop = 0;
//       target.style.marginBottom = 0;
//       target.offsetHeight;
//       target.style.transitionProperty = "height, margin, padding";
//       target.style.transitionDuration = duration + 'ms';
//       target.style.height = height + 'px';
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       window.setTimeout(() => {
//          target.style.removeProperty('height');
//          target.style.removeProperty('overflow');
//          target.style.removeProperty('transition-duration');
//          target.style.removeProperty('transition-property');
//          target.classList.remove('_slide');
//       }, duration);
//    }
// }
// let _slideToggle = (target, duration = 500) => {
//    if (target.hidden) {
//       return _slideDown(target, duration);
//    } else {
//       return _slideUp(target, duration);
//    }
// }
//IsHidden============================================================================================================================================================================================================
// function isHidden(el) {
//    return (el.offsetParent === null)
// }
//Полифилы============================================================================================================================================================================================================
(function () {
   // проверяем поддержку
   if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // проверяем поддержку
   if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();
//====================================================================================================================================================================================================================
// function InitMoreFunction() {

// }
//====================================================================================================================================================================================================================
// function dropDownArrow() {
//    let arrow = document.querySelectorAll('._arrow');
//    for (i = 0; i < arrow.length; i++) {
//       let thisLink = arrow[i].previousElementSibling;
//       let subMenu = arrow[i].nextElementSibling;
//       let thisArrow = arrow[i];

//       thisLink.classList.add('_parent');
//       arrow[i].addEventListener('click', function () {
//          subMenu.classList.toggle('_open');
//          thisArrow.classList.toggle('_active');
//       });
//    }
// }
//====================================================================================================================================================================================================================
// function smoothScrolling() {
//    let doobleClickForSmoothScrolling = true;
//    links = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');
//    for (let index = 0; index < links.length; index++) {
//       const link = links[index];
//       link.addEventListener('click', function (event) {
//          if (doobleClickForSmoothScrolling === true) {
//             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                let targets = document.querySelectorAll(this.hash);
//                targets = targets.length ? targets : document.querySelectorAll('[name=' + this.hash.slice(1) + ']');
//                if (targets.length) {
//                   for (let index = 0; index < targets.length; index++) {
//                      const target = targets[index];
//                      event.preventDefault();
//                      function smoothAnimateScroll(header) {
//                         gsap.to(window, { duration: 0.500, scrollTo: offset(target).top - header });
//                      }
//                      if (document.querySelector('.header').classList.contains('_has-space') && document.querySelector('.header').classList.contains('_no-sticky') && pageYOffset == Math.floor(offset(document.querySelector(this.getAttribute("href"))).top - headerHeigth) || document.querySelector('.header').classList.contains('_has-space') && document.querySelector('.header').classList.contains('_sticky') && pageYOffset == Math.floor(offset(document.querySelector(this.getAttribute("href"))).top - headerStickyHeigth)) {
//                         // console.log("тут");
//                      } else if (document.querySelector('.header').classList.contains('_no-sticky') && pageYOffset + headerHeigth > offset(target).top || document.querySelector('.header').classList.contains('_sticky') && pageYOffset + headerStickyHeigth > offset(target).top) {
//                         // console.log("выше");
//                         smoothAnimateScroll(headerHeigth);
//                      } else if (pageYOffset < offset(target).top) {
//                         // console.log("ниже");
//                         smoothAnimateScroll(headerStickyHeigth);
//                      } else {
//                         // console.log("без");
//                         gsap.to(window, { duration: 0.500, scrollTo: offset(target).top });
//                      }
//                   }
//                }
//             }
//          }
//          if (doobleClickForSmoothScrolling === false) {
//             event.preventDefault();
//          }
//          doobleClickForSmoothScrolling = false;
//          setTimeout(() => {
//             doobleClickForSmoothScrolling = true;
//          }, 600);
//       });
//    }
//    headerLinks = document.querySelectorAll('a.menu__link[href*="#"]:not([href="#"]):not([href="#0"])');
//    for (let index = 0; index < headerLinks.length; index++) {
//       const headerLink = headerLinks[index];
//       headerLink.addEventListener('click', function () {
//          if (unlock) {
//             if (document.querySelector(".menu").classList.contains('_active')) {
//                bodyLock(500);
//                document.querySelector(".header__burger").classList.remove("_active");
//                document.querySelector(".menu").classList.remove("_active");
//             }
//          }
//       });
//    }
// }
// smoothScrolling();
//====================================================================================================================================================================================================================
// function PerfectFullScreen() {
//    window.addEventListener('DOMContentLoaded', (event) => {
//       let currentElements = document.querySelectorAll("[data-vh]");
//       if (currentElements) {
//          for (let index = 0; index < currentElements.length; index++) {
//             const currentElement = currentElements[index];
//             let vh = window.innerHeight;
//             if (document.querySelector('.header').classList.contains("_-vh")) {
//                const headerHeigth = document.querySelector('.header').offsetHeight;
//                let curretValue = ((vh * 0.01) * currentElement.getAttribute('data-vh')) - ((headerHeigth * 0.01) * currentElement.getAttribute('data-vh'));
//                currentElement.style.setProperty('min-height', `${curretValue}px`);
//                window.addEventListener('resize', () => {
//                   let vh = window.innerHeight;
//                   let curretValue = ((vh * 0.01) * currentElement.getAttribute('data-vh')) - ((headerHeigth * 0.01) * currentElement.getAttribute('data-vh'));
//                   currentElement.style.setProperty('min-height', `${curretValue}px`);
//                });
//             } else {
//                let curretValue = (vh * 0.01) * currentElement.getAttribute('data-vh');
//                currentElement.style.setProperty('min-height', `${curretValue}px`);
//                window.addEventListener('resize', () => {
//                   let vh = window.innerHeight;
//                   let curretValue = (vh * 0.01) * currentElement.getAttribute('data-vh');
//                   currentElement.style.setProperty('min-height', `${curretValue}px`);
//                });
//             }
//          }
//       }
//    });
// }
// PerfectFullScreen();
//====================================================================================================================================================================================================================
// function formatter(number, min = 0, max = 2) {
//    let formatter = new Intl.NumberFormat('en-US', {
//       minimumFractionDigits: min,
//       maximumFractionDigits: max,
//    });

//    return formatter.format(number);
// };
//====================================================================================================================================================================================================================