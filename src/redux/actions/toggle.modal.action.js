const toggleModalAction = isOpenedModal => dispatch => {
  return dispatch({type: 'TOGGLE_MODAL', payload: isOpenedModal})
}

export default toggleModalAction;
