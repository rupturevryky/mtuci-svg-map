import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: [],
    isActive: false
}

const filterSlise = createSlice({
    name: "filter",
    initialState,
    reducers: {
        fullList: (state, action) => {
            state.filter = action.payload
        },
        changeActive: (state) => {
            state.isActive = !state.isActive
        }
    }
})

const { actions, reducer } = filterSlise;
export default reducer;
export const { fullList, changeActive } = actions;