import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TopButton from './top.button';
import CitiesList from './cities.list';
import CountryInfo from './country.info';
import ErrorComponent from '../error.component';
import './styles.main.scss';

class CountryComponent extends Component {
  
  render () {   
    return (   
      <div> 
      { this.props.counrtryInfo ?
        <div  className = 'country-component-container'>
          <CountryInfo countryInfo = {this.props.counrtryInfo} /> 
          <CitiesList citiesList = {this.props.counrtryInfo.cities} />
          <TopButton />  
        </div>: <ErrorComponent /> }
      </div>      
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {counrtryInfo: state.countries.find(item => item.country === ownProps.params.country)};
}

export default  withRouter(connect(   
  mapStateToProps
)(CountryComponent)) ;
