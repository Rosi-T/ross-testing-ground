// Toggle Theme Color:
let themeChange = document.getElementById('theme-toggle');
let sectionThemeToggle = document.getElementById('fem-smd');

themeChange.addEventListener('click', e => {
    if(document.getElementById('theme-toggle').checked == true) {
        themeChange.value = 'light-theme';
        sectionThemeToggle.classList.remove('dark-theme-section');
        sectionThemeToggle.classList.add('light-theme-section');
    } 
    if(document.getElementById('theme-toggle').checked == false) {
        themeChange.value = 'dark-theme';
        sectionThemeToggle.classList.remove('light-theme-section');
        sectionThemeToggle.classList.add('dark-theme-section');
    }
});


// Counter:

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

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

  // Add a zero before single number values: 
  if(days < 10) {
    days = '0' + days;
  }
  if(hours < 10) {
    hours = '0' + hours;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  // Display the result in the element with id="counter" and the html for the rest of the elements
  document.getElementById("counter").innerHTML = 
  '<div class="count-num days-count">'    + days    + '<span class="count-num-inner"></span><div class="count-text">days</div></div>' + 
  '<div class="count-num hours-count">'   + hours   + '<span class="count-num-inner"></span><div class="count-text">hours</div></div>' + 
  '<div class="count-num minutes-count">' + minutes + '<span class="count-num-inner"></span><div class="count-text">minutes</div></div>' + 
  '<div class="count-num seconds-count">' + seconds + '<span class="count-num-inner"></span><div class="count-text">seconds</div></div>';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
