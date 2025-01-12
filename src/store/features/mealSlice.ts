import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Meal {
    id: string;
    img: string;
    name: string;
    dsc: string;
    price: number;
    rate: number;
    country: string;
}

export interface MealState {
    meals: Meal[]
}

const initialState: MealState = {
    meals: []
}

const MealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        seatMeals(state, action: PayloadAction<{ meal: Meal[] }>) {
            state.meals = action.payload.meal
        },
    }
})

export default MealSlice.reducer
export const { seatMeals } = MealSlice.actions