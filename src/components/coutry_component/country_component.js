import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CountryComponent extends Component {
  
  render () { 
    return (   
      <div>
        {this.props.params.country}
        
        <div></div>
        <Link to="/">back</Link>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {countries: state.countries}
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryComponent);
