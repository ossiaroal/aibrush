
import React from 'react';
import { UserType } from '../types';
import { AdultUserIcon, ChildUserIcon, THEME_COLORS, ToothIcon } from '../constants';

interface UserSelectorProps {
  onSelectUser: (userType: UserType) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ onSelectUser }) => {
  const adultTheme = THEME_COLORS[UserType.Adult];
  const childTheme = THEME_COLORS[UserType.Child];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10 rounded-xl shadow-2xl bg-white/80 backdrop-blur-md max-w-md w-full">
      <ToothIcon className={`w-16 h-16 mb-6 ${THEME_COLORS.default.primary}`} />
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-700" style={{fontFamily: "'Poppins', sans-serif"}}>
        Who's Brushing Today?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <button
          onClick={() => onSelectUser(UserType.Adult)}
          className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${adultTheme.backgroundFrom} ${adultTheme.backgroundTo} focus:outline-none focus:ring-4 focus:ring-${adultTheme.accent}/50`}
        >
          <AdultUserIcon className={`w-16 h-16 mb-3 text-${adultTheme.primary}`} />
          <span className={`text-xl font-semibold ${adultTheme.text}`}>I'm an Adult</span>
        </button>
        <button
          onClick={() => onSelectUser(UserType.Child)}
          className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${childTheme.backgroundFrom} ${childTheme.backgroundTo} focus:outline-none focus:ring-4 focus:ring-${childTheme.accent}/50`}
        >
          <ChildUserIcon className={`w-16 h-16 mb-3 text-${childTheme.primary}`} />
          <span className={`text-xl font-semibold ${childTheme.text}`}>I'm a Child</span>
        </button>
      </div>
    </div>
  );
};

export default UserSelector;
