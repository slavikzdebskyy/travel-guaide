import React from 'react';
import { withRouter } from 'react-router-dom';

 const ErrorComponent = props =>  { 
    return (   
      <div className = 'error-component'>  
      <button 
        onClick = {() => props.history.push('/')}
        className = 'error-btn'
        >
          Return
      </button>   
      </div>
    );  
};
export default withRouter(ErrorComponent);