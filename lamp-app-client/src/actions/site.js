export function navbook(boolean){
  return (dispatch) => {
    dispatch({ type: "NAVBOOK", payload: boolean })
  }
}

export function viewMyBook(boolean) {
  return (dispatch) => {
    dispatch({ type: "VIEW_MYBOOK", payload: boolean })
  }
}
