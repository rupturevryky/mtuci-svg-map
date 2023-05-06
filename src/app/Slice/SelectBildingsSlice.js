import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enclouresCase: [
        {
            id: 1,
            title: "Главный корпус",
            active: false,
            color: "#FFD4A1"
        },
        {
            id: 2,
            title: "Лабораторный корпус",
            active: false,
            color: "#D7FF83"
        },
        {
            id: 3,
            title: "УЛК (Учебно-лабораторный корпус)",
            active: false,
            color: "#FFFCA9"
        },
        {
            id: 4,
            title: "Конгресс-центр",
            active: false,
            color: "#FFB4E1"
        },
        {
            id: 5,
            title: "ДИСиТ",
            active: false,
            color: "#F19E9E"
        },
        {
            id: 6,
            title: "Музей истории электросвязи",
            active: false,
            color: "#B0434A"
        },
        {
            id: 7,
            title: "Библиотечный корпус",
            active: false,
            color: "#8CA5FF"
        }
    ]
}

const enclouresSlice = createSlice({
    name: 'enclouresCase',
    initialState,
    reducers: {
        selectBilding: (state, action) => {
            state.enclouresCase.forEach(Case => {
                if (Case.id === action.id) {
                    Case.active = !Case.active
                }
            })
        }
    }
});

const { actions, reducer } = enclouresSlice;

export default reducer;
export const { selectBilding } = actions;