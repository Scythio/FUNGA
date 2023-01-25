import {put, takeEvery, all, call} from 'redux-saga/effects';
import API from '../../api';
import {GetPostListResponse} from '../../api/contracts/post/get-post-list';
import PostDTO from '../../api/models/post-dto.model';
import Post from '../../shared/models/post.model';

import {fetchPosts, setPosts} from '../../store/slices/post/post.slice';

export function* fetchPostListSaga(action: any): any {
  try {
    const messageResponse: GetPostListResponse = yield call(
      API.post.getPostList,
      {},
    );
    const posts: Array<Post> = messageResponse.data.map((value: string) => {
      const parseData: PostDTO = JSON.parse(value);
      return {
        id: parseData.id,
        mushroomId: parseData.mushroom_id,
        quantity: parseData.quantity,
        latitude: parseData.latitude,
        longitude: parseData.longitude,
        upvotes: parseData.upvotes,
        downvotes: parseData.downvotes,
      };
    });
    yield put({type: setPosts.type, payload: posts});
  } catch (e) {}
}

export function* watchFetchPostList() {
  yield takeEvery(fetchPosts.type, fetchPostListSaga);
}
