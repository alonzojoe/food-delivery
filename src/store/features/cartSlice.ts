import { Meal } from "@/store/features/mealSlice"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CartItem extends Meal {
    amount: number;
    quantity: number;
}

export interface CartState {
    cart: CartItem[],
    totalAmount: number,
}

const initialState: CartState = {
    cart: [],
    totalAmount: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<{ meals: CartItem[] }>) {
            state.cart = action.payload.meals;
            state.totalAmount = action.payload.meals.reduce((total, current) => total + (current.price * current.quantity), 0)


        },
        addToCart(state, action: PayloadAction<{ item: CartItem }>) {
            const { item } = action.payload;

            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cart.push(item as CartItem);
            }

            state.totalAmount = state.cart.reduce((total, current) => total + current.price * current.quantity, 0)


        },
        removeToCart(state, action: PayloadAction<{ item: CartItem }>) {
            const { item } = action.payload

            const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id)

            if (existingItemIndex !== -1) {

                const existingItem = state.cart[existingItemIndex]

                if (existingItem) {

                    existingItem.quantity -= item.quantity;
                    // existingItem.amount -= item.amount;

                } else {
                    state.cart.splice(existingItemIndex, 1)
                }


                state.totalAmount = state.cart.reduce((total, curr) => total + curr.price * curr.quantity, 0)

            }


        }
    }
})

export default CartSlice.reducer
export const { addToCart, removeToCart, setCart } = CartSlice.actions