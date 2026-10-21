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

  function getFormattedReactionTime() {
    if (firedAt === undefined) {
      throw new Error("The reaction timer has not fired yet.");
    }

    const elapsedMs = Math.round(performance.now() - firedAt);
    const seconds = Math.floor(elapsedMs / 1000);
    const milliseconds = elapsedMs % 1000;

    return `Reaction time: ${seconds} ${seconds === 1 ? "second" : "seconds"} and ${milliseconds} milliseconds`;
  }

  return {
    startRandomTimer,
    getFormattedReactionTime,
  };
})();
