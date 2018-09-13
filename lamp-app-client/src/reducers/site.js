export default function verses(state = {
  navbar: true,
  myVerses: false
}, action) {

  switch (action.type) {
    case "NAVBAR":
      return Object.assign({}, state, { navbar: action.payload })
    case "VIEW_MYVERSES":
      return Object.assign({}, state, { myVerses: action.payload })
    default:
      return state
  }
}
