import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Meal } from "@/store/features/mealSlice"

export interface FavoritesState {
    meals: Meal[]
}

const initialState: FavoritesState = {
    meals: []
}

const FavoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites(state, action: PayloadAction<{ meals: Meal[] }>) {
            state.meals = action.payload.meals
        },
        addOrRemoveItem(state, action: PayloadAction<{ meal: Meal }>) {
            const { meal } = action.payload;
            const existingItem = state.meals.find((mealItem) => mealItem.id === meal.id);

            if (existingItem) {
                state.meals = state.meals.filter((mealItem) => mealItem.id !== meal.id);
            } else {
                state.meals.push(meal);
            }
        },
    }
})

export const { addOrRemoveItem, setFavorites } = FavoriteSlice.actions
export default FavoriteSlice.reducer