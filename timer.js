
window.ReactionTimer = (() => {
  let timeoutId;
  let firedAt;

  function startRandomTimer(minMs, maxMs, onFire) {
    const delay = Math.random() * (maxMs - minMs) + minMs;

    timeoutId = setTimeout(() => {
      firedAt = performance.now();
      timeoutId = undefined;
      onFire();
    }, delay);
  }


  function stopRandomTimer() {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  }

  function getReactionTimeMs() {
    if (firedAt === undefined) {
      throw new Error("The reaction timer has not fired yet.");
    }

    return Math.round(performance.now() - firedAt);
  }

  function getFormattedReactionTime(elapsedMs = getReactionTimeMs()) {
    const seconds = Math.floor(elapsedMs / 1000);
    const milliseconds = elapsedMs % 1000;

    return `Reaction time: ${seconds} ${seconds === 1 ? "second" : "seconds"} and ${milliseconds} milliseconds`;
  }

  return {
    startRandomTimer,
    getReactionTimeMs,
    getFormattedReactionTime,
    stopRandomTimer
  };
})();
