const initialCitiesReducer = (state = [], action) => {
  return action.type === 'INIT_CITIES' ? [...action.payload] : state;
}

export default initialCitiesReducer;