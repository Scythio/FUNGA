import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';

interface PokemonState {
  berries: Array<{name: string; url: string}>;
  berriesStatus: FetchingStatus;
}

const pokemonInitialState: PokemonState = {
  berries: [],
  berriesStatus: FetchingStatus.UNSET,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonInitialState,
  reducers: {
    fetchBerries: (state: PokemonState) => {
      state.berriesStatus = FetchingStatus.PENDING;
    },
    setBerries: (
      state: PokemonState,
      {payload}: PayloadAction<Array<{name: string; url: string}>>,
    ) => {
      state.berries = payload;
      state.berriesStatus = FetchingStatus.COMPLETE;
    },
  },
});

export const {fetchBerries, setBerries} = pokemonSlice.actions;

const thisSlice = (state: RootState) => state.pokemon;

export const selectBerries = (state: RootState) => thisSlice(state).berries;
export const selectBerriesStatus = (state: RootState) =>
  thisSlice(state).berriesStatus;

export default pokemonSlice.reducer;
