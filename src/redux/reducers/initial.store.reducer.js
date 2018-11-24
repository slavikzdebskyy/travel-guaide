import countriesData from '../../data/dataCountries';

const initialStoreReducer = (state = countriesData, action) => {
  switch (action.type) {

    case 'INIT_COUNTRIES': 
      return [...action.payload];    

    default:
      return state;
  } 
  
}

export default initialStoreReducer;