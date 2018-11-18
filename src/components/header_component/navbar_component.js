import React from 'react';
import './navbar_component.scss';


const NavBarComponent = ({country}) =>  (   
  <div className = 'navbar-container'>
    <ul>
      <li className = 'counry-name'><h2>{country}</h2></li>
      <li>Culture & Indetity</li>
      <li>Food & Hospitality</li>
      <li>Adveture & Expirience</li>
      <li>Destinations</li>
      <li>Leave your experience</li>
    </ul>
  </div>
);

export default NavBarComponent;
