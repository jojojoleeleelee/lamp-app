import { combineReducers } from 'redux';
import verses from './verses.js'
import prayers from './prayers.js'
import prayerForm from './prayerForm.js'
const rootReducer = combineReducers({
  verses: verses,
  prayers: prayers,
  prayerForm: prayerForm
});

export default rootReducer
