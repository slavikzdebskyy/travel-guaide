const initialCitiesReducer = (state = [], action) => {
  switch (action.type) {

    case 'INIT_CITIES': 
      return [...action.payload];    

    default:
      return state;
  }   
}

export default initialCitiesReducer;