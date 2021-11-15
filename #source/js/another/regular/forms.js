function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
   for (let index = 0; index < forms.length; index++) {
      const el = forms[index];
      el.addEventListener('submit', formSubmit);
   }
}
async function formSubmit(e) {
   let btn = e.target;
   let form = btn.closest('form');
   let message = form.getAttribute('data-message');
   let error = formValidate(form);

   if (error == 0) {
      let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
      let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
      const message = form.getAttribute('data-message');
      const ajax = form.getAttribute('data-ajax');      
      if (ajax) {
         e.preventDefault();
         let formData = new FormData(form);
         // formData.append('image', formImage.files[0]);
         form.classList.add('_sending');
         let response = await fetch(formAction, {
            method: formMethod,
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            // formPreview.innerHTML = '';
            form.classList.remove('_sending');
            if (message) {
               popupOpen('message-' + message);
            }
            formClean(form);
         } else {
            alert("Ошибка");
            form.classList.remove('_sending');
         }
      } else if (message) {
         popupOpen('message-' + message);
         e.preventDefault();
      }     
   } else {
      event.preventDefault();
   }
}
function formValidate(form) {
   let error = 0;
   let formReq = form.querySelectorAll('._req');
   if (formReq.length > 0) {
      for (let index = 0; index < formReq.length; index++) {
         const el = formReq[index];
         if (!isHidden(el)) {
            error += formValidateInput(el);
         }
      }
   }
   return error;
}
function formValidateInput(input) {
   let error = 0;
   let inputDataValue = input.getAttribute('data-value');

   if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
      if (input.value != inputDataValue) {
         let em = input.value.replace(" ", "");
         input.value = em;
      }
      if (emailTest(input) || input.value == inputDataValue) {
         formAddError(input);
         error++;
      } else {
         formRemoveError(input);
      }
   } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      formAddError(input);
      error++;
   } else {
      if (input.value == '' || input.value == inputDataValue) {
         formAddError(input);
         error++;
      } else {
         formRemoveError(input);
      }
   }
   return error;
}
function formAddError(input) {
   input.classList.add('_error');
   input.parentElement.classList.add('_error');

   let inputError = input.parentElement.querySelector('.form__error');
   if (inputError) {
      input.parentElement.removeChild(inputError);
   }
   let inputError_text = input.getAttribute('data-error');
   if (inputError_text && inputError_text != '') {
      input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + inputError_text + '</div>');
   }
}
function formRemoveError(input) {
   input.classList.remove('_error');
   input.parentElement.classList.remove('_error');

   let inputError = input.parentElement.querySelector('.form__error');
   if (inputError) {
      input.parentElement.removeChild(inputError);
   }
}
function formClean(form) {
   let inputs = form.querySelectorAll('input,textarea');
   for (let index = 0; index < inputs.length; index++) {
      const el = inputs[index];
      el.parentElement.classList.remove('_focus');
      el.classList.remove('_focus');
      el.value = el.getAttribute('data-value');
   }
   let checkboxes = form.querySelectorAll('.check');
   if (checkboxes.length > 0) {
      for (let index = 0; index < checkboxes.length; index++) {
         const checkbox = checkboxes[index];
         checkbox.checked = false;
      }
   }
   let selects = form.querySelectorAll('select');
   if (selects.length > 0) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const selectDefaultValue = select.getAttribute('data-default');
         select.value = selectDefaultValue;
         selectItem(select);
      }
   }
}
let viewPass = document.querySelectorAll('._view-pass');
for (let index = 0; index < viewPass.length; index++) {
   const element = viewPass[index];
   element.addEventListener("click", function (e) {
      if (element.classList.contains('_active')) {
         element.parentElement.querySelector('input').setAttribute("type", "password");
      } else {
         element.parentElement.querySelector('input').setAttribute("type", "text");
      }
      element.classList.toggle('_active');
   });
}
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
   selectsInit();
}
function selectsInit() {
   for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      selectInit(select);
   }
   //select_callback();
   document.addEventListener('click', function (e) {
      selectsClose(e);
   });
   document.addEventListener('keydown', function (e) {
      if (e.which == 27) {
         selectsClose(e);
      }
   });
}
function selectsClose(e) {
   const selects = document.querySelectorAll('.select');
   if (!e.target.closest('.select')) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const selectBodyOptions = select.querySelector('.select__options');
         select.classList.remove('_active');
         _slideUp(selectBodyOptions, 100);
      }
   }
}
function selectInit(select) {
   const selectParent = select.parentElement;
   const selectModifikator = select.getAttribute('class');
   const selectSelectedOption = select.querySelector('option:checked');
   select.setAttribute('data-default', selectSelectedOption.value);
   select.style.display = 'none';

   selectParent.insertAdjacentHTML('beforeend', '<div class="select select_' + selectModifikator + '"></div>');

   let newSelect = select.parentElement.querySelector('.select');
   newSelect.appendChild(select);
   selectItem(select);
}
function selectItem(select) {
   const selectParent = select.parentElement;
   const selectItems = selectParent.querySelector('.select__item');
   const selectOptions = select.querySelectorAll('option');
   const selectSelectedOption = select.querySelector('option:checked');
   const selectSelectedText = selectSelectedOption.text;
   const selectType = select.getAttribute('data-type');

   if (selectItems) {
      selectItems.remove();
   }

   let selectType_content = '';
   if (selectType == 'input') {
      selectType_content = '<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="' + selectSelectedText + '" data-error="Ошибка" data-value="' + selectSelectedText + '" class="select__input"></div>';
   } else {
      selectType_content = '<div class="select__value"><span>' + selectSelectedText + '</span></div>';
   }

   selectParent.insertAdjacentHTML('beforeend',
      '<div class="select__item">' +
      '<div class="select__title">' + selectType_content + '</div>' +
      '<div class="select__options">' + selectGetOptions(selectOptions) + '</div>' +
      '</div></div>');

   select_actions(select, selectParent);
}
function select_actions(original, select) {
   const selectItem = select.querySelector('.select__item');
   const selectBodyOptions = select.querySelector('.select__options');
   const selectOptions = select.querySelectorAll('.select__option');
   const selectType = original.getAttribute('data-type');
   const selectInput = select.querySelector('.select__input');

   selectItem.addEventListener('click', function () {
      let selects = document.querySelectorAll('.select');
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const selectBodyOptions = select.querySelector('.select__options');
         if (select != selectItem.closest('.select')) {
            select.classList.remove('_active');
            _slideUp(selectBodyOptions, 100);
         }
      }
      _slideToggle(selectBodyOptions, 100);
      select.classList.toggle('_active');
   });

   for (let index = 0; index < selectOptions.length; index++) {
      const selectOption = selectOptions[index];
      const selectOptionValue = selectOption.getAttribute('data-value');
      const selectOptionText = selectOption.innerHTML;

      if (selectType == 'input') {
         selectInput.addEventListener('keyup', selectSearch);
      } else {
         if (selectOption.getAttribute('data-value') == original.value) {
            selectOption.style.display = 'none';
         }
      }
      selectOption.addEventListener('click', function () {
         for (let index = 0; index < selectOptions.length; index++) {
            const el = selectOptions[index];
            el.style.display = 'block';
         }
         if (selectType == 'input') {
            selectInput.value = selectOptionText;
            original.value = selectOptionValue;
         } else {
            select.querySelector('.select__value').innerHTML = '<span>' + selectOptionText + '</span>';
            original.value = selectOptionValue;
            selectOption.style.display = 'none';
         }
      });
   }
}
function selectGetOptions(selectOptions) {
   if (selectOptions) {
      let selectOptionsContent = '';
      for (let index = 0; index < selectOptions.length; index++) {
         const selectOption = selectOptions[index];
         const selectOptionValue = selectOption.value;
         if (selectOptionValue != '') {
            const selectOptionText = selectOption.text;
            selectOptionsContent = selectOptionsContent + '<div data-value="' + selectOptionValue + '" class="select__option">' + selectOptionText + '</div>';
         }
      }
      return selectOptionsContent;
   }
}
function selectSearch(e) {
   let selectBlock = e.target.closest('.select ').querySelector('.select__options');
   let selectOptions = e.target.closest('.select ').querySelectorAll('.select__option');
   let selectSearchText = e.target.value.toUpperCase();

   for (let i = 0; i < selectOptions.length; i++) {
      let selectOption = selectOptions[i];
      let selectTxtValue = selectOption.textContent || selectOption.innerText;
      if (selectTxtValue.toUpperCase().indexOf(selectSearchText) > -1) {
         selectOption.style.display = "";
      } else {
         selectOption.style.display = "none";
      }
   }
}
function selectsUpdateAll() {
   let selects = document.querySelectorAll('select');
   if (selects) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         selectItem(select);
      }
   }
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputsInit(inputs);

function inputsInit(inputs) {
   if (inputs.length > 0) {
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         const inputDataValue = input.getAttribute('data-value');
         inputPlaceholderAdd(input);
         if (input.value != '' && input.value != inputDataValue) {
            inputFocusAdd(input);
         }
         input.addEventListener('focus', function (e) {
            if (input.value == inputDataValue) {
               inputFocusAdd(input);
               input.value = '';
            }
            for (let index = 0; index < viewPass.length; index++) {
               const element = viewPass[index];
               if (!element.classList.contains('_active')) {
                  if (input.getAttribute('data-type') === "pass") {
                     input.setAttribute('type', 'password');
                  }
               }
            }
            if (input.classList.contains('_date')) {
               input.classList.add('_mask');
               Inputmask("99.99.9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     inputClearMask(input, inputDataValue);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_phone')) {
               //'+7(999) 999 9999'
               //'+38(999) 999 9999'
               //'+375(99)999-99-99'
               input.classList.add('_mask');
               Inputmask("+7(999) 999 9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     inputClearMask(input, inputDataValue);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_digital')) {
               input.classList.add('_mask');
               Inputmask("9{1,}", {
                  "placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     inputClearMask(input, inputDataValue);
                  }
               }).mask(input);
            }
            formRemoveError(input);
         });
         input.addEventListener('blur', function (e) {
            if (input.value == '') {
               input.value = inputDataValue;
               inputFocusRemove(input);
               if (input.classList.contains('_mask')) {
                  inputClearMask(input, inputDataValue);
               }
               if (input.getAttribute('data-type') === "pass") {
                  input.setAttribute('type', 'text');
               }
            }
         });
      }
   }
}
function checkbox() {
   let checkboxes = document.querySelectorAll('.check');
   for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      let check = checkbox.querySelector('input');
      if (check.checked == true) {
         checkbox.classList.add('_active');
         check.classList.add('_active');
         formRemoveError(check);
      } else if (check.checked == false) {
         checkbox.classList.remove('_active');
         check.classList.remove('_active');
      }
      checkbox.addEventListener("click", function () {
         if (check.checked == true) {
            check.checked = false;
            checkbox.classList.remove('_active');
            check.classList.remove('_active');
         } else {
            check.checked = true;
            checkbox.classList.add('_active');
            check.classList.add('_active');
            formRemoveError(check);
         }
      });
   }
}
checkbox();
function inputPlaceholderAdd(input) {
   const inputDataValue = input.getAttribute('data-value');
   if (input.value == '' && inputDataValue != '') {
      input.value = inputDataValue;
   }
}
function inputFocusAdd(input) {
   input.classList.add('_focus');
   input.parentElement.classList.add('_focus');
}
function inputFocusRemove(input) {
   input.classList.remove('_focus');
   input.parentElement.classList.remove('_focus');
}
function inputClearMask(input, inputDataValue) {
   input.inputmask.remove();
   input.value = inputDataValue;
   inputFocusRemove(input);
}

function fileUpload() {
   const formImage = document.getElementById('_formImage');
   const formPreview = document.getElementById('_formPreview');

   if (formImage) {

      formImage.addEventListener('change', () => {
         uploadFile(formImage.files[0]);
      });

      function uploadFile(file) {
         // провераяем тип файла
         if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения.');
            formImage.value = '';
            return;
         }
         // проверим размер файла (<2 Мб)
         if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2 МБ.');
            return;
         }

         var reader = new FileReader();
         reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
         };
         reader.onerror = function (e) {
            alert('Ошибка');
         };
         reader.readAsDataURL(file);
      }
   }
}
fileUpload();
function rating() {
   "use strict"

   const ratings = document.querySelectorAll('.rating');
   if (ratings.length > 0) {
      initRatings();
   }

   // Основная функция
   function initRatings() {
      let ratingActive, ratingValue;
      // "Бегаем" по всем рейтингам на странице
      for (let index = 0; index < ratings.length; index++) {
         const rating = ratings[index];
         initRating(rating);
      }

      // Инициализируем конкретный рейтинг
      function initRating(rating) {
         initRatingVars(rating);

         setRatingActiveWidth();

         if (rating.classList.contains('_rating-set')) {
            setRating(rating);
         }
      }

      // Инициализайция переменных
      function initRatingVars(rating) {
         ratingActive = rating.querySelector('.rating__active');
         ratingValue = rating.querySelector('.rating__value');
      }
      // Изменяем ширину активных звезд
      function setRatingActiveWidth(index = ratingValue.innerHTML) {
         const ratingActiveWidth = index / 0.05;
         ratingActive.style.width = `${ratingActiveWidth}%`;
      }
      // Возможность указать оценку 
      function setRating(rating) {
         const ratingItems = rating.querySelectorAll('.rating__item');
         for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function (e) {
               // Обновление переменных
               initRatingVars(rating);
               // Обновление активных звезд
               setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
               // Обновление активных звезд
               setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
               // Обновление переменных
               initRatingVars(rating);

               if (rating.dataset.ajax) {
                  // "Отправить" на сервер
                  setRatingValue(ratingItem.value, rating);
               } else {
                  // Отобразить указанную оцнку
                  ratingValue.innerHTML = index + 1;
                  setRatingActiveWidth();
               }
            });
         }
      }

      async function setRatingValue(value, rating) {
         if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            // Отправика данных (value) на сервер
            let response = await fetch('rating.json', {
               method: 'GET',

               body: JSON.stringify({
                  userRating: value
               }),
               headers: {
                  'content-type': 'application/json'
               }

            });
            if (response.ok) {
               const result = await response.json();

               // Получаем новый рейтинг
               const newRating = result.newRating;

               // Вывод нового среднего результата
               ratingValue.innerHTML = newRating;

               // Обновление активных звезд
               setRatingActiveWidth();

               rating.classList.remove('rating_sending');
            } else {
               alert("Ошибка");

               rating.classList.remove('rating_sending');
            }
         }
      }
   }
}
rating();

let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
   for (let index = 0; index < quantityButtons.length; index++) {
      const quantityButton = quantityButtons[index];
      quantityButton.addEventListener("click", function (e) {
         let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
         if (quantityButton.classList.contains('quantity__button_plus')) {
            value++;
         } else {
            value = value - 1;
            if (value < 1) {
               value = 1
            }
         }
         quantityButton.closest('.quantity').querySelector('input').value = value;
      });
   }
}
const rangeBlock = document.querySelector('.range-block');
if (rangeBlock) {
   let rangeMinValue = 0;
   let rangeMaxValue = 1000000;
   noUiSlider.create(rangeBlock, {
      start: [rangeMinValue, rangeMaxValue],
      connect: true,
      tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
      range: {
         'min': [rangeMinValue],
         'max': [rangeMaxValue],
      }
   });

   const rangeStart = document.getElementById('rangefrom');
   const rangeEnd = document.getElementById('rangeto');

   rangeStart.value = rangeMinValue;
   rangeEnd.value = rangeMaxValue;

   rangeStart.addEventListener('keyup', rangeStartCustom);
   rangeEnd.addEventListener('keyup', rangeEndCustom);
   function rangeStartCustom() {
      rangeStart.value = rangeStart.value.replace(/[^\d]/g, '');
      rangeEnd.value = rangeEnd.value.replace(/[^\d]/g, '');

      let rangeValueStart = Number(rangeStart.value);
      let rangeValueEnd = Number(rangeEnd.value);

      if (rangeValueStart > rangeValueEnd || rangeValueEnd == rangeValueStart) {
         rangeEnd.value = String(rangeValueEnd + (rangeValueStart - rangeValueEnd + 1));
      }

      if (rangeValueEnd > rangeMaxValue) {
         rangeEnd.value = String(rangeMaxValue);
      }
      if (rangeValueStart < rangeMinValue) {
         rangeStart.value = String(rangeMinValue);
      }
      if (rangeValueStart > rangeValueEnd && rangeValueEnd == rangeMaxValue) {
         rangeStart.value = String(rangeMaxValue - 1);
         rangeEnd.value = rangeMaxValue;
      }
      setRangeValues();
   }
   function rangeEndCustom() {
      rangeStart.value = rangeStart.value.replace(/[^\d]/g, '');
      rangeEnd.value = rangeEnd.value.replace(/[^\d]/g, '');

      let rangeValueStart = Number(rangeStart.value);
      let rangeValueEnd = Number(rangeEnd.value);

      if (rangeValueEnd < rangeValueStart || rangeValueEnd == rangeValueStart) {
         if (rangeStart.value != rangeMinValue) {
            rangeStart.value = String(rangeValueStart - (rangeValueStart - rangeValueEnd + 1));
         } else {
            rangeEnd.value = String(rangeMinValue + 1);
         }
      }

      if (rangeValueEnd > rangeMaxValue) {
         rangeEnd.value = String(rangeMaxValue);
      }
      if (rangeValueStart < rangeMinValue) {
         rangeStart.value = String(rangeMinValue);
      }
      if (rangeValueEnd < rangeValueStart && rangeValueStart == rangeMinValue) {
         rangeEnd.value = String(rangeMinValue + 1);
         rangeStart.value = rangeMinValue;
      }
      setRangeValues();
   }
   function setRangeValues() {
      let rangeStartValue;
      let rangeEndValue;
      if (rangeStart.value != '') {
         rangeStartValue = rangeStart.value;
      }
      if (rangeEnd.value != '') {
         rangeEndValue = rangeEnd.value;
      }
      rangeBlock.noUiSlider.set([rangeStartValue, rangeEndValue]);
   }
   rangeBlock.noUiSlider.on('slide', function () {
      let sliderValuesUpdate = rangeBlock.noUiSlider.get();
      rangeStart.value = Math.round(sliderValuesUpdate[0]);
      rangeEnd.value = Math.round(sliderValuesUpdate[1]);
      if (rangeEnd.value == rangeStart.value) {
         rangeStart.value = String(rangeStart.value - (rangeStart.value - rangeEnd.value + 1));
      }
   });
}
function autosizeTextarea() {
   var textarea = document.querySelector('._autosize');
   if (textarea) {
      autosize(textarea);
   }
}
autosizeTextarea();