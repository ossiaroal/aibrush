
import React, { useState, useEffect } from 'react';
import { UserType, BrushingStep, AppView } from './types';
import { ADULT_BRUSHING_STEPS, CHILD_BRUSHING_STEPS, THEME_COLORS } from './constants';
import UserSelector from './components/UserSelector';
import BrushingScreen from './components/BrushingScreen';
import CompletionScreen from './components/CompletionScreen';

const App: React.FC = () => {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [brushingSteps, setBrushingSteps] = useState<BrushingStep[]>([]);
  const [currentView, setCurrentView] = useState<AppView>('selection');
  const [shouldAutoStartTimer, setShouldAutoStartTimer] = useState<boolean>(false);

  useEffect(() => {
    if (userType) {
      const steps = userType === UserType.Adult ? ADULT_BRUSHING_STEPS : CHILD_BRUSHING_STEPS;
      setBrushingSteps(steps);
      setCurrentStepIndex(0);
      setCurrentView('brushing');
      setShouldAutoStartTimer(false); // Ensure manual start for the very first step
    } else {
      setCurrentView('selection');
    }
  }, [userType]);

  const handleUserSelect = (selectedUserType: UserType) => {
    setUserType(selectedUserType);
  };

  const handleNextStep = (autoTriggeredByTimerEnd = false) => {
    if (currentStepIndex < brushingSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setShouldAutoStartTimer(autoTriggeredByTimerEnd);
    } else {
      setCurrentView('completion');
      setShouldAutoStartTimer(false); 
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setShouldAutoStartTimer(false); // Do not auto-start when going back
    }
  };

  const handleSessionEnd = () => {
    setUserType(null); 
    setShouldAutoStartTimer(false);
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setCurrentView('brushing');
    setShouldAutoStartTimer(false); // Manual start for restarted session
  };
  
  const onTimerAutoStarted = () => {
    setShouldAutoStartTimer(false);
  };

  const themeConfig = userType ? THEME_COLORS[userType] : THEME_COLORS.default;
  const backgroundClasses = `min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out bg-gradient-to-br ${themeConfig.backgroundFrom} ${themeConfig.backgroundTo}`;
  
  return (
    <div className={backgroundClasses} style={{fontFamily: "'Inter', sans-serif"}}>
      <main className="w-full max-w-4xl">
        {currentView === 'selection' && <UserSelector onSelectUser={handleUserSelect} />}
        {currentView === 'brushing' && userType && brushingSteps.length > 0 && (
          <BrushingScreen
            userType={userType}
            steps={brushingSteps}
            currentStepIndex={currentStepIndex}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
            onSessionEnd={handleSessionEnd}
            shouldAutoStartTimer={shouldAutoStartTimer}
            onTimerAutoStarted={onTimerAutoStarted}
          />
        )}
        {currentView === 'completion' && userType && (
          <CompletionScreen
            userType={userType}
            onRestart={handleRestart}
            onChangeUser={handleSessionEnd}
          />
        )}
      </main>
      <footer className="text-center mt-8">
        <p className={`text-sm ${userType ? THEME_COLORS[userType].text : THEME_COLORS.default.text} opacity-70`}>
          Brushing Buddy - Healthy Smiles Start Here!
        </p>
      </footer>
    </div>
  );
};

export default App;
