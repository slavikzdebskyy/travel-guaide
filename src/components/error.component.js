import React from 'react';
import { withRouter } from 'react-router';

 const ErrorComponent = (props) =>  { 
    return (   
      <div className = 'error-component'>  
      <button 
        onClick = {() => props.router.push('/')}
        className = 'error-btn'
        >
          Return
      </button>   
      </div>
    );  
};
export default withRouter(ErrorComponent);