'use client'
import React from 'react';
import {useAppDispatch, useAppSelector} from "@/hooks";
import {CSSTransition} from "react-transition-group";
import classes from "./ColorNotification.module.scss";
import {colorsActions} from "@/store/slices/colorsSlice/colorsSlice";

const ColorNotification = () => {
    const notificationIsVisible = useAppSelector(state => state.colorsReducer.notificationIsVisible);
    const dispatch = useAppDispatch();
    return (
        <div className={classes.notificationContainer}>
            <CSSTransition timeout={{
                enter: 5000,
                exit: 3000
            }} unmountOnExit={true} in={notificationIsVisible}
            onEntered={() => dispatch(colorsActions.setNotificationIsVisible(false))}
            classNames={{
                enter: classes.notificationVisible
            }}>
                <div className={classes.notification}>
                    <h3>
                        Successful copied
                    </h3>
                    <span className={`material-icons ${classes.icon}`}>
                        check_circle
                    </span>
                </div>
            </CSSTransition>
        </div>
    );
};

export default ColorNotification;