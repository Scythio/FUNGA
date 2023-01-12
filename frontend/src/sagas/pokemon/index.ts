import {all} from 'redux-saga/effects';
import {watchfetchBerries} from './berries/fetch-berries.saga';

export default function* rootPokemonSaga() {
  yield all([watchfetchBerries()]);
}
