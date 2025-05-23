
import React from 'react';
import { UserType } from '../types';
import { CheckCircleIcon, RefreshIcon, LogoutIcon, THEME_COLORS } from '../constants';

interface CompletionScreenProps {
  userType: UserType;
  onRestart: () => void;
  onChangeUser: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ userType, onRestart, onChangeUser }) => {
  const theme = THEME_COLORS[userType] || THEME_COLORS.default;

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 text-center bg-white/90 backdrop-blur-md shadow-2xl rounded-xl max-w-lg w-full">
      <CheckCircleIcon className={`w-20 h-20 mb-6 text-${theme.primary}`} />
      <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${theme.text}`} style={{fontFamily: "'Poppins', sans-serif"}}>
        Awesome Job, {userType}!
      </h1>
      <p className={`text-lg ${theme.secondary} mb-8`}>
        You've successfully completed your brushing session. Keep up the great work for a healthy smile!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={onRestart}
          className={`w-full px-6 py-3 rounded-lg font-semibold ${theme.buttonText} bg-${theme.primary} hover:bg-${theme.primaryHover} transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-${theme.accent} focus:ring-offset-2`}
        >
          <RefreshIcon />
          <span>Brush Again</span>
        </button>
        <button
          onClick={onChangeUser}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`}
        >
          <LogoutIcon />
          <span>Change User</span>
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;
