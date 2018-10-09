const getVerses = verses => {
  return {
    type: "LOAD_ALL_VERSES",
    verses
  }
}

export const loadVerses = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/verses`, {
      accept: 'application/json',
    })
    .then(res => res.json())
    .then(verses => dispatch(getVerses(verses)))
  }
}


export function loadVerse(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/verses/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(verses => dispatch(getVerses(verses)));
  };
}

export function loadRandomVerse() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/verses/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(verses => dispatch(getVerses(verses)));
  };
}

export const memorizeVerse = (verse) => {
  const updatedVerse = {...verse, memorized: true}
  console.log(updatedVerse)
  return dispatch => {
    return fetch(`http://localhost:3001/verses/${verse.id}`, {
      method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({verse: updatedVerse})
      })
    .then(response => response.json())
    .then(verse => {
      dispatch(verseMemorized(updatedVerse, verse.id))
    })
  .catch(error => console.log(error))
  }
}

export const verseMemorized = (verse, id) => {
  return {
    type: "VERSE_MEMORIZED",
    verse
  }
}
