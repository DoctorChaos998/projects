import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {colorsReducer} from "@/store/slices/colorsSlice/colorsSlice";
import {taskListReducer} from "@/store/slices/taskListSlice/taskListSlice";


const rootReducer = combineReducers({
    colorsReducer,
    taskListReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    //devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch