let isTimerRunning = false;
let countdown, interval;
let typed;

// Function to start the countdown timer
function startCountdown() {
    if (!isTimerRunning) {
      isTimerRunning = true;
  
      // Stop any existing Typed instances
      if (typed) {
        typed.destroy();
      }
  
      // Clear any existing timers
      clearTimeout(countdown);
      clearInterval(interval);
  
      const minutes = parseInt(document.getElementById("min").value);
      const seconds = parseInt(document.getElementById("sec").value);
  
      if (isNaN(seconds)) {
        alert("Please enter a valid number of seconds!");
        location.reload();
        return;
      } if (isNaN(minutes)) {
        alert("Please enter a valid number of minutes!");
        location.reload();
        return;
      }
  
      countdown = Date.now() + seconds * 1000 + minutes * 60000;
      updateTimer();
  
      interval = setInterval(() => {
        updateTimer();
  
        if (Date.now() >= countdown) {
          clearInterval(interval);
          document.getElementById("timer").innerHTML = "Time's up!";
          document.getElementById("tm").innerHTML = "<a href='./index.html'>Set a new timer?</a>";
          document.getElementById("tm").style.fontSize = "30px";
          document.getElementById("buts").style.marginTop = "25x";
          document.getElementById("timer").style.fontSize = "70px";
          isTimerRunning = false;
        }
      }, 1000);
    }
  }
  
  

function stopCountdown() {
  if (isTimerRunning) {
    isTimerRunning = false;
    clearTimeout(countdown);
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "";

    typed = new Typed("#timer", {
      strings: ["5:00", "20:36", "10:00", "15:04"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  } else {
    return;
  }
}

function updateTimer() {
  const totalSec = Math.round((countdown - Date.now()) / 1000)
  const remainingMinutes = Math.floor(totalSec / 60);
  const remainingSeconds = Math.round(totalSec % 60);
  let remainingSecondsFormat = remainingSeconds.toString().padStart(2, '0')
  document.getElementById("timer").innerHTML = remainingMinutes + ":" +  remainingSecondsFormat;
}

document.addEventListener('DOMContentLoaded', () => {
  typed = new Typed("#timer", {
    strings: ["5:00", "20:36", "10:00", "15:04"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });
});
