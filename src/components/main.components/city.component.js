import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import CitiesList from './cities.list';


class CityComponent extends Component {
  
  

  

  render() {    
    return (
      <div>
       <h1>This is City Component</h1>
       <CitiesList citiesList = {this.props.counrtryInfo.cities} />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {counrtryInfo: state.countries.find(item => item.country.toUpperCase() === ownProps.params.country.toUpperCase())};
}

export default  withRouter(connect(mapStateToProps)(CityComponent));
