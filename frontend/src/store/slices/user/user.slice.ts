import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ModelResponse } from '../../../api/contracts/sendMessage';
import {User} from '../../../shared/models/user.model';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';
import { RootState } from '../..';


interface UserState {
  currentUser: User | null;
  messageResponse: ModelResponse | null;
  messageResponseStatus: FetchingStatus;
}

const userInitialState: UserState = {
  currentUser: null,
  messageResponse: null,
  messageResponseStatus: FetchingStatus.UNSET,
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
      {payload}: PayloadAction<ModelResponse>
      ) => {
        state.messageResponse = payload;
        state.messageResponseStatus = FetchingStatus.COMPLETE;
    },
    postMessageResponse: (
      state: UserState,
      {payload}: PayloadAction<ModelResponse>
       ) => {
        
      }
  },
});

export const {fetchMessageResponse, setMessageResponse, postMessageResponse} = userSlice.actions;

const thisSlice = (state: RootState) => state.user;

export const selectMessageResponse = (state: RootState) => thisSlice(state).messageResponse;
export const selectMessageResponseStatus = (state: RootState) => thisSlice(state).messageResponseStatus;

export default userSlice.reducer;
