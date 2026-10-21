const status = document.getElementById("timerStatus");
const clickCount = document.getElementById("clickCount");
let totalClicks = 0;
let timerState = "ready";

document.addEventListener("click", (event) => {
  if (event.button !== 0) {
    return;
  }

  totalClicks += 1;
  clickCount.textContent = `Click count: ${totalClicks}`;

  if (timerState === "ready") {
    timerState = "waiting";
    status.textContent = "Wait for the signal...";

    window.ReactionTimer.startRandomTimer(1000, 3000, () => {
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
    status.textContent = window.ReactionTimer.getFormattedReactionTime();
    timerState = "done";
  }
});