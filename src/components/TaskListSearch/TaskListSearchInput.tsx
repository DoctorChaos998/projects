import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "@/hooks";
import classes from "./TaskListSearchInput.module.scss";
import {useDebounce} from "@/hooks/debounce";
import {taskListActions} from "@/store/slices/taskListSlice/taskListSlice";

const TaskListSearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch();
    const debounceQuery = useDebounce(searchQuery);
    useEffect(() => {
        dispatch(taskListActions.setSearchQuery(searchQuery));
    }, [debounceQuery])
    return (
        <label className={classes.container}>
            <input className={classes.input} placeholder={'Search query...'} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
            <span className={`material-icons ${classes.icon}`}>
                search
            </span>
        </label>
    );
};

export default TaskListSearchInput;