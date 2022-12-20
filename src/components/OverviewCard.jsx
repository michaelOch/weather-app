import React from 'react';
import { getImage } from '../services/imagePicker';

const OverviewCard = ({ city, country, description, icon, weatherData, unitSystem }) => {

    const image = getImage(icon);
    return (
        <section className=' flex flex-col justify-center items-center p-5 h-full bg-gray-50'>
            <h3 className=' text-3xl font-bold'>{city}, {country}</h3>
            <h5 className=' text-2xl mt-2'>{description}</h5>
            <div className=' w-full flex flex-row justify-center items-center p-2'>
                <img 
                    className=' w-2/3 sm:w-full'
                    src={image}
                    alt='humidity' 
                />
            </div>
            <h1 className=' text-4xl font-bold'>
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
            <p className=' text-xl'>Feels like &nbsp;
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