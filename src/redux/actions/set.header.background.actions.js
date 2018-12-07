import endpointsDB from '../../endpoints.db';

export const setHeaderBackgroundByCityAction = cityName => {
  return dispatch => {
    fetch(`${endpointsDB.getCityByName}${cityName}`)
      .then(data => data.json())
      .then(data => dispatch({type: 'SET_HEADER_BACKGROUND', payload: data.bg_image}))
      .catch(err => console.error(err));  
  } 
}

export const setHeaderBackgroundByCountryAction = countryName => {
  return dispatch => {
    fetch(`${endpointsDB.getCountryByName}${countryName}`)
      .then(data => data.json())
      .then(data => dispatch({type: 'SET_HEADER_BACKGROUND', payload: data.bg_image}))
      .catch(err => console.error(err));  
  } 
}
