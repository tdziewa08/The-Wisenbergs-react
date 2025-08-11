import React, { useState, useEffect } from 'react';

export default function CountdownClock({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Calculate immediately
        calculateTimeLeft();
        
        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);
        
        // Cleanup
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="countdown-clock">
            <h3>Next Trivia In:</h3>
            <div className="countdown-display">
                <div className="time-unit">
                    <span className="number">{timeLeft.days}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-unit">
                    <span className="number">{timeLeft.hours}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-unit">
                    <span className="number">{timeLeft.minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-unit">
                    <span className="number">{timeLeft.seconds}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </div>
    );
}