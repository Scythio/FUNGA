import {put, takeEvery, all, call} from 'redux-saga/effects';
import API from '../../api';
import {GetMushroomSpeciesResponse} from '../../api/contracts/mushroom/get-mushroom-species';
import MushroomSpeciesDTO from '../../api/models/mushroom-species-dto.model';
import {MushroomSpecies} from '../../shared/models/mushroom-species.model';
import {
  fetchMushroomSpecies,
  setMushroomSpecies,
} from '../../store/slices/mushroom/mushroom.slice';

export function* fetchMushroomSpeciesSaga(action: any): any {
  try {
    const messageResponse: GetMushroomSpeciesResponse = yield call(
      API.mushroom.getMushroomList,
      {},
    );
    const parseData = JSON.parse(messageResponse.data);
    const mushroomSpecies: Array<MushroomSpecies> = parseData.map(
      (value: MushroomSpeciesDTO) => ({
        id: value.pk,
        name: value.fields.name,
        latinName: value.fields.latin_name,
        edibility: value.fields.edibility,
        edible: value.fields.edible,
        description: value.fields.description,
      }),
    );
    yield put({type: setMushroomSpecies.type, payload: mushroomSpecies});
  } catch (e) {}
}

export function* watchMushroomSpecies() {
  yield takeEvery(fetchMushroomSpecies.type, fetchMushroomSpeciesSaga);
}
