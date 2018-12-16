import React, { Component } from 'react';
import { withRouter, Switch , Route} from 'react-router-dom';
import { connect } from 'react-redux';

import TopButton from '../top.button';
import CitiesList from '../cities.list';
import Description from '../description';
import ErrorComponent from '../error';

import { getCountryAction, getCitiesAction } from '../../redux/actions/get.data.actions';
import { setHeaderBackgroundByCountryAction } from '../../redux/actions/set.header.background.actions';
import setCurrentLocationsAction from '../../redux/actions/set.current.location.action';

import cityComponent from '../city.components/city.component';
import './styles.country.scss';

class CountryComponent extends Component {

  constructor (props) { 
    super (props)
    this.props.getCountry(this.props.match.params.country);
    this.props.getCities(this.props.match.params.country);
    this.props.setCurrentCountry(this.props.match.params.country);
    this.props.setHeaderBackground(this.props.match.params.country)
  }

  render () {
    return (  
     <Switch>
      <Route exact path = '/:country'> 
        { this.props.counrtryInfo.title ?
          <div className = 'country-component-container'>
            <Description
              title = {this.props.counrtryInfo.title}
              descriptionsArr = {this.props.counrtryInfo.about}
            />
            <CitiesList citiesList = {this.props.counrtryInfo.cities} />
            <TopButton />  
          </div>: <ErrorComponent /> }
        </Route> 
        <Route path = '/:country/:city' component = {cityComponent} />
      </Switch> 
    );
  }
};

const mapStateToProps = state => {
  return {counrtryInfo: state.country};
};
const mapDispatchToProps = dispatch => ({ 

  setCurrentCountry: currCountry => {
    dispatch(setCurrentLocationsAction({currentCountry: currCountry}))
  },
  setHeaderBackground : countryName => {
    dispatch(setHeaderBackgroundByCountryAction(countryName))
  },
  getCountry: countryName => {
    dispatch(getCountryAction(countryName))
  },
  getCities: countryName => {
    dispatch(getCitiesAction(countryName))
  } 
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CountryComponent)) ;
