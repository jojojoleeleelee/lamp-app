import { combineReducers } from 'redux';
import verses from './verses.js'
import prayers from './prayers.js'

const rootReducer = combineReducers({
  verses: verses,
  prayers: prayers
});

export default rootReducer
