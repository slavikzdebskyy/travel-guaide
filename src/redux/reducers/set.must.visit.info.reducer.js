const setMustVisitInfoReducer = (state = {}, action) => {
  return action.type === 'SET_MUST_VISIT_INFO' ? action.payload : state;
}

export default setMustVisitInfoReducer;