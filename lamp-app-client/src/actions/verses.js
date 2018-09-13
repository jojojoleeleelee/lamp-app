
export function myVersesSelector(selector){
  return (dispatch) => {
    dispatch({ type: 'MYVERSES_SELECTOR', payload: selector });
  };
}

export function resetMyVerses() {
  return (dispatch) => {
    dispatch({ type: 'RESET_MYVERSES'});
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
