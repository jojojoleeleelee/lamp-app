export default function verses(
  state = {
  verses: [],
  verse: '',
  myVerses:[],
  loading: false,
}, action) {

  switch(action.type){
    case "START_LOADING_VERSE":
      return Object.assign({}, state, {loading: true})
    case "LOAD_VERSE":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_VERSES":
    // debugger;
      return Object.assign({}, state, { verses: action.payload, loading: false })
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
    default:
      return state
  }
}
