const getCountryReducer = (state = {}, action) => {
  return action.type === 'GET_COUNTRY' ? action.payload : state;
}

export default getCountryReducer;