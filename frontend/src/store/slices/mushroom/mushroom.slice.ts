import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {LikeDislikeState} from '../../../shared/constants/like-dislike-state.enum';
import { AddPost } from '../../../shared/models/addPost.model';
import {MushroomRecord} from '../../../shared/models/mushroom-record.model';
import {MushroomSpecies} from '../../../shared/models/mushroom-species.model';

interface MushroomState {
  mushroomsCollection: Array<MushroomRecord>;
  mushroomSpecies: Array<MushroomSpecies>;
  mushroomCurrent: MushroomRecord | null;
}

const mushroomInitialState: MushroomState = {
  mushroomsCollection: [
    {
      id: 1,
      mushroomSpeciesFk: 3,
      coordinates: {
        latitude: 52.23,
        longitude: 20.86,
      },
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquvhk_sa-ePySCHfH6N7HjujYx53DC60bug&usqp=CAU',
      description: 'da dada addad fsfdf essfs fs fsf sf s fsd  fsf sf sfs fsfsd',
      likeDislikeState: LikeDislikeState.UNDEFINED,
      likeCount: 100,
      dislikeCount: 34,
      weights: 5,
    },
    {
      id: 2,
      mushroomSpeciesFk: 4,
      coordinates: {
        latitude: 52.4,
        longitude: 20.9,
      },
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquvhk_sa-ePySCHfH6N7HjujYx53DC60bug&usqp=CAU',
      description: 'elo',
      likeDislikeState: LikeDislikeState.LIKE,
      likeCount: 94,
      dislikeCount: 92,
      weights: 10,
    },
  ],
  mushroomSpecies: [
    {
      id: 1,
      name: 'borowik',
    },
    {
      id: 2,
      name: 'podgrzybek',
    },
    {
      id: 3,
      name: 'prawdziwek',
    },
    {
      id: 4,
      name: 'kurka',
    },
    {
      id: 5,
      name: 'kania',
    },
  ],
  mushroomCurrent: null
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
    addPost: (
      state: MushroomState,
      {payload}: PayloadAction<AddPost>,
    ) => {}
  },
});

export const {setMushroomCurrent, addPost} = mushroomSlice.actions;

const thisSlice = (state: RootState) => state.mushroom;


export const selectMushroomCurrent = (state: RootState) =>
  thisSlice(state).mushroomCurrent;
export const selectMushroomSpecies = (state: RootState) =>
  thisSlice(state).mushroomSpecies;
export const selectMushroomCollection = (state: RootState) =>
  thisSlice(state).mushroomsCollection;

export default mushroomSlice.reducer;
