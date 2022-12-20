import React from 'react';
import SearchBox from './SearchBox';

const ErrorScreen = ({ city, onChange, onKeyDown, message }) => {
    return (
        <div className=' w-screen h-screen fixed top-0 left-0 right-0 bottom-0 p-5 flex flex-col justify-center items-center'>
            <h1 className=' text-2xl mb-3'>City not found. Try again!</h1>
            {
                message && <div className=' w-full flex flex-col justify-center items-center p-3 rounded-lg mb-3 bg-red-200 text-red-600'>
                {message}
            </div>
            }
            <SearchBox 
                value={city}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default ErrorScreen;