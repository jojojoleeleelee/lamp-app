export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_VERSE":
      return Object.assign({}, state, {loading: true})
    case "LOAD_VERSE":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_VERSES":
      return action.verses
    case "VERSE_MEMORIZED":
      return action.verse
    default:
      return state
  }
}
