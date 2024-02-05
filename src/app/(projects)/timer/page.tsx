import React from 'react';
import classes from "./timerPage.module.scss";
import Timer from "@/components/Timer/Timer";

const TimerPage = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                Before the new year:
            </h1>
            <Timer eventDate={new Date(2024,0,1,0,0, 0).valueOf()}></Timer>
        </div>
    );
};

export default TimerPage;