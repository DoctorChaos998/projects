import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface colorsState{
    colorsCanChange: boolean[];
    notificationIsVisible: boolean;
}
const initialState: colorsState = {
    colorsCanChange: [false, false, false, false, false],
    notificationIsVisible: false
}
const colorsSlice = createSlice({
    name: "colorsSlice",
    initialState,
    reducers:{
        setColorCanChange: (state, action: PayloadAction<number>) => {
            state.colorsCanChange[action.payload] = !state.colorsCanChange[action.payload];
        },
        setNotificationIsVisible: (state, action: PayloadAction<boolean>) => {
            state.notificationIsVisible = action.payload;
        }
    }
})

export const {actions: colorsActions, reducer: colorsReducer} = colorsSlice;