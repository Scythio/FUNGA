import {takeEvery, call} from 'redux-saga/effects';
import API from '../../api';
import {LikePostRequest} from '../../api/contracts/post/like-post';

import {likePost} from '../../store/slices/post/post.slice';

export function* likePostSaga(action: any): any {
  try {
    const payloadData: LikePostRequest = action.payload;
    yield call(API.post.likePost, {
      action: payloadData.action,
      userId: payloadData.userId,
      postId: payloadData.postId,
    });
  } catch (e) {}
}

export function* watchLikePost() {
  yield takeEvery(likePost.type, likePostSaga);
}
