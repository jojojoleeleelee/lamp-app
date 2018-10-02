export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_PRAYER":
      return Object.assign({}, state, {loading: true})
    case "LOAD_PRAYER":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_PRAYERS":
      return action.verses
    case "PRAYER_MEMORIZED":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    default:
      return state
  }
}
