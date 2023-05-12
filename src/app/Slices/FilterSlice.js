import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: [],
    isActive: false
}

const filterSlise = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeActive: (state) => {
            state.isActive = !state.isActive
        },
        changeFilterList: (state, action) => {
            state.filter = [...action.payload]
        }
    }
})

const { actions, reducer } = filterSlise;
export default reducer;
export const { changeActive, changeFilterList } = actions;