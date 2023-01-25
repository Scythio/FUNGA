import {put, takeEvery, all, call} from 'redux-saga/effects';
import API from '../../api';
import {
  GetPostDetailsRequest,
  GetPostDetailsResponse,
} from '../../api/contracts/post/get-post-details';
import {PostDetails} from '../../shared/models/post-details.model';

import {
  fetchPostDetails,
  setCurrentPostDetails,
} from '../../store/slices/post/post.slice';

export function* fetchPostDetailsSaga(action: any): any {
  try {
    const payloadData: GetPostDetailsRequest = action.payload;
    const messageResponse: GetPostDetailsResponse = yield call(
      API.post.getPostDetails,
      {
        userId: payloadData.userId,
        postId: payloadData.postId,
      },
    );

    const postDetails: PostDetails = {
      ...messageResponse.data,
      mushroomId: messageResponse.data.mushroom_id,
      userId: messageResponse.data.user_id,
      userUpvoted: messageResponse.data.user_upvoted,
      userDownvoted: messageResponse.data.user_downvoted,
    };

    yield put({type: setCurrentPostDetails.type, payload: postDetails});
  } catch (e) {}
}

export function* watchFetchPostDetails() {
  yield takeEvery(fetchPostDetails.type, fetchPostDetailsSaga);
}
