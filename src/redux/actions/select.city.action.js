const selectCityAction = (cityIndex) => {
  return {type: 'SELECT_CITY', payload: cityIndex};
}

export default selectCityAction;