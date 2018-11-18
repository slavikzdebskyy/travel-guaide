import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CountryComponent extends Component {
  
  render () { 
    
    return (   
      <div>
        {this.props.match.params.country}
        <Link to={'/'}>Culture & Indetity</Link>
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
