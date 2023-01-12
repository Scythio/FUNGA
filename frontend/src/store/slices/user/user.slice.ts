import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../shared/models/user.model';

interface UserState {
  currentUser: User | null;
}

const userInitialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});

export default userSlice.reducer;
