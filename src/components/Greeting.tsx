'use client';

import React, { useState, useEffect } from 'react';

const Greeting = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getGreeting = () => {
        const hour = currentTime !== null? currentTime.getHours() : null;
        let greet;
        if(hour === null) {
            return null;
        } else {
            if (hour >= 6 && hour < 12) {
                greet = 'おはよう';
            } else if (hour >= 12 && hour < 18) {
                greet = 'こんにちは'
            } else {
                greet = 'こんばんは'
            }
            return greet + '　おやすみなさい';
        }
    }

    return (
        <div>
            {getGreeting() !== null && <p>{getGreeting()}</p>}
            {currentTime !== null && <p style={{color: '#626262' }}>time: {currentTime.toLocaleTimeString()}</p>}
        </div>
    );
};

export default Greeting;