document.querySelector('.submit-date').addEventListener('click', function() {
  var userMonth = document.querySelector('.month').value -1;
  var userDay = document.querySelector('.day').value;
  var userYear = document.querySelector('.year').value;
  var displayMessage = document.getElementById('msg');

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];

  var dateIs = new Date(userYear, userMonth, userDay);
  var dayIs = day[dateIs.getDay()];
  var monthIs = months[userMonth]

  if(dayIs === undefined || monthIs === undefined) {
    displayMessage.innerText = 'Enter Valid Date';
  } else {
    displayMessage.innerHTML = 'The day is ' + '<strong style="color:red">' + '\'' + dayIs + '\'' + '</strong>' + ' of the date: ' + monthIs + '-' + userDay + '-' + userYear + '.';
  }
});


