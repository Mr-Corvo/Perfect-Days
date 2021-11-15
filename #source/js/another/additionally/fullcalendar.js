// https://fullcalendar.io/docs/
document.addEventListener('DOMContentLoaded', function () {
   var calendarEl = document.querySelector(".calendar__object");
   var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      firstDay: 1,
      contentHeight: "auto",
      headerToolbar: {
         left: 'prev,next today',
         center: 'title',
         right: 'dayGridMonth,dayGridWeek'
      },
      selectable: true,
      selectMirror: true,
      titleFormat: { year: 'numeric', month: 'long' },
      events: [
         {  
            id: 'now',
            title: 'Perfect Days in a row',
            start: '2021-10-04',
            end: '2021-10-08'
         },
         // {
         //    title: 'Perfect Days in a row',
         //    start: '2021-10-04',
         //    end: '2021-10-08'
         // },
         // {
         //    title: 'Long Event',
         //    start: '2021-10-04',
         //    end: '2021-10-07'
         // },
         // {
         //    groupId: '999',
         //    title: 'Repeating Event',
         //    start: '2021-07-09T16:00:00'
         // },
         // {
         //    groupId: '999',
         //    title: 'Repeating Event',
         //    start: '2021-07-16T16:00:00'
         // },
         // {
         //    title: 'Click for Google',
         //    url: 'http://google.com/',
         //    start: '2021-07-28'
         // }
      ]
      // views: {
      //    dayGridWeek: {
      //       aspectRatio: 8,
      //    },
      // },
      // eventDisplay: 'background',

   });
   calendar.render();
   // calendar.on('dateClick', function (info) {
   //    console.log('clicked on ' + info.dateStr);
   // });
   // calendar.next();
});