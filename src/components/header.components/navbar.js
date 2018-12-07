import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.header.scss';

const NavBar = (props) => ( 
  <nav className = 'navbar-container'>
     <ul>
      <li onClick = {() => {props.history.push('/')}}>Home</li>
      <li>Food & Hospitality</li>
      <li>Adveture & Expirience</li>
      <li>Destinations</li>
      <li>Sign In</li>
    </ul>
  </nav>   
);

export default withRouter(NavBar);
