import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {AddPostRequest} from '../../../api/contracts/post/add-post';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';
import Post from '../../../shared/models/post.model';

interface PostState {
  postList: Array<Post>;
  postListStatus: FetchingStatus;
}

const postInitialState: PostState = {
  postList: [],
  postListStatus: FetchingStatus.UNSET,
};

export const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  reducers: {
    fetchPosts: (state: PostState) => {
      state.postListStatus = FetchingStatus.PENDING;
    },
    setPosts: (state: PostState, {payload}: PayloadAction<Array<Post>>) => {
      state.postList = payload;
      state.postListStatus = FetchingStatus.COMPLETE;
    },
    addPost: (state: PostState, {payload}: PayloadAction<AddPostRequest>) => {},
  },
});

export const {fetchPosts, setPosts, addPost} = postSlice.actions;

const thisSlice = (state: RootState) => state.post;

export const selectPostList = (state: RootState) => thisSlice(state).postList;
export const selectPostListStatus = (state: RootState) =>
  thisSlice(state).postListStatus;

export default postSlice.reducer;
