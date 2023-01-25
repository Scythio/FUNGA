import {put, takeEvery, all, call} from 'redux-saga/effects';
import API from '../../api';
import {
  GetPostDetailsRequest,
  GetPostDetailsResponse,
} from '../../api/contracts/post/get-post-details';
import {PostDetailsDTO} from '../../api/models/post-details-dto.model';
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
    const postDetailsDto: PostDetailsDTO = JSON.parse(messageResponse.data);
    const postDetails: PostDetails = {
      mushroomId: postDetailsDto.mushroom_id,
      userId: postDetailsDto.user_id,
      userUpvoted: postDetailsDto.user_upvoted,
      userDownvoted: postDetailsDto.user_downvoted,
      id: postDetailsDto.id,
      quantity: postDetailsDto.quantity,
      latitude: postDetailsDto.latitude,
      longitude: postDetailsDto.longitude,
      upvotes: postDetailsDto.upvotes,
      downvotes: postDetailsDto.downvotes,
      image: postDetailsDto.image,
    };

    yield put({type: setCurrentPostDetails.type, payload: postDetails});
  } catch (e) {}
}

export function* watchFetchPostDetails() {
  yield takeEvery(fetchPostDetails.type, fetchPostDetailsSaga);
}
