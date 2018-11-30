const initState = {
  currentCountry: '',
  currentCity: ''
}

const setLocationsReducer = (state = initState, action) => {
  return action.type === 'SET_LOCATIONS' ? {...action.payload} : state;  
}

export default setLocationsReducer;