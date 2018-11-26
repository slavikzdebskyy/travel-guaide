import React from 'react';
import { withRouter } from 'react-router';

import './styles.city.scss';

const MustVisitList = (props) => {
  return (    
    <ul className = 'must-visit-container'>
      <h3>Top experiences in {props.cityName}</h3>
      {props.mustVisitList.map((item, index) => (
        <li key = {index} className ='must-visit-item'>
          <img src = {item.image} alt = {index}/>
          <h5>{item.title}</h5>
        </li>
      ))}
    </ul>
  )
}

export default withRouter(MustVisitList);