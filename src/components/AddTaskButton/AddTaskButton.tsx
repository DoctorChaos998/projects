'use client'
import React from 'react';
import {useAppDispatch} from "@/hooks";
import {taskListActions} from "@/store/slices/taskListSlice/taskListSlice";
import classes from './AddTaskButton.module.scss'

const AddTaskButton = () => {
    const dispatch = useAppDispatch();
    return (
        <button onClick={() => dispatch(taskListActions.setCreationModalWindowIsVisible(true))} className={classes.button}>
            <span className="material-icons">
                playlist_add
            </span>
            Add new task
        </button>
    );
};

export default AddTaskButton;