import endpointsDB from '../../endpoints.db';

export const getCountryAction = countryName => {  
  return dispatch => {
    fetch(`${endpointsDB.getCountryByName}${countryName}`)
      .then(data => data.json())
      .then(data => dispatch({type: 'GET_COUNTRY', payload: data}))
      .catch(err => console.error(err));  
  }  
}

export const getCitiesAction = countryName => {
  return dispatch => {
    fetch(`${endpointsDB.getAllCitiesByCountryName}${countryName}`)
      .then(data => data.json())
      .then(data => dispatch({type: 'GET_CITIES_BY_COUNTRY_NAME', payload: data}))
      .catch(err => console.error(err));  
  }
}

export const getCurrentCityAction = cityName => {
  return dispatch => {
    fetch(`${endpointsDB.getCityByName}${cityName}`)
      .then(data => data.json())
      .then(data => dispatch({type: 'GET_CITY_BY_NAME', payload: data}))
      .catch(err => console.error(err));  
  }
}