import {put, takeEvery, all, call} from 'redux-saga/effects';
import API from '../api';
import {PostMessageResponse} from '../api/contracts/postMessage';
import {PostPostResponse} from '../api/contracts/postPost';
import {SendMessageResponse} from '../api/contracts/sendMessage';
import {addPost} from '../store/slices/mushroom/mushroom.slice';
import {
  fetchMessageResponse,
  postMessageResponse,
  setMessageResponse,
} from '../store/slices/user/user.slice';
import {watchMushroomSpecies} from './mushroom/fetch-mushroom-species.sagas';
import {watchAddPost} from './post/add-post.saga';
import {watchFetchPostList} from './post/fetch-post-list.sagas';

export function* fetchMessageResponseSaga(): any {
  try {
    const messageResponse: SendMessageResponse = yield call(
      API.message.getMesssageResponse,
      {},
    );
    yield put({type: setMessageResponse.type, payload: messageResponse.data});
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPostMessageResponseSaga(action: any): any {
  try {
    const messageResponse: PostMessageResponse = yield call(
      API.message.postMesssageResponse,
      {message: action.payload.response},
    );
    yield put({type: setMessageResponse.type, payload: messageResponse.data});
  } catch (e) {
    console.log(e);
  }
}

export function* fetchAddPostResponseSaga(action: any): any {
  try {
    console.log(action);
    console.log('gg gggg gg');
    const messageResponse: PostPostResponse = yield call(
      API.message.postPostResponse,
      {
        mushroom_pk: action.payload.mushroomPk,
        quantity: action.payload.quantity,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        user_pk: action.payload.userPk,
        image: action.payload.image,
      },
    );
    console.log('gg ffffffff gg');
    console.log(messageResponse);
  } catch (e) {
    console.log('bla bla bla');
    console.log(e);
  }
}

export function* watchMessageResponse() {
  yield takeEvery(fetchMessageResponse.type, fetchMessageResponseSaga);
}

export function* watchPostMessageResponse() {
  yield takeEvery(postMessageResponse.type, fetchPostMessageResponseSaga);
}

export function* watchAddPostResponse() {
  yield takeEvery(addPost.type, fetchAddPostResponseSaga);
}

export default function* rootSaga() {
  yield all([
    watchMessageResponse(),
    watchPostMessageResponse(),
    watchAddPostResponse(),
    watchMushroomSpecies(),
    watchFetchPostList(),
    watchAddPost(),
  ]);
}
