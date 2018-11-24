import React from 'react';
import './styles.header.scss';


const NavBar = ({info}) => ( 
  <nav className = 'navbar-container'>
     <ul>
      <li className = 'counry-name'>
        <h2> 
          {info[info.length - 1]}
          {info.length > 1 ? `  (${info[info.length - 2]})` : null }
        </h2>
      </li>
      <li>Culture & Indetity</li>
      <li>Food & Hospitality</li>
      <li>Adveture & Expirience</li>
      <li>Destinations</li>
      <li>Leave your experience</li>
    </ul>
  </nav>   
);

export default NavBar;
