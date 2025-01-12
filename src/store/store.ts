import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MealSlice from './features/mealSlice';
import CartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
        meal: MealSlice,
        cart: CartSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;