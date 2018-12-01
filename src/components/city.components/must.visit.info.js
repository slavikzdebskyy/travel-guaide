import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.city.scss';

 
class MustVisitInfo extends Component {  
 
  render () {
    return (  
      <div 
        className = 'must-visit-info-container'
      >
        <img src = {this.props.info.image} alt = '#' />
        <h2 className = 'title-underline-middle'>
          {this.props.info.title}
        </h2>
        <p className = 'description-txt modal-txt'>
          {this.props.info.description}
        </p>
      </div>      
    );
  }
}

const mapStateToProps = state => {
  return {
    info : state.mustVisitInfo
  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MustVisitInfo));

