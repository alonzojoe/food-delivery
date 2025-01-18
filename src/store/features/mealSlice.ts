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
    isLoading: boolean;
    meals: Meal[] | [];
    allmeals: Meal[] | [];
    error: string | null;
}

const initialState: MealState = {
    isLoading: false,
    meals: [],
    allmeals: [],
    error: null,
}

const MealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        setMeals(state, action: PayloadAction<{ meal: Meal[] }>) {
            state.meals = action.payload.meal
        },
        searchMeal(state, action: PayloadAction<{ keyword: string }>) {
            const { keyword } = action.payload

            state.isLoading = true

            state.meals = state.allmeals.filter((meal) => {
                if (keyword.trim() === '') return true;
                return meal.name.toLowerCase().includes(keyword.toLowerCase());
            });

            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.isLoading = false
                state.allmeals = action.payload.meals
                state.meals = action.payload.meals
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message || 'Failed to fetch meals'
            })
    }
})

export default MealSlice.reducer
export const { setMeals, searchMeal } = MealSlice.actions