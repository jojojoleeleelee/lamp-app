
const getPrayer = prayers => {
  return {
    type: "LOAD_ALL_PRAYERS",
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
    dispatch({ type: 'START_LOADING_PRAYER' });
    return fetch(`http://localhost:3001/prayers/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(prayer => dispatch(getPrayer(prayer)));
  };
}


export function loadRandomPrayer() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_PRAYER' });
    return fetch(`http://localhost:3001/prayers/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(prayer => dispatch(getPrayer(prayer)));
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

export const createPrayer = (prayer) => {
  //console.log("creating prayer", prayer)
  console.log('C')
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
      console.log('D')
      dispatch(addPrayer(prayer))
      dispatch(resetPrayerForm())
    })
    .catch(error => {
      dispatch({type: 'error'})
     })
  }
}

export const deletePrayer = (prayerId) => {
  console.log("deleting prayer", prayerId)
  return dispatch => {
    return fetch(`http://localhost:3001/prayers/${prayerId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removePrayer(prayerId));
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
