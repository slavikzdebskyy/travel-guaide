import countriesData from '../../data/dataCountries';
import citiesData from '../../data/dataCities';

export const initinalCountriesAction = () => dispatch => {
  return dispatch({type: 'INIT_COUNTRIES', payload: countriesData})
}

export const initinalCitiesAction = () => dispatch => {
  return dispatch({type: 'INIT_CITIES', payload: citiesData})
}
