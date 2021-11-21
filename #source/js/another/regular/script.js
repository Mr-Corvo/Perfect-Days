var date = new Date();
var dayNow = String(date.getDate()).length < 2 ? ("0" + (String(date.getDate()))) : String(date.getDate());
var monthNow = String(date.getMonth() + 1).length < 2 ? ("0" + (String((date.getMonth() + 1)))) : String((date.getMonth() + 1));
var yearNow = date.getFullYear();
var dateEndEvent = `${yearNow}-${monthNow}-${dayNow}`;
function getDifferenceDate(aDateOpt, bDateOpt) {
   let aDate = aDateOpt.split('-'), bDate = bDateOpt.split('-'), aYear = aDate[0], aMonth = aDate[1], aDay = aDate[2], bYear = bDate[0], bMonth = bDate[1], bDay = bDate[2];
   return Math.floor((new Date((bYear), ((String(bMonth).length < 2 ? ("0" + (String(bMonth - 1))) : String(bMonth - 1))), (String(bDay).length < 2 ? ("0" + (String(bDay))) : String(bDay))).getTime() - new Date((aYear), (String(aMonth).length < 2 ? ("0" + (String(aMonth - 1))) : String(aMonth - 1)), (String(aDay).length < 2 ? ("0" + (String(aDay))) : String(aDay))).getTime()) / (24 * 3600 * 1000));
}
document.addEventListener('DOMContentLoaded', function () {
   var nowDate = date.getTime();
   var oldDateData = eventsKeys[0].start.split('-');
   for (var key in oldDateData) {
      oldDateData[key] = Number(oldDateData[key]);
   }
   var oldDate = new Date(oldDateData[0], oldDateData[1] - 1, oldDateData[2]).getTime();
   var perfectDaysNow = Math.floor((nowDate - oldDate) / (24 * 3600 * 1000));

   document.querySelector('._number span').innerHTML = perfectDaysNow;

   function setValues() {
      var calendarEl = document.querySelector(".calendar__object");
      var calendar = new FullCalendar.Calendar(calendarEl, {
         initialView: 'dayGridMonth',
         titleFormat: { year: 'numeric', month: 'long' },
         firstDay: 1,
         contentHeight: "auto",
         headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
         },
         events: eventsKeys,
      });
      calendar.render();
   }
   setValues();

   let threeBody = document.querySelectorAll("._-footer");
   for (let index = 0; index < threeBody.length; index++) {
      const threeBodyElem = threeBody[index];
      if (threeBodyElem) {
         let vh = window.innerHeight;
         let curretValue = vh - document.querySelector("footer").offsetHeight;
         threeBodyElem.style.setProperty('min-height', `${curretValue}px`);
         window.addEventListener('resize', () => {
            let vh = window.innerHeight;
            let curretValue = vh - document.querySelector("footer").offsetHeight;
            threeBodyElem.style.setProperty('min-height', `${curretValue}px`);
         });
      }
   }
});