import { combineReducers } from 'redux';
import site from './site.js'
import verses from './verses.js'
import prayers from './prayers.js'

const rootReducer = combineReducers({
  verses: verses,
  site: site,
  prayers: prayers
});

export default rootReducer
