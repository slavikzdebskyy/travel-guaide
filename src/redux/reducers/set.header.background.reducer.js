const setHeaderBackgroundReducer = (state = '', action) => {
  return action.type === 'SET_HEADER_BACKGROUND' ? action.payload : state;
} 

export default setHeaderBackgroundReducer;