import {put, takeEvery, call} from 'redux-saga/effects';
import API from '../../api';
import {
  AddPostRequest,
  AddPostResponse,
} from '../../api/contracts/post/add-post';

import {addPost, fetchPosts} from '../../store/slices/post/post.slice';

export function* addPostSaga(action: any): any {
  try {
    const payloadData: AddPostRequest = action.payload;
    const messageResponse: AddPostResponse = yield call(API.post.addPost, {
      mushroomId: payloadData.mushroomId,
      quantity: payloadData.quantity,
      latitude: payloadData.latitude,
      longitude: payloadData.longitude,
      userId: payloadData.userId,
    });
    yield put({type: fetchPosts.type});
  } catch (e) {}
}

export function* watchAddPost() {
  yield takeEvery(addPost.type, addPostSaga);
}
