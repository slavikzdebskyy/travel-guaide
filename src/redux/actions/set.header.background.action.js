const setHeaderBackgroundAction = bgUrl => dispatch => {
  return dispatch({type: 'SET_HEADER_BACKGROUND', payload: bgUrl})
}

export default setHeaderBackgroundAction;