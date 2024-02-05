import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getId} from "@/helpers/taskListHelper";
import {task} from "@/entities/taskList";


interface taskListState{
    taskList: task[],
    creationModalWindowIsVisible: boolean,
    searchQuery: string,
}
const initialState: taskListState = {
    taskList: [],
    creationModalWindowIsVisible: false,
    searchQuery: '',
}
const taskListSlice = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers: {
        setCreationModalWindowIsVisible: (state, action: PayloadAction<boolean>) => {
            state.creationModalWindowIsVisible = action.payload;
        },
        addTask: (state, action: PayloadAction<string>) => {
            state.taskList.push({id: getId(), text: action.payload, isCompleted: false});
        },
        setTaskCompletion: (state, action:PayloadAction<{id: number, isCompleted: boolean}>) => {
            state.taskList.forEach((task) => {
                if(task.id === action.payload.id) task.isCompleted = action.payload.isCompleted;
            });
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.taskList = state.taskList.filter((task) => task.id!==action.payload);
        },
        deleteCompletedTasks: (state) => {
            state.taskList = state.taskList.filter((task) => task.isCompleted!==true);
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    }
})

export const {actions: taskListActions, reducer: taskListReducer} = taskListSlice;