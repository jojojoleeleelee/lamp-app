export default function verses(state = {
  navbook: true,
  myBook: false
}, action) {

  switch (action.type) {
    case "NAVBOOK":
      return Object.assign({}, state, { navbook: action.payload })
    case "VIEW_MYBOOK":
      return Object.assign({}, state, { myBook: action.payload })
    default:
      return state
  }
}
