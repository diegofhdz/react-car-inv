import { createSlice } from '@reduxjs/toolkit';

const RootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year_: 1900
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year_ = action.payload },
    }
})

export const reducer = RootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear } = RootSlice.actions;