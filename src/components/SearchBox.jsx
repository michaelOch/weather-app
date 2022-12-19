import React from 'react';

const SearchBox = ({ value, onChange, onKeyDown }) => {
    return (
        <input 
            type='text' 
            className=' w-full sm:w-1/2 rounded-xl shadow-md focus:outline-blue-400 p-2 text-right' 
            placeholder='search a city...' 
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default SearchBox;