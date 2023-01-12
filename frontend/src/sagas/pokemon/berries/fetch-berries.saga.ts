import {put, takeEvery, call} from 'redux-saga/effects';
import {
  fetchBerries,
  setBerries,
} from '../../../store/slices/pokemon/pokemon.slice';
import API from '../../../api/pokemon';
import {GetBerriesResponse} from '../../../api/pokemon/contracts/berries/get-berries';

export function* fetchBerriesSaga(): any {
  const berries: GetBerriesResponse = yield call(API.berries.getBerries, {});
  yield put({type: setBerries.type, payload: berries.data.results});
}

export function* watchfetchBerries() {
  yield takeEvery(fetchBerries.type, fetchBerriesSaga);
}
