import React from 'react';
import { getAMPM, getTime, getWeekDay } from '../services/helpers';

const DateAndTime = ({ weatherData, unitSystem }) => {
    return (
        <div>
            <h3 className=' text-2xl mb-3 sm:mb-0'>
                {`${getWeekDay(weatherData)}, ${getTime(unitSystem, weatherData?.dt, weatherData?.timezone)} ${getAMPM(unitSystem, weatherData?.dt, weatherData?.timezone)}`}
            </h3>
        </div>
    )
}

export default DateAndTime;