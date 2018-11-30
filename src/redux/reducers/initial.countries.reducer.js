const initialCountriesReducer = (state = [], action) => {
  return action.type === 'INIT_COUNTRIES' ? [...action.payload] : state;
}

export default initialCountriesReducer;