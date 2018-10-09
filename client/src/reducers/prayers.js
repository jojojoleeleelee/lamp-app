

export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_PRAYER":
      return Object.assign({}, state, {loading: true})
    case "LOAD_PRAYER":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_PRAYERS":
      return action.prayers
    case "GET_PRAYERS":
      return action.prayers;
    case "REMOVE_PRAYER":
      return action.prayer;
    default:
      return state
  }
}
