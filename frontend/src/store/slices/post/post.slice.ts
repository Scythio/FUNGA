import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {AddPostRequest} from '../../../api/contracts/post/add-post';
import {DislikePostRequest} from '../../../api/contracts/post/dislike-post';
import {GetPostDetailsRequest} from '../../../api/contracts/post/get-post-details';
import {LikePostRequest} from '../../../api/contracts/post/like-post';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';
import {PostDetails} from '../../../shared/models/post-details.model';
import Post from '../../../shared/models/post.model';

interface PostState {
  postList: Array<Post>;
  postListStatus: FetchingStatus;
  postDetails: PostDetails | null;
  postDetailsStatus: FetchingStatus;
}

const postInitialState: PostState = {
  postList: [],
  postListStatus: FetchingStatus.UNSET,
  postDetails: null,
  postDetailsStatus: FetchingStatus.UNSET,
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
    fetchPostDetails: (
      state: PostState,
      {payload}: PayloadAction<GetPostDetailsRequest>,
    ) => {
      state.postDetailsStatus = FetchingStatus.PENDING;
    },
    setCurrentPostDetails: (
      state: PostState,
      {payload}: PayloadAction<PostDetails>,
    ) => {
      state.postDetails = payload;
      state.postDetailsStatus = FetchingStatus.COMPLETE;
    },
    clearPostDetails: (state: PostState) => {
      state.postDetails = null;
    },
    likePost: (
      state: PostState,
      {payload}: PayloadAction<LikePostRequest>,
    ) => {},
    dislikePost: (
      state: PostState,
      {payload}: PayloadAction<DislikePostRequest>,
    ) => {},
  },
});

export const {
  fetchPosts,
  setPosts,
  addPost,
  fetchPostDetails,
  setCurrentPostDetails,
  clearPostDetails,
  likePost,
  dislikePost,
} = postSlice.actions;

const thisSlice = (state: RootState) => state.post;

export const selectPostList = (state: RootState) => thisSlice(state).postList;
export const selectPostListStatus = (state: RootState) =>
  thisSlice(state).postListStatus;
export const selectCurrentPostDetails = (state: RootState) =>
  thisSlice(state).postDetails;

export const selectPostDetailsStatus = (state: RootState) =>
  thisSlice(state).postDetailsStatus;

export default postSlice.reducer;
