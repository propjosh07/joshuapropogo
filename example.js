const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const minutes1 = document.getElementById('minutes');
const seconds1 = document.getElementById('seconds');

var countDownDate = new Date("Dec 25, 2023 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  days1.innerHTML = days;
  hours1.innerHTML = hours;
  minutes1.innerHTML = minutes;
  seconds1.innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    days1.innerHTML = 'EXPIRED';
    hours1.innerHTML = 'EXPIRED';
    minutes1.innerHTML = 'EXPIRED';
    seconds1.innerHTML = 'EXPIRED';
  }
}, 1000);