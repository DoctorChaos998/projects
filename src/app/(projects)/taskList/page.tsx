import React from 'react';
import {Metadata} from "next";
import classes from "./taskList.module.scss";
import TaskListWrapper from "@/components/TaskListWrapper/TaskListWrapper";
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton";
import CreationTaskModalWindow from "@/components/CreationTaskModalWindow/CreationTaskModalWindow";

export const metadata: Metadata = {
    title: 'TaskList',
}
const TaskListPage = () => {
    return (
        <div className={classes.background}>
            <TaskListWrapper></TaskListWrapper>
            <AddTaskButton></AddTaskButton>
            <CreationTaskModalWindow></CreationTaskModalWindow>
        </div>
    );
};

export default TaskListPage;