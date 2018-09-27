import { combineReducers } from 'redux';
import site from './site.js'
import verses from './verses.js'

const rootReducer = combineReducers({
  verses: verses,
  site: site
});

export default rootReducer
