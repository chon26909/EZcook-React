import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllFood = createAsyncThunk('getFood', async () => {
    try {
        const res = await axios.get('https://ezcooks.herokuapp.com/food?category=ทั้งหมด');
        return res
    } catch (error) {
        throw error;        
    }
})

const foodSlice = createSlice({
    name:'foods',
    initialState: {
        data: [],
        loading: false,
        status:'idle',
        error:''
    },
    reducers: {
        
    },
    extraReducers: {
        [getAllFood.pending]: (state, action) => {
            state.loading = true;
            state.status = 'pending';
            state.error = ''
        },
        [getAllFood.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = 'fulfilled';
            state.data = action.payload.data;
            state.error = '';
        },
        [getAllFood.rejected]: (state, action) => {
            state.loading = false; 
            state.status = 'rejected';
            state.data = []
            state.error = 'error fetch';
        }
    }
})

//action

//reducer
export default foodSlice.reducer;