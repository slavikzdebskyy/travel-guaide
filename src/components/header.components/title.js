import React from 'react';

const Title = ({array}) => (
  <div>
    {array.length > 1 ?
      <h1> 
        <span className = 'country-name'>
          {array[array.length - 2]}
        </span>
        <br/>
        {array[array.length - 1]}    
      </h1> :
      <h1>
        {array[array.length - 1]}
      </h1>
    }
  </div>  
)

export default Title;