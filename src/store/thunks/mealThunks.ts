import api from "@/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async (endpoint: string) => {
    const response = await api.get(endpoint);
    return {
        meals: response.data,
    };
})