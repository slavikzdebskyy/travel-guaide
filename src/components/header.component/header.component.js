import React, { Component } from 'react';
import NavBarComponent from './navbar.component';

import { connect } from 'react-redux';

class HeaderComponent extends Component {

  getCountryName () {
    return this.props.pathname.slice(9, this.props.pathname.length);
  } 

  render () {     
    return (   
      <header>
        {this.getCountryName() 
          ? (
            <NavBarComponent 
              country = {this.getCountryName()}
            />
          )
          : (
            <h1>Choose the country which you are going to visit or about which you want to tell</h1>
          )
        }    
      </header>
    );
  }
};

const mapStateToProps = state => {
  return {pathname: state.routing.locationBeforeTransitions.pathname}
}

export default connect(mapStateToProps)(HeaderComponent);