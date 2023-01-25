import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {FetchingStatus} from '../../../shared/constants/fetching-status.enum';
import {LikeDislikeState} from '../../../shared/constants/like-dislike-state.enum';
import {AddPost} from '../../../shared/models/addPost.model';
import {MushroomRecord} from '../../../shared/models/mushroom-record.model';
import {MushroomSpecies} from '../../../shared/models/mushroom-species.model';

interface MushroomState {
  mushroomsCollection: Array<MushroomRecord>;
  mushroomSpecies: Array<MushroomSpecies>;
  mushroomSpeciesStatus: FetchingStatus;
  mushroomCurrent: MushroomRecord | null;
}

const mushroomInitialState: MushroomState = {
  mushroomsCollection: [],
  mushroomSpecies: [],
  mushroomSpeciesStatus: FetchingStatus.UNSET,
  mushroomCurrent: null,
};

export const mushroomSlice = createSlice({
  name: 'mushroom',
  initialState: mushroomInitialState,
  reducers: {
    setMushroomCurrent: (
      state: MushroomState,
      {payload}: PayloadAction<MushroomRecord>,
    ) => {
      state.mushroomCurrent = payload;
    },
    addPost: (state: MushroomState, {payload}: PayloadAction<AddPost>) => {},
    fetchMushroomSpecies: (state: MushroomState) => {
      state.mushroomSpeciesStatus = FetchingStatus.PENDING;
    },
    setMushroomSpecies: (
      state: MushroomState,
      {payload}: PayloadAction<Array<MushroomSpecies>>,
    ) => {
      state.mushroomSpecies = payload;
      state.mushroomSpeciesStatus = FetchingStatus.COMPLETE;
    },
  },
});

export const {
  setMushroomCurrent,
  addPost,
  fetchMushroomSpecies,
  setMushroomSpecies,
} = mushroomSlice.actions;

const thisSlice = (state: RootState) => state.mushroom;

export const selectMushroomCurrent = (state: RootState) =>
  thisSlice(state).mushroomCurrent;
export const selectMushroomSpecies = (state: RootState) =>
  thisSlice(state).mushroomSpecies;
export const selectMushroomSpeciesStatus = (state: RootState) =>
  thisSlice(state).mushroomSpeciesStatus;
export const selectMushroomCollection = (state: RootState) =>
  thisSlice(state).mushroomsCollection;

export default mushroomSlice.reducer;
