import React from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar';


const getCountryName = pathName => {
  return pathName.split('/').filter(el => el !== '');
  }

const HeaderComponent = (props) => {

    return (   
      <header>
        <NavBar 
         info = {getCountryName(props.pathname)}
        />
        <h1>Choose the country which you are going to visit or about which you want to tell</h1>          
      </header>
    );
  };


const mapStateToProps = state => {
  return {pathname: state.routing.locationBeforeTransitions.pathname}
}

export default connect(mapStateToProps)(HeaderComponent);