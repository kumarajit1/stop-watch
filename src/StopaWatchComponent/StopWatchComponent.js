import { useEffect, useState } from "react";
import React from 'react'

export default function StopWatchComponent() {
    const [time, setTime] = useState(0);
    const [Active, setActive] = useState(false);
    const [Paused, setPaused] = useState(true);

    // const hours = Math.floor(time / 3600000);
    // const minutes = Math.floor((time / 6000));
    // const seconds = Math.floor((time /1000));
    // const milliseconds = Math.floor(time%100);

    // const hours = Math.floor(time / 360000);
    // const minutes = Math.floor((time / 360000)%6000);
    // const seconds = Math.floor((time /6000)%100);
    // const milliseconds = Math.floor(time%100);

    const totalSeconds = Math.floor(time / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
    const seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60);
    const milliseconds = time % 1000;


    useEffect(() => {
        let interval = null;

        if (Active && Paused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [Active, Paused]);

    const handleStart = () => {
        setActive(true);
        setPaused(false);
    };

    const handlePause = () => {
        setPaused(true);
    };

    const handleReset = () => {
        setActive(false);
        setTime(0);
    };

    return (
        <div>
            <div id='box'>
                <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
            </div>
            <div id='Button'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
