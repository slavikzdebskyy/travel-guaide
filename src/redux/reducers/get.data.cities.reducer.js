const getCitiesReducer = (state = [], action) => {
  return action.type === 'GET_CITIES_BY_COUNTRY_NAME' ? [...action.payload] : state;
}

export default getCitiesReducer;