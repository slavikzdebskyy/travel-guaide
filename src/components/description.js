import React from 'react';

const Description = props => {
  return ( 
    <div>      
        <div className = 'description-container'>   
          <h2 className = 'title-underline-middle'>{props.title}</h2>
          {props.descriptionsArr.map((item, index) => (
            <div key = {index}>
              <h3>{item.title}</h3>
              <p className = 'description-txt'>{item.description}</p>
            </div>        
          ))}     
        </div>   
    </div>            
  )
};

export default Description;