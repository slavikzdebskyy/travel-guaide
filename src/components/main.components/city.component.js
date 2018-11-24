import React, { Component } from 'react';
import { withRouter } from 'react-router';


class CityComponent extends Component {
  
  

  

  render() {
    return (
      <div>
       <h1>This is City Component</h1>
      </div>
    );
  }
}

export default  withRouter(CityComponent)
