import {combineReducers} from 'redux';
import userReducer from './slices/user/user.slice';
import mushroomReducer from './slices/mushroom/mushroom.slice';

const rootReducer = combineReducers({
  user: userReducer,
  mushroom: mushroomReducer,
});

export default rootReducer;
