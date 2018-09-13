
export function myBookSelector(selector){
  return (dispatch) => {
    dispatch({ type: 'MYBOOK_SELECTOR', payload: selector });
  };
}

export function resetMyBook() {
  return (dispatch) => {
    dispatch({ type: 'RESET_MYBOOK'});
  };
}

export function unloadVerse() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_VERSE', payload: '' });
  };
}

export function unloadVerses() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_ALL_VERSES', payload: [] });
  };
}
