import {combineReducers} from 'redux';
import userReducer from './slices/user/user.slice';
import mushroomReducer from './slices/mushroom/mushroom.slice';
import pokemonReducer from './slices/pokemon/pokemon.slice';
import postReducer from './slices/post/post.slice';

const rootReducer = combineReducers({
  user: userReducer,
  mushroom: mushroomReducer,
  pokemon: pokemonReducer,
  post: postReducer,
});

export default rootReducer;
