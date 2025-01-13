import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMeals } from "../thunks/mealThunks";

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
    isLoading: boolean,
    meals: Meal[] | [],
    error: string | null,
}

const initialState: MealState = {
    isLoading: false,
    meals: [],
    error: null,
}

const MealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        setMeals(state, action: PayloadAction<{ meal: Meal[] }>) {
            state.meals = action.payload.meal
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.isLoading = false
                state.meals = action.payload.meals
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message || 'Failed to fetch meals'
            })
    }
})

export default MealSlice.reducer
export const { setMeals } = MealSlice.actions