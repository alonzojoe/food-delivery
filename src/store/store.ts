import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MealSlice from './features/mealSlice';
import CartSlice from './features/cartSlice';
import FavoriteSlice from './features/favoriteSlice';
import AuthSlice from './features/authSlice';


export const store = configureStore({
    reducer: {
        meal: MealSlice,
        cart: CartSlice,
        favorites: FavoriteSlice,
        auth: AuthSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;