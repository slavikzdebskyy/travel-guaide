import countriesData from '../../data/dataCountries';
import citiesData from '../../data/dataCities';

const initialStoreAction = () => {
  return (dispatch) => {
      dispatch({type: 'INIT_COUNTRIES', payload: countriesData})
      dispatch({type: 'INIT_CITIES', payload: citiesData})
  }
}

export default initialStoreAction;


