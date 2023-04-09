let isTimerRunning = false;
let countdown, interval;
function startCountdown() {
    if (!isTimerRunning) {
        isTimerRunning = true;
    } 
    clearTimeout(countdown);
    clearInterval(interval);
    const minutes = parseInt(document.getElementById("min").value);
    const seconds = parseInt(document.getElementById("sec").value);
    if (isNaN(seconds)) {
        alert("Please enter a valid number!");
        return;
    }
    window.typed.destroy();
    countdown = Date.now() + seconds * 1000 + minutes * 60000;
    updateTimer();
    interval = setInterval(() => {
        updateTimer();
        if (Date.now() >= countdown) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }, 1000);
}
function stopCountdown() {
    if (isTimerRunning) {
        isTimerRunning = false;
        var typed = new Typed("#timer", {
            strings: ["5:00", "20:36", "10:00", "15:04"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
          })
    } else {
        return;
    }
    clearTimeout(countdown);
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "";
}
function updateTimer() {
    const totalSec = Math.round((countdown - Date.now()) / 1000)
    const remainingMinutes = Math.floor(totalSec / 60);
    const remainingSeconds = Math.round(totalSec % 60);
    let remainingSecondsFormat = remainingSeconds.toString().padStart(2, '0')
    document.getElementById("timer").innerHTML = remainingMinutes + ":" +  remainingSecondsFormat;
}

