import React from 'react';
import { withRouter } from 'react-router';

const Description = (props) => {
  return (    
    <ul className = 'description-container'>
      <h2 className = 'title-underline-middle'>{props.title}</h2>
      {props.description.map((item, index) => (
        <div key = {index}>
          <h3>{item.title}</h3>
          <p className = 'description-txt'>{item.description}</p>
        </div>        
      ))}
    </ul>
  )
}

export default withRouter(Description);