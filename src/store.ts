import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/auth/authSlice';
import movieReducer from './features/movies/movieSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    },
});

// For use in useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
