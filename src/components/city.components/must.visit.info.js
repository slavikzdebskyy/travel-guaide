import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import toggleModalAction from '../../redux/actions/toggle.modal.action';
import './styles.city.scss';

 
class MustVisitInfo extends Component {  
 
  render () {
    return (  
      <div 
        className = {this.props.className}
        onClick = {() => this.props.closeModal(false)}
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
    className: state.modalClassName,
    info : state.mustVisitInfo
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: isOpenModal => {
    dispatch(toggleModalAction(isOpenModal))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MustVisitInfo));

