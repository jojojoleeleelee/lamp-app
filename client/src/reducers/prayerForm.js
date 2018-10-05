const initialState = {
  summary: '',
  duration: 0,
  focus: 0,
}
export default (
  state = initialState, action) => {

  switch(action.type){
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
