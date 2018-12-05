import countriesData from '../../data/dataCountries';
import citiesData from '../../data/dataCities';

export const initinalCountriesAction = () => dispatch =>{
  // return dispatch => {
  //   fetch('http://localhost:3000/countries/all')
  //     .then(data => data.json())
  //     .then(data => dispatch({type: 'INIT_COUNTRIES', payload: data}))
  //     .catch(err => console.error(err));
  
  return dispatch({type: 'INIT_COUNTRIES', payload: countriesData})
}

export const initinalCitiesAction = () => dispatch => {
  return dispatch({type: 'INIT_CITIES', payload: citiesData})
}
