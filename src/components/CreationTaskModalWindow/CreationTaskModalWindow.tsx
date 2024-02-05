'use client'
import React, {useRef} from 'react';
import { createPortal } from 'react-dom';
import classes from "./CreationTaskModalWindow.module.scss";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {taskListActions} from "@/store/slices/taskListSlice/taskListSlice";

const CreationTaskModalWindow = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const creationModalWindowIsVisible = useAppSelector(state => state.taskListReducer.creationModalWindowIsVisible);

    const addNewTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(taskListActions.addTask(inputRef.current!.value));
        dispatch(taskListActions.setCreationModalWindowIsVisible(false));
    }
    return (
        <>
            {creationModalWindowIsVisible?
                createPortal(<div className={classes.container} onKeyDown={(event) => {
                    if(event.key === 'Escape') dispatch(taskListActions.setCreationModalWindowIsVisible(false));
                }} onClick={() => dispatch(taskListActions.setCreationModalWindowIsVisible(false))}>
                        <form className={classes.modalWindow} onClick={(event) => event.stopPropagation()} onSubmit={addNewTaskHandler}>
                            <h3 style={{marginBottom: '20px', color: "white"}}>Input task:</h3>
                            <input className={classes.input} placeholder={'Learn JS'} autoFocus={true} ref={inputRef}/>
                            <button className={classes.button} type={"submit"}>
                            <span className="material-icons">
                                add
                            </span>
                                Create
                            </button>
                        </form>
                </div>, document.getElementById('modalsContainer')!)
                :
                null}
        </>
    );
};

export default CreationTaskModalWindow;