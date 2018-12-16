const toggleVisitInfoModalReducer= (state = false, action) => {
  return action.type === 'TOGGLE_LOGIN_MODAL' ? !state : state;
}

export default toggleVisitInfoModalReducer;