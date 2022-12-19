import React from 'react';
import SearchBox from './SearchBox';

const ErrorScreen = ({ city, onChange, onKeyDown }) => {
    return (
        <div className=' w-screen h-screen fixed top-0 left-0 right-0 bottom-0 p-5 flex flex-col justify-center items-center'>
            <h1 className=' text-3xl'>City not found. Try again!</h1>
            <SearchBox 
                value={city}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

export default ErrorScreen;