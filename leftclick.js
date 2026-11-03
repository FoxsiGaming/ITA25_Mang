const status = document.getElementById("timerStatus");
const bestTimeDisplay = document.getElementById("bestTime");
const clickCount = document.getElementById("clickCount"); //ei tea mida click count teeb siin (see pole vajalik)
let totalClicks = 0;
let timerState = "ready";

//reset game funktsioon
const resetGame = () => {
  status.textContent = "Click anywhere to start";
  gameScreen.style.backgroundColor = "white";
  totalClicks = 0;
  clickCount.textContent = `Click count: ${totalClicks}`;
  timerState = "ready";
};

const gameScreen = document.getElementById("gameScreen");

//mängu event
gameScreen.addEventListener("click", (event) => {
  if (event.button !== 0) {
    return;
  }

  totalClicks += 1;
  clickCount.textContent = `Click count: ${totalClicks}`;

  //oota
  if (timerState === "ready") {
    timerState = "waiting";
    status.textContent = "Wait for the signal...";
    document.getElementById("gameScreen").style.backgroundColor = "yellow";

    //1 - 3 sec
    window.ReactionTimer.startRandomTimer(1000, 3000, () => {
      timerState = "fired";
      status.textContent = "Signal! Click now!";
      document.getElementById("gameScreen").style.backgroundColor =
        "lightgreen";
    });
    return;
  }

  //vajutad liiga vara
  if (timerState === "waiting") {
    status.textContent = "Too soon! Click to try again.";
    document.getElementById("gameScreen").style.backgroundColor = "red";
    window.ReactionTimer.stopRandomTimer();
    timerState = "done";
    return;
  }

  //vajutasid õigel ajal
  if (timerState === "fired") {
    const reactionTimeMs = window.ReactionTimer.getReactionTimeMs();
    const result = trackReaction(reactionTimeMs);
    const newRecordMessage = result.isNewRecord ? " New best!" : "";
    status.textContent = `${window.ReactionTimer.getFormattedReactionTime(reactionTimeMs)}.${newRecordMessage}`;
    bestTimeDisplay.textContent = `Best: ${result.bestTime} ms`;
    timerState = "done";
    return;
  }

  //reset game
  if (timerState === "done") {
    resetGame();
    return;
  }
});