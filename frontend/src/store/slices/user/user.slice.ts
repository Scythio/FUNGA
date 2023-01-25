import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModelResponse} from '../../../api/contracts/sendMessage';
import {User} from '../../../shared/models/user.model';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';
import {RootState} from '../..';
import {LoginRequest} from '../../../api/contracts/user/log-in';

interface UserState {
  currentUser: User | null;
  messageResponse: ModelResponse | null;
  messageResponseStatus: FetchingStatus;
  loginStatus: FetchingStatus;
}

const userInitialState: UserState = {
  currentUser: null,
  messageResponse: null,
  messageResponseStatus: FetchingStatus.UNSET,
  loginStatus: FetchingStatus.UNSET,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    fetchMessageResponse: (state: UserState) => {
      state.messageResponseStatus = FetchingStatus.PENDING;
    },
    setMessageResponse: (
      state: UserState,
      {payload}: PayloadAction<ModelResponse>,
    ) => {
      state.messageResponse = payload;
      state.messageResponseStatus = FetchingStatus.COMPLETE;
    },
    postMessageResponse: (
      state: UserState,
      {payload}: PayloadAction<ModelResponse>,
    ) => {},
    loginUser: (state: UserState, {payload}: PayloadAction<LoginRequest>) => {
      state.loginStatus = FetchingStatus.PENDING;
    },
    setUser: (state: UserState, {payload}: PayloadAction<User>) => {
      state.loginStatus = FetchingStatus.COMPLETE;
      state.currentUser = payload;
    },
    setLoginStatusFailed: (state: UserState) => {
      state.loginStatus = FetchingStatus.ERROR;
    },
  },
});

export const {
  fetchMessageResponse,
  setMessageResponse,
  postMessageResponse,
  loginUser,
  setUser,
  setLoginStatusFailed,
} = userSlice.actions;

const thisSlice = (state: RootState) => state.user;

export const selectMessageResponse = (state: RootState) =>
  thisSlice(state).messageResponse;
export const selectMessageResponseStatus = (state: RootState) =>
  thisSlice(state).messageResponseStatus;
export const selectCurrentUser = (state: RootState) =>
  thisSlice(state).currentUser;

export default userSlice.reducer;
