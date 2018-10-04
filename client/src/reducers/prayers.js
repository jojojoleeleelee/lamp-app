const initialState = {
  summary: '',
  duration: 0,
  focus: 0,
}

export default (
  state = initialState, action) => {

  switch(action.type){
    case "START_LOADING_PRAYER":
      return Object.assign({}, state, {loading: true})
    case "LOAD_PRAYER":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_PRAYERS":
      return action.prayers
    case "GET_PRAYERS":
      return action.prayers;
    case "CREATE_PRAYER":
      return state.concat(action.prayer)
    case "REMOVE_PRAYER":
      return state.filter(prayer => prayer.id !== action.prayerId);
    case "UPDATED_PRAYER":
      return action.prayerForm
    default:
      return state
  }
}
