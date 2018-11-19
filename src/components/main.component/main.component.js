import React, { Component } from 'react';
import { connect } from 'react-redux';

import countryActions from '../../redux/actions/country.actions';
import CountryComponent from './country.component';
import ErrorComponent from '../error.component';

class MainComponent extends Component {
  
  getCountryInfo () {
    return  this.props.payload
      .find(elem => elem.country.toUpperCase() === this.props.params.country.toUpperCase())
  }
   
  render () {  
    return (   
      <div className = 'main-component-container'>
        { this.getCountryInfo() ? <CountryComponent countryInfo = {this.getCountryInfo()} /> : <ErrorComponent /> }
      </div>      
    );
  }
}

const mapStateToProps = state => {
  return {countries: state.countries}
}

const mapDispatchToProps = dispatch => {
  return dispatch(countryActions())
}

export default connect(   
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
