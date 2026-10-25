const createReactionTracker = () => {
  let bestTime = null;

  return function recordTime(newTimeMs) {
    if (bestTime === null || newTimeMs < bestTime) {
      bestTime = newTimeMs;
      return { bestTime, isNewRecord: true };
    }
    return { bestTime, isNewRecord: false };
  };
};

// Initialize the tracker
const trackReaction = createReactionTracker();