import {takeEvery, call} from 'redux-saga/effects';
import API from '../../api';
import {DislikePostRequest} from '../../api/contracts/post/dislike-post';

import {likePost} from '../../store/slices/post/post.slice';

export function* dislikePostSaga(action: any): any {
  try {
    const payloadData: DislikePostRequest = action.payload;
    yield call(API.post.dislikePost, {
      action: payloadData.action,
      userId: payloadData.userId,
      postId: payloadData.postId,
    });
  } catch (e) {}
}

export function* watchDislikePost() {
  yield takeEvery(likePost.type, dislikePostSaga);
}
