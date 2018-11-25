import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import CitiesList from './cities.list';


class CityComponent extends Component {
  
  

  

  render() {  
    return (
      <div>
       <h1>This is City Component</h1>
       <CitiesList citiesList = {this.props.cities.map(item => {return item.name})} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {cities: state.cities};
}

export default  withRouter(connect(mapStateToProps)(CityComponent));
