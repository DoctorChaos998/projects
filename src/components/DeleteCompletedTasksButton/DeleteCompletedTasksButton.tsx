import React from 'react';
import {useAppDispatch} from "@/hooks";
import classes from "./DeleteCompletedTasksButton.module.scss";
import {taskListActions} from "@/store/slices/taskListSlice/taskListSlice";

const DeleteCompletedTasksButton = () => {
    const dispatch = useAppDispatch();
    return (
        <button className={classes.button} onClick={() => dispatch(taskListActions.deleteCompletedTasks())}>
            <span className="material-icons">
                delete_forever
            </span>
            Delete completed
        </button>
    );
};

export default DeleteCompletedTasksButton;