import React from 'react';
import MetricsCard from './MetricsCard';

import { getAMPM, getTime, getVisibility, getWindSpeed } from '../services/helpers';
import { degToCompass } from '../services/converters';

import humidity from '../assets/humidity.png';
import binocular from '../assets/binocular.png';
import compass from '../assets/compass.png';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';
import wind from '../assets/wind.png';

const MetricsBox = ({ weatherData, unitSystem }) => {
    return (
        <section className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <MetricsCard
                className=' mt-2'
                title='Humidity'
                icon={humidity}
                metric={weatherData?.main?.humidity}
                unit={'%'}
            />
            <MetricsCard
                className=' mt-2'
                title='Wind speed'
                icon={wind}
                metric={getWindSpeed(unitSystem, weatherData?.wind?.speed)}
                unit={unitSystem === 'metric' ? 'm/s' : 'm/h'}
            />
            <MetricsCard
                className=' mt-2'
                title='Wind direction'
                icon={compass}
                metric={degToCompass(weatherData?.wind?.deg)}
            />
            <MetricsCard
                className=' mt-2'
                title='Visibility'
                icon={binocular}
                metric={getVisibility(unitSystem, weatherData?.visibility)}
                unit={unitSystem === 'metric' ? 'km' : 'miles'}
            />
            <MetricsCard
                className=' mt-2'
                title='Sunrise'
                icon={sunrise}
                metric={getTime(unitSystem, weatherData?.sys?.sunrise, weatherData?.timezone)}
                unit={getAMPM(unitSystem, weatherData?.sys?.sunrise, weatherData?.timezone)}
            />
            <MetricsCard
                className=' mt-2'
                title='Sunset'
                icon={sunset}
                metric={getTime(unitSystem, weatherData?.sys?.sunset, weatherData?.timezone)}
                unit={getAMPM(unitSystem, weatherData?.sys?.sunset, weatherData?.timezone)}
            />
        </section>
    )
}

export default MetricsBox;