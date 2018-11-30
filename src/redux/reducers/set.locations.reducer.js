const initState = {
  currentCountry: '',
  currentCity: ''
}

const setLocationsReducer = (state = initState, action) => {
  switch (action.type) {

    case 'SET_LOCATIONS': 
      return {...action.payload};          

    default:
      return state;
  }   
}

export default setLocationsReducer;