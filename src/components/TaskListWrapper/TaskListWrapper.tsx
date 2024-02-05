'use client'
import React, {useMemo} from 'react';
import classes from "./TaskListWrapper.module.scss";
import TaskList from "@/components/TaskList/TaskList";
import {useAppSelector} from "@/hooks";
import DeleteCompletedTasksButton from "@/components/DeleteCompletedTasksButton/DeleteCompletedTasksButton";
import TaskListSearchInput from "@/components/TaskListSearch/TaskListSearchInput";

const TaskListWrapper = () => {
    const taskList = useAppSelector(state => state.taskListReducer.taskList);
    const searchQuery = useAppSelector(state => state.taskListReducer.searchQuery);
    const temp = useMemo(() => {
        return taskList.filter((task) => task.text.includes(searchQuery))
    }, [searchQuery, taskList]);
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.helpersContainer}>
                    <TaskListSearchInput></TaskListSearchInput>
                    <DeleteCompletedTasksButton></DeleteCompletedTasksButton>
                </div>
                <hr className={classes.boundaryLine}/>
                {taskList.length?<TaskList taskList={temp}></TaskList>:<div className={classes.emptyListContainer}>
                    <h2 className={classes.emptyTaskList}>Task list is empty</h2>
                </div>}
            </div>
        </div>
    );
};

export default TaskListWrapper;