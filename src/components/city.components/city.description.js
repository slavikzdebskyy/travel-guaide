import React from 'react';
import { withRouter } from 'react-router';

import './styles.city.scss';

const CityDescription = (props) => {
  return (    
    <ul className = 'city-description-container'>
      <h2>{props.title}</h2>
      {props.description.map((item, index) => (
        <div key = {index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>        
      ))}
    </ul>
  )
}

export default withRouter(CityDescription);