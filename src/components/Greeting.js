import React, { useState, useEffect } from 'react';

function Greeting() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 6 && hour < 12) {
            return 'おはよう　ねむいね';
        } else if (hour >= 12 && hour < 18) {
            return 'こんにちは　ねむいね';
        } else {
            return 'こんばんは　ねむいね';
        }
    }

    return (
        <div>
            <p>{getGreeting()}</p>
            <p style={{color: '#626262' }}>time: {currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default Greeting;