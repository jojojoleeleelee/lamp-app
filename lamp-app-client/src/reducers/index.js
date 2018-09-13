import { combineReducers } from 'redux';
import site from './site.js'
import verses from './verses.js'

export default combineReducers({
  verses: verses,
  site: site
});
