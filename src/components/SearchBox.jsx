import React from 'react';

const SearchBox = ({ value, onChange, onKeyDown }) => {
    return (
        <input 
            type='text' 
            className=' w-full sm:w-1/2 rounded-xl shadow-lg focus:outline-blue-400 p-2 text-right dark:bg-gray-700 dark:text-white' 
            placeholder='search a city...' 
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default SearchBox;