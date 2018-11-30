const setCurrentLocationsAction = locations => dispatch => {
  return dispatch({type: 'SET_LOCATIONS', payload: locations})
}

export default setCurrentLocationsAction;
