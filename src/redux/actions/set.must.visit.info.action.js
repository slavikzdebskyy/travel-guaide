const setMustVisitInfoAction = info => dispatch => {
  return dispatch({type: 'SET_MUST_VISIT_INFO', payload: info})
}

export default setMustVisitInfoAction;
