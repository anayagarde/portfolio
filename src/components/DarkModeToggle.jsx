import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import classNames from 'classnames';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    const html = document.querySelector('html');
    html.classList.toggle('dark', isDarkMode);
  };

  const darkModeClasses = classNames({
    'dark': isDarkMode,
  });

  return (
    <div className="text-xl cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? <FiMoon className={darkModeClasses} /> : <FiSun className={darkModeClasses} />}
    </div>
  );
};

export default DarkModeToggle;
