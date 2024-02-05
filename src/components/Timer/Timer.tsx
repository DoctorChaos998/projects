'use client'
import React, {FC, useEffect, useState} from 'react';
import classes from "./Timer.module.scss";

interface ITimerProps{
    eventDate: number
}
const Timer: FC<ITimerProps> = ({eventDate}) => {
    const [remainingTime, setRemainingTime] = useState<number>(0);
    useEffect(() => {
        setRemainingTime(eventDate - Date.now());
        const interval = setInterval(() => {
            setRemainingTime(eventDate - Date.now());
        },1000);
        return () => clearInterval(interval);
    }, []);
    const days = Math.floor(remainingTime/(1000*3600*24));
    const hours = Math.floor((remainingTime - days * (1000*3600*24))/(1000*3600));
    const minutes = Math.floor(((remainingTime - days * (1000*3600*24)) - hours * (1000*3600))/(1000*60));
    const seconds = Math.floor(((remainingTime - days * (1000*3600*24)) - hours * (1000*3600) - minutes * (1000*60))/(1000));
    return (
        <div className={classes.timer}>
            {`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}
        </div>
    );
};

export default Timer;