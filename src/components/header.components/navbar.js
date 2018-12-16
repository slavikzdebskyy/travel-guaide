import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import toggleLoginModalAction from '../../redux/actions/toggle.login.action';

import './styles.header.scss';

const NavBar = (props) => ( 
  <nav className = 'navbar-container'>
     <ul>
      <li onClick = {() => {props.history.push('/')}}>Home</li>      
      <li onClick = {props.toggleLogin}>Sign In</li>
    </ul>
  </nav>   
);

const mapStateToProps = state => {
  return {    
    isVisibleLogin : state.isVisibleLogin
  };
};

const mapDispatchToProps = dispatch => ({ 
  toggleLogin: () => {
    dispatch(toggleLoginModalAction())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
