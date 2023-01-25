import {put, takeEvery, call} from 'redux-saga/effects';
import API from '../../api';

import {LoginRequest, LoginResponse} from '../../api/contracts/user/log-in';
import {User} from '../../shared/models/user.model';

import {
  loginUser,
  setLoginStatusFailed,
  setUser,
} from '../../store/slices/user/user.slice';

export function* loginSaga(action: any): any {
  try {
    const payloadData: LoginRequest = action.payload;
    const messageResponse: LoginResponse = yield call(API.user.login, {
      username: payloadData.username,
      password: payloadData.password,
    });
    if (messageResponse.data.response == 'FAIL') {
      yield put({type: setLoginStatusFailed.type});
    } else {
      const user: User = {
        id: messageResponse.data.user_id,
        username: payloadData.username,
        email: '',
      };
      yield put({type: setUser.type, payload: user});
    }
  } catch (e) {}
}

export function* watchLogin() {
  yield takeEvery(loginUser.type, loginSaga);
}
