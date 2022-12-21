import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeIcon = ({ darkMode, setDarkMode }) => {
    return (
        <div className=' flex flex-row items-center cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
            <p className=' text-sm font-bold mx-2 text-gray-700 dark:text-white'>
                { darkMode ? 'Light Mode' : 'Dark Mode' }
            </p>
            <FontAwesomeIcon
                icon={faMoon}
                className=' text-2xl text-gray-700 dark:text-white'
            />
        </div>
    )
}

export default DarkModeIcon;