import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TopButton from '../top.button';
import CitiesList from '../city.components/cities.list';
import CountryInfo from './country.info';
import ErrorComponent from '../error.component';
import './styles.country.scss';

class CountryComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.counrtryInfo && this.props.counrtryInfo.bg_image !== '') {
      this.setState({
        backgroundImage: { backgroundImage: "url(" +  this.props.counrtryInfo.bg_image  + ")" }
      })
    } else {
      this.setState({
        backgroundImage: { backgroundImage: 'none' }
      })
    }
  }
  
  render () {       
    return (   
      <div> 
      { this.props.counrtryInfo ?
        <div  
          className = 'country-component-container'  
          style = { this.state.backgroundImage }>
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

export default  withRouter(connect(mapStateToProps)(CountryComponent)) ;
