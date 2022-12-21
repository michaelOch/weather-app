import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OverviewCard from './OverviewCard';
import MetricsBox from './MetricsBox';

import DateAndTime from './DateAndTime';
import SearchBox from './SearchBox';
import UnitSwitch from './UnitSwitch';
import ErrorScreen from './ErrorScreen';
import Loading from './Loading';
import DarkModeIcon from './DarkModeIcon';

const Layout = ({ darkMode, setDarkMode }) => {
    
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("Geesthacht");
    const [unitSystem, setUnitSystem] = useState("metric");
    const [fetchData, setFetchData] = useState(true);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

    const changeSystem = () => {
        if (unitSystem === 'metric') {
            setUnitSystem('imperial');
        } else {
            setUnitSystem('metric');
        }
    }

    useEffect(() => {

        setLoading(true);
        if (city === '') setCity('Geesthacht');

        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
            .then(res => {
                setWeatherData(res.data);
                setCity('');
                setErr('');
                setLoading(false);
            })
            .catch(error => {
                setCity('')
                setLoading(false);
                setErr(error?.response?.data?.message);
            })

    }, [fetchData]);

    return (
        <>
        {
            loading
                ? <Loading />
                : (err !== '')
                    ? <ErrorScreen 
                            message={err} 
                            city={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            onKeyDown={(e) => e.keyCode === 13 && setFetchData(!fetchData)} 
                        />
                    :
        <section className=' flex flex-col lg:flex-row justify-start md:rounded-2xl bg-gray-200 dark:bg-gray-900 dark:text-white shadow-xl overflow-hidden'>
            <div className=' w-full lg:w-1/3'>
                <OverviewCard
                    city={weatherData?.name}
                    country={weatherData?.sys?.country}
                    description={weatherData?.weather[0]?.description}
                    icon={weatherData.weather[0].icon}
                    weatherData={weatherData}
                    unitSystem={unitSystem}
                />
            </div>
            <div className=' w-full lg:w-2/3 flex flex-col justify-center items-center flex-grow p-5'>
                <div className=' w-full flex justify-end mb-3'>
                    <DarkModeIcon
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
                <div className=' w-full flex flex-col sm:flex-row justify-between items-center mb-5'>
                    <DateAndTime 
                        weatherData={weatherData} 
                        unitSystem={unitSystem} 
                    />
                    <SearchBox 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={(e) => e.keyCode === 13 && setFetchData(!fetchData)}
                    />
                </div>
                <MetricsBox 
                    weatherData={weatherData} 
                    unitSystem={unitSystem} 
                />
                <UnitSwitch 
                    onClick={changeSystem} 
                    unitSystem={unitSystem} 
                />
            </div>
        </section>
        }
        </>
    )

}

export default Layout;