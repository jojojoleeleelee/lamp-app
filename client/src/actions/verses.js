const getVerses = verses => {
  return {
    type: "LOAD_ALL_VERSES",
    verses
  }
}

export const loadVerses = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/verses`)
    .then(res => res.json())
    .then(verses => dispatch(getVerses(verses)))
  }
}

export function loadRandomVerse() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/verses/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(verse => dispatch({ type: 'LOAD_VERSE', payload: verse }));
  };
}

export function loadVerse(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/verses/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(json => dispatch({ type: 'LOAD_VERSE', payload: json }));
  };
}

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
