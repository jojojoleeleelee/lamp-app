export function navbar(boolean){
  return (dispatch) => {
    dispatch({ type: "NAVBAR", payload: boolean })
  }
}

export function viewMyVerses(boolean) {
  return (dispatch) => {
    dispatch({ type: "VIEW_MYVERSES", payload: boolean })
  }
}
