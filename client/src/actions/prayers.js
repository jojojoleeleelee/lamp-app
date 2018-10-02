const getPrayer = prayers => {
  return {
    type: "LOAD_ALL_VERSES",
    prayers
  }
}

export const loadPrayers = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/prayers`)
    .then(res => res.json())
    .then(prayers => dispatch(getPrayer(prayers)))
  }
}


export function loadPrayer(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/prayers/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(prayers => dispatch(getPrayer(prayers)));
  };
}

export function loadRandomPrayer() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/prayers/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(prayers => dispatch(getPrayer(prayers)));
  };
}

export const updatePrayerForm = prayerForm => {
  return {
    type: 'UPDATED_PRAYER',
    prayerForm
  }
}
export const resetPrayerForm = () => {
  return {
    type: 'RESET_PRAYER_FORM'
  }
}
export const getPrayers = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/prayers`)
    .then(res => res.json())
    .then(prayers => {
      dispatch(setPrayers(prayers))
    })
    .catch(error => console.log(error));
  }
}

export const fetchPrayer = (prayerId) => {
	return dispatch => {
		return fetch(`http://localhost:3001/prayers/${prayerId}`)
			.then(response => response.json())
			.then(prayer => {
				dispatch(setPrayers([prayer]));
			})
			.catch(error => console.log(error));
	}
}

export const createPrayer = (prayer, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3001/prayers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prayer: prayer})
    })
    .then(response => response.json())
    .then(prayer => {
      dispatch(addPrayer(prayer))
      dispatch(resetPrayerForm())
      routerHistory.replace(`http://localhost:3001/prayers/${prayer.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace(`/prayers/new`)
     })
  }
}

export const deletePrayer = (prayerId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3001/prayers/${prayerId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removePrayer(prayerId));
      routerHistory.replace('/prayers');
    })
    .catch(error => console.log(error))
  }
}

export const setPrayers = prayers => {
  return {
    type: 'GET_PRAYERS',
    prayers
  }
}

export const addPrayer = prayer => {
  return {
    type:'CREATE_PRAYER',
    prayer
  }
}

export const removePrayer = prayer => {
  return {
    type: 'REMOVE_PRAYER',
    prayer
  }
}