let timer;
let time = 0;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
        isRunning = false;
    } else {
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Pause";
        isRunning = true;
    }
}

function lap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}

function reset() {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    lapCounter = 1;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
    time++;
    let minutes = Math.floor(time / 6000);
    let seconds = Math.floor((time % 6000) / 100);
    let milliseconds = (time % 6000) % 100;
    document.getElementById("display").textContent =
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds;
}
