export default function verses(
  state = {
  verses: [],
  verse: '',
  myBook:[],
  loading: false,
  need: ["hope","truth","love", "joy", "peace", "comfort", "faith", "strength"],
}, action) {

  switch(action.type){
    case "START_LOADING_VERSE":
      return Object.assign({}, state, {loading: true})
    case "LOAD_VERSE":
      return Object.assign({}, state, {verse: action.payload, loading: false})
    case "LOAD_ALL_VERSES":
      return Object.assign({}, state, { verses: action.payload, loading: false })
    case "MYBOOK_SELECTOR":
      let myBook = [...state.myBook]
      if (state.myBook.includes(action.payload)) {
        myBook = state.myBook.filter(item => item !== action.payload)
      } else {
        myBook.push(action.payload)
      }
      return Object.assign({}, state, {myBook: myBook})
    case "RESET_MYBOOK":
      return Object.assign({}, state, {verses: [], myBook: []})
    default:
      return state
  }
}
