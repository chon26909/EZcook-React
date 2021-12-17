import { configureStore } from '@reduxjs/toolkit';

//reducers
import foodReducer from "./slices/foodSlice";

export default configureStore({
    reducer: {
        foods: foodReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});