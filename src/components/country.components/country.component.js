import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TopButton from '../top.button';
import CitiesList from '../cities.list';
import Description from '../description';
import ErrorComponent from '../error.component';
import './styles.country.scss';

class CountryComponent extends Component {

  render () {
    return (   
      <div> 
      { this.props.counrtryInfo ?
        <div className = 'country-component-container'>
          <Description
            title = {this.props.counrtryInfo.title}
            description = {this.props.counrtryInfo.about}
          />
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

export default  withRouter(connect(mapStateToProps)(CountryComponent)) ;
