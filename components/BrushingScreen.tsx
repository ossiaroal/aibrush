
import React, { useEffect, useState } from 'react';
import { BrushingStep, UserType } from '../types';
import { useTimer } from '../hooks/useTimer';
import { PlayIcon, PauseIcon, NextIcon, PrevIcon, LogoutIcon, THEME_COLORS } from '../constants';

interface BrushingScreenProps {
  userType: UserType;
  steps: BrushingStep[];
  currentStepIndex: number;
  onNextStep: (autoTriggeredByTimerEnd?: boolean) => void;
  onPreviousStep: () => void;
  onSessionEnd: () => void;
  shouldAutoStartTimer: boolean;
  onTimerAutoStarted: () => void;
}

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const BrushingScreen: React.FC<BrushingScreenProps> = ({
  userType,
  steps,
  currentStepIndex,
  onNextStep,
  onPreviousStep,
  onSessionEnd,
  shouldAutoStartTimer,
  onTimerAutoStarted,
}) => {
  const currentStep = steps[currentStepIndex];
  const [isStepTimerCompleted, setIsStepTimerCompleted] = useState(false);
  
  const { timeLeft, isActive, hasEnded, start, pause, reset } = useTimer({
    initialTime: currentStep.durationSeconds,
    onEnd: () => {
      setIsStepTimerCompleted(true);
      if (currentStep.durationSeconds > 0) {
        onNextStep(true); // Signal that this is an auto-triggered advancement
      }
    },
  });

  useEffect(() => {
    setIsStepTimerCompleted(false); // Reset for the new step
    reset(); // Resets the timer (timeLeft, isActive, hasEnded) for the new currentStep.durationSeconds
  
    if (shouldAutoStartTimer && currentStep.durationSeconds > 0 && !isActive) {
      start();
      onTimerAutoStarted(); // Consume the signal
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [currentStep.id, shouldAutoStartTimer, onTimerAutoStarted]); // Using currentStep.id to ensure effect runs for new step
  // reset, start are stable callbacks from useTimer hook.

  const handleToggleTimer = () => {
    if (isActive) {
      pause();
    } else {
      // If restarting a completed timer or starting a fresh one
      if (timeLeft === 0 && currentStep.durationSeconds > 0) {
        reset(); // Ensure it resets to full time if it was at 0
        // Small delay to ensure reset completes before start, though usually not needed
        setTimeout(start, 0); 
      } else {
        start();
      }
    }
  };
  
  const theme = THEME_COLORS[userType] || THEME_COLORS.default;
  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col items-center p-4 md:p-6 w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl">
      <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className={`text-sm font-semibold ${theme.text} opacity-80`} style={{fontFamily: "'Poppins', sans-serif"}}>
            {userType} Brushing - Step {currentStepIndex + 1} of {steps.length}
          </h2>
          <button
            onClick={onSessionEnd}
            className={`p-2 rounded-full hover:bg-${theme.accent}/20 transition-colors`}
            aria-label="End Session"
          >
            <LogoutIcon className={`w-5 h-5 text-${theme.primary}`} />
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-${theme.primary} h-2.5 rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col items-center justify-center">
          <img
            src={currentStep.imageUrl}
            alt={currentStep.title}
            className="rounded-lg shadow-lg w-full h-auto max-h-[300px] md:max-h-[400px] object-cover mb-4"
            aria-live="polite"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${theme.text}`} style={{fontFamily: "'Poppins', sans-serif"}}>{currentStep.title}</h3>
            <p className={`text-md text-${theme.secondary} font-medium mb-3`}>Area: {currentStep.area}</p>
            <p className={`text-sm ${theme.text} mb-4`}>{currentStep.description}</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-600">
              {currentStep.detailedInstructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-2 mb-4">
              {currentStep.areaDiagramUrl && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 ${theme.text} opacity-90`}>Focus Area:</h4>
                  <img 
                    src={currentStep.areaDiagramUrl} 
                    alt={`Diagram of ${currentStep.area}`} 
                    className="rounded-md shadow-sm border border-gray-200 w-full h-auto object-contain max-h-32 bg-gray-50" 
                    aria-label={`Brushing area diagram: ${currentStep.area}`}
                  />
                </div>
              )}
              {currentStep.angleDiagramUrl && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 ${theme.text} opacity-90`}>Brush Angle:</h4>
                  <img 
                    src={currentStep.angleDiagramUrl} 
                    alt="Diagram of toothbrush angle" 
                    className="rounded-md shadow-sm border border-gray-200 w-full h-auto object-contain max-h-32 bg-gray-50"
                    aria-label="Toothbrush angle diagram"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-auto pt-4">
            <div className={`text-6xl font-mono font-bold ${isActive ? `text-${theme.accent}` : theme.text}`} aria-live="polite" aria-atomic="true">
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={handleToggleTimer}
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold ${theme.buttonText} bg-${theme.primary} hover:bg-${theme.primaryHover} transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-${theme.accent} focus:ring-offset-2`}
              aria-label={isActive ? 'Pause timer' : (hasEnded && timeLeft === 0 ? 'Restart step timer' : 'Start step timer')}
            >
              {isActive ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
              <span>{isActive ? 'Pause' : ((hasEnded || isStepTimerCompleted) && timeLeft === 0 ? 'Restart Timer' : 'Start Timer')}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => onPreviousStep()}
          disabled={currentStepIndex === 0}
          className={`px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`}
          aria-label="Go to previous brushing step"
        >
          <PrevIcon className="w-5 h-5" />
          <span>Previous</span>
        </button>
        <button
          onClick={() => onNextStep(false)} // Manual next step, don't auto-start next timer
          // Disable if timer must complete, unless it's an untimed step or already completed
          disabled={currentStep.durationSeconds > 0 && !isStepTimerCompleted && !hasEnded}
          className={`px-6 py-3 rounded-lg font-semibold ${theme.buttonText} bg-${theme.primary} hover:bg-${theme.primaryHover} flex items-center space-x-2 transition-colors shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-${theme.accent} focus:ring-offset-2`}
          aria-label={currentStepIndex === steps.length - 1 ? 'Finish brushing session' : 'Go to next brushing step'}
        >
          <span>{currentStepIndex === steps.length - 1 ? 'Finish' : 'Next Step'}</span>
          <NextIcon className="w-5 h-5" />
        </button>
      </div>
       {(currentStep.durationSeconds > 0 && !isStepTimerCompleted && !hasEnded && !isActive && timeLeft === currentStep.durationSeconds) && (
         <p className="text-xs text-center text-gray-500 mt-2" aria-live="polite">Click "Start Timer" to begin.</p>
       )}
       {(currentStep.durationSeconds > 0 && !isStepTimerCompleted && !hasEnded && isActive) && (
         <p className="text-xs text-center text-gray-500 mt-2" aria-live="polite">Timer is running. Complete this step to proceed automatically, or click "Next Step" if enabled.</p>
       )}
        {(currentStep.durationSeconds > 0 && (isStepTimerCompleted || hasEnded) && timeLeft === 0 && currentStepIndex < steps.length -1 && !isActive) && (
            <p className="text-xs text-center text-green-600 mt-2" aria-live="polite">Step timer complete! Advancing to next step...</p>
        )}
    </div>
  );
};

export default BrushingScreen;
