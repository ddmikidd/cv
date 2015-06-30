//IIFE
(function() {
  //document ready
  $(function() {
    //Code is placed inside an immediately invoked function
    //to protect the scope of variables
    var answerDate = "";  

    function dateForAnswer(today) {
      var weekFromToday, dayNames, monthNames, day, date, month, year;

      weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      dayNames = ['Söndag', 'Mondag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
      monthNames = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
                    'Juli', 'Augusti', 'September', 'December'];
      day = dayNames[weekFromToday.getDay()];//getDay() returns the day of the week(0-6)
      date = weekFromToday.getDate();
      month = monthNames[weekFromToday.getMonth()];
      year = weekFromToday.getFullYear();

      answerDate = day + ", " + date + " " + month + " " + year;
      return answerDate;
    }

    var today = new Date();
    //document.getElementById('answerDate').innerHTML = dateForAnswer(today);
  });
}());