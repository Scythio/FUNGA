import {combineReducers} from 'redux';
import userReducer from './slices/user/user.slice';
import mushroomReducer from './slices/mushroom/mushroom.slice';
import pokemonReducer from './slices/pokemon/pokemon.slice';

const rootReducer = combineReducers({
  user: userReducer,
  mushroom: mushroomReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
