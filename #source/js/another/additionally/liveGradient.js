// API https://sarcadass.github.io/granim.js/api-v2.0.0.html
var granimInstance = new Granim({
   // Elememt
   element: '._gradient',//!(canvas)
   // Напровление
   direction: 'top-bottom',
   // 'diagonal'
   // 'left-right'
   // 'top-bottom'
   // 'radial'

   // Добовление класса яркий или не градиент
   // name: true,
   // К какому элементу добовлять класс
   // elToSetClassOn: ".content",

   //	Останавливается ли анимация, когда она не отображается в окне
   isPausedWhenNotInView: true,
   // Когда анимация дойдет до последнего градиента, повторяется ли она?
   loop: true,
   states: {
      "default-state": {
         gradients: [
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
         ]
      }
   }
});