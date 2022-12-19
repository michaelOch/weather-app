import React from 'react';

import sunrise from '../assets/sunrise.png';

const OverviewCard = ({ city, country, description, icon, weatherData, unitSystem }) => {
    return (
        <section className=' flex flex-col justify-center items-center p-5 h-full bg-gray-50'>
            <h3 className=' text-4xl font-bold'>{city}, {country}</h3>
            <h5 className=' text-2xl mt-2'>{description}</h5>
            <div className=' flex flex-row justify-center items-center p-2'>
                <img 
                    className=''
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt='humidity' 
                />
            </div>
            <h1 className=' text-6xl font-bold'>
                {
                    unitSystem === 'metric' 
                        ? Math.round(weatherData?.main?.temp)
                        : Math.round(weatherData?.main?.temp)
                }
                &deg;
                {
                    unitSystem === 'metric' ? 'C' : 'F'
                }
            </h1>
            <p className=' text-lg'>Feels like 
                {
                    unitSystem === 'metric' 
                        ? Math.round(weatherData?.main?.temp)
                        : Math.round(weatherData?.main?.temp)
                }
                &deg;
                {
                    unitSystem === 'metric' ? 'C' : 'F'
                }
            </p>
        </section>
    )
}

export default OverviewCard;