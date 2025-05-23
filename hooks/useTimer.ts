
import { useState, useEffect, useCallback } from 'react';

interface TimerOptions {
  initialTime: number;
  onEnd?: () => void;
}

export const useTimer = ({ initialTime, onEnd }: TimerOptions) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    setTimeLeft(initialTime);
    setIsActive(false);
    setHasEnded(false);
  }, [initialTime]);

  useEffect(() => {
    // Fix: Replace NodeJS.Timeout with number for browser compatibility
    let interval: number | null = null;

    if (isActive && timeLeft > 0) {
      setHasEnded(false); // Ensure hasEnded is false when timer is active and running
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            if (interval) clearInterval(interval);
            setIsActive(false);
            setHasEnded(true); // Set hasEnded true when time reaches 0
            if (onEnd) onEnd();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else if (!isActive && timeLeft === 0 && !hasEnded) {
      // This case handles if the timer was paused at 0, then onEnd should be called
      // or if it's initialized to 0. For safety, ensure onEnd is called if it hasn't been.
      // But typically, onEnd is called when timeLeft transitions to 0.
      // If initialTime is 0, this might trigger onEnd immediately if not careful.
      // The hasEnded flag helps prevent redundant calls.
      if (onEnd && !hasEnded && initialTime > 0) { // Only call onEnd if timer was supposed to run
        setHasEnded(true);
        onEnd();
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, timeLeft, onEnd]); // Removed initialTime from here to avoid complex interactions; step changes are handled by the first useEffect.

  const start = useCallback(() => {
    if (timeLeft === 0 && initialTime > 0) { // If timer ended and needs to restart for same step
      setTimeLeft(initialTime);
    }
    setIsActive(true);
    setHasEnded(false); // Reset hasEnded when starting
  }, [initialTime, timeLeft]);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTimeLeft(initialTime);
    setHasEnded(false);
  }, [initialTime]);

  return { timeLeft, isActive, hasEnded, start, pause, reset };
};