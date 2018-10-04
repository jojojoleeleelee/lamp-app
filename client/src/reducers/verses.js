export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_VERSE":
      return Object.assign({}, state, {loading: true})
    case "LOAD_VERSE":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_VERSES":
      return action.verses
    case "MYVERSES_SELECTOR":
      let myVerses = [...state.myVerses]
      if (state.myVerses.includes(action.payload)) {
        myVerses = state.myVerses.filter(item => item !== action.payload)
      } else {
        myVerses.push(action.payload)
      }
      return Object.assign({}, state, {myVerses: myVerses})
    case "RESET_MYVERSES":
      return Object.assign({}, state, {verses: [], myVerses: []})
    case "VERSE_MEMORIZED":
      return state.map((verse) => {
        if (verse.id === action.verse.id) {
          return action.verse
        } else {
          return verse
        }
      })
    default:
      return state
  }
}
