import React from 'react';

const MetricsCard = ({ title, icon, metric, unit, className }) => {
    return (
        <div className={`${className} flex flex-col justify-center p-5 rounded-xl bg-gray-50`}>
            <div className=' flex flex-row justify-between items-center'>
                <div>
                    <img className=' w-1/3 sm:w-1/2' src={icon} alt='icon avatar' />
                </div>
                <div className=' flex flex-col justify-center items-end'>
                    <h4 className=' text-md text-cyan-700 text-right'>{title}</h4>
                    <h2 className=' text-3xl font-bold'>{metric}</h2>
                    <p className=''>{unit}</p>
                </div>
            </div>
        </div>
    )
}

export default MetricsCard;