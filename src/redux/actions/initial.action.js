import countriesData from '../../data/dataCountries';

const initialStoreAction = () => dispatch => {
  return dispatch({type: 'INIT_COUNTRIES', payload: countriesData})
}

export default initialStoreAction;