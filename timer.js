<<<<<<< HEAD
function startRandomTimer(minMs, maxMs, onFire) {
  const delay = Math.random() * (maxMs - minMs) + minMs;
  const timeoutId = setTimeout(onFire, delay);

  return function stop() {
    clearTimeout(timeoutId);
  };
}

let fired = false;
let timerState = "ready";
let firedAt = 0;

if (typeof document !== "undefined") {
  const status = document.getElementById("timerStatus");

  if (status) {
    document.addEventListener("click", () => {
      if (timerState === "ready") {
        timerState = "waiting";
        status.textContent = "Wait for the signal...";

        startRandomTimer(1000, 3000, () => {
          fired = true;
          firedAt = performance.now();
          timerState = "fired";
          status.textContent = "Signal! Click now!";
        });
        return;
      }

      if (timerState === "waiting") {
        status.textContent = "Too soon! Wait for the signal.";
        return;
      }

      if (timerState === "fired") {
        const elapsedMs = Math.round(performance.now() - firedAt);
        const seconds = Math.floor(elapsedMs / 1000);
        const milliseconds = elapsedMs % 1000;

        status.textContent = `Reaction time: ${seconds} ${seconds === 1 ? "second" : "seconds"} and ${milliseconds} milliseconds`;
        timerState = "done";
      }
    });
  }
}

=======
function startRandomTimer(minMs, maxMs, onFire) {
  const delay = Math.random() * (maxMs - minMs) + minMs;
  const timeoutId = setTimeout(onFire, delay);

  return function stop() {
    clearTimeout(timeoutId);
  };
}

let fired = false;
let timerState = "ready";
let firedAt = 0;

if (typeof document !== "undefined") {
  const status = document.getElementById("timerStatus");

  if (status) {
    document.addEventListener("click", () => {
      if (timerState === "ready") {
        timerState = "waiting";
        status.textContent = "Wait for the signal...";

        startRandomTimer(1000, 3000, () => {
          fired = true;
          firedAt = performance.now();
          timerState = "fired";
          status.textContent = "Signal! Click now!";
        });
        return;
      }

      if (timerState === "waiting") {
        status.textContent = "Too soon! Wait for the signal.";
        return;
      }

      if (timerState === "fired") {
        const elapsedMs = Math.round(performance.now() - firedAt);
        const seconds = Math.floor(elapsedMs / 1000);
        const milliseconds = elapsedMs % 1000;

        status.textContent = `Reaction time: ${seconds} ${seconds === 1 ? "second" : "seconds"} and ${milliseconds} milliseconds`;
        timerState = "done";
      }
    });
  }
}

>>>>>>> 951ae6318a470b38df25527328a8cbeed9bfccb6
