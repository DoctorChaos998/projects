import React, {FC} from 'react';
import {task} from "@/entities/taskList";
import classes from "./Task.module.scss";
import {useAppDispatch} from "@/hooks";
import {taskListActions} from "@/store/slices/taskListSlice/taskListSlice";

interface ITask{
    task: task
}
const Task: FC<ITask> = ({task}) => {
    const dispatch = useAppDispatch();
    return (
        <div className={classes.container}>
            <input type={'checkbox'} onChange={(event) => dispatch(taskListActions.setTaskCompletion({id: task.id, isCompleted: event.target.checked}))}/>
            <p className={classes.taskText} style={{textDecoration: task.isCompleted?"line-through":'none'}}>
                {task.text}
            </p>
            <button className={classes.deleteButton} onClick={() => dispatch(taskListActions.deleteTask(task.id))}>X</button>
        </div>
    );
};

export default Task;