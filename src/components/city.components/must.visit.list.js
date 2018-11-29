import React, { Component } from 'react';
import { withRouter } from 'react-router';

import MustVisitItem from './must.visit.item';
import './styles.city.scss';
import "react-alice-carousel/lib/alice-carousel.css";
 
class MustVisitList extends Component {  
 
  render() {   
    return (  
      <div className = 'must-visit-container'>
        <MustVisitItem mustVisitList = {this.props.mustVisitList}/>
      </div>      
    );
  }
}

export default withRouter(MustVisitList);

