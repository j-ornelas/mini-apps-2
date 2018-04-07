import { combineReducers } from "redux";
import boardReducer from './board-reducer';
import otherReducer from './other-reducer';

const allReducers = {
  board: boardReducer,
  other: otherReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
