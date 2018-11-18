import coutriesData from '../../data/dataCountries';

const countryActions = () => dispatch => {
  return dispatch({type: 'INIT_COUNTRIES', payload: coutriesData})
}
export default countryActions;