import countriesData from '../../data/dataCountries';

localStorage.setItem('DataBase', JSON.stringify(countriesData));

const initialStoreAction = () => dispatch => {
  return dispatch({type: 'INIT_COUNTRIES', payload: countriesData})
}

export default initialStoreAction;