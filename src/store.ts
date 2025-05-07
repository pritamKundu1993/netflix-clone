import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/auth/authSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// For use in useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
