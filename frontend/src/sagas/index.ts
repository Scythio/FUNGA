import {put, takeEvery, all} from 'redux-saga/effects';

const delay = (ms: number) =>
  new Promise(res => setTimeout(() => res('foo'), ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
