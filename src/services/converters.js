export const cToF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.23694).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(':');

    return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (deg) => {
    const value = Math.round(deg / 22.5);
    const directionArr = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
    ];

    return directionArr[value % 16];
};

export const unixToLocalTime = (unixSeconds, timezone) => {
    const time = new Date((unixSeconds + timezone) * 1000).toISOString().match(/(\d{2}:\d{2})/)[0];

    return time.startsWith('0') ? time.substring(1) : time;
};