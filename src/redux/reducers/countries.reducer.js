const countriesReducer = (state=[], action) => {
  switch (action.type) {

    case 'INIT_COUNTRIES': 
      return [...action.payload]; 
    
    case 'SELECT_COUNTRY': 
      return state.filter(elem => {
        return elem.country === action.payload
      });

    default:
      return state;
  } 
  
}

export default countriesReducer;