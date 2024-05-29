import React, { useEffect, useState } from 'react';
import './LiveClock.css';

function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short' 
    };
    const timeString = time.toLocaleTimeString(undefined, options);

    return (
        <div id="clock">
            {timeString}
        </div>
    );
};

export default LiveClock;
