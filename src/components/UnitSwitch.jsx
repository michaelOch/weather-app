import React from 'react';

const UnitSwitch = ({ onClick, unitSystem }) => {
    return (
        <div className=' w-full flex flex-row justify-center lg:justify-end items-center mt-4'>
            <button 
                type='button' 
                className={` mx-2 ${unitSystem === 'metric' ? 'text-green-600' : ''}`}
                onClick={onClick}
            >
                Metric System
            </button>
            <button 
                type='button' 
                className={` mx-2 ${unitSystem === 'imperial' ? 'text-green-600' : ''}`}
                onClick={onClick}
            >
                Imperial System
            </button>
        </div>
    )
}

export default UnitSwitch;