const getCityReducer = (state = {}, action) => {
  return action.type === 'GET_CITY_BY_NAME' ? action.payload : state;
}

export default getCityReducer;