var eventsKeys = [
   {
      id: 'now',
      title: `Perfect Days in a row`,
      start: "2021-11-15",
      end: dateEndEvent,
      classNames: ['_event-now']
   },
   {
      title: `Perfect Days in a row (${Math.floor((new Date(2021, 10, 14).getTime() - new Date(2021, 09, 11).getTime()) / (24 * 3600 * 1000))})`,
      start: "2021-10-11",
      end: "2021-11-14",
   },
   {
      title: `Perfect Days in a row (${Math.floor((new Date(2021, 9, 10).getTime() - new Date(2021, 09, 04).getTime()) / (24 * 3600 * 1000))})`,
      start: '2021-10-04',
      end: '2021-10-10'
   },
];