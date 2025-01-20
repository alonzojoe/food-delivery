import type { AuthUser } from "@/pages/StartUp/StartUp"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthSliceState = {
    user: AuthUser | null
}

const initialState: AuthSliceState = {
    user: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: AuthUser }>) {
            state.user = action.payload.user
        }
    }
})

export const { setUser } = AuthSlice.actions
export default AuthSlice.reducer