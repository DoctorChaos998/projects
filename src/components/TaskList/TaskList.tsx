import React, {FC, memo} from 'react';
import {task} from "@/entities/taskList";
import classes from "./TaskList.module.scss";
import Task from "@/components/Task/Task";

interface ITaskList{
    taskList: task[]
}
const TaskList: FC<ITaskList> = ({taskList}) => {
    return (
        <div className={classes.container}>
            {taskList.length?taskList.map((task) => <Task task={task} key={task.id}/>):<div className={classes.emptySearchContainer}>
                <h2 className={classes.emptySearchText}>
                    Tasks not found
                </h2>
            </div>}
            {}
        </div>
    );
};

export default TaskList;