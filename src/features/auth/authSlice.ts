import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    email: string;
    uid: string;
    displayName: string;
    photoURL?: string;
}

const initialState: UserState | null = null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (_, action: PayloadAction<UserState>) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        },
    },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
