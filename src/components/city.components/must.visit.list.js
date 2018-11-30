import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';

import toggleModalAction from '../../redux/actions/toggle.modal.action';
import setMustVisitInfoAction from '../../redux/actions/set.must.visit.info.action';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.city.scss'

const galleryItems = (itemsArray, toggleFunc) => {  
  return (
    itemsArray.map((item, index) => (
      <div
        onClick = {()=>toggleFunc(index)}
        key = {index}
        className = 'must-visit-item'
        style = {{backgroundImage : `url(${item.image})`}}
      >
        <h5>{item.title}</h5>
      </div>
    ))
  )
};

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1000: { items: 3 },
  1300: { items: 4 },
};

class MustVisitList extends Component {

  openMustVisitInfo = (index) =>  {
    this.props.setMustVisitInfo(this.props.mustVisitList[index]);
    this.props.toggleMustVisitInfo(true);    
  }

  render () {
    return (
  <div className = 'must-visit-container'>
  <AliceCarousel
        items = {galleryItems(this.props.mustVisitList, this.openMustVisitInfo)}
        duration = {1200}
        autoPlay = {true}
        startIndex = {1}
        buttonsDisabled = {true}
        dotsDisabled = {true}
        fadeOutAnimation = {true}
        mouseDragEnabled = {true}
        playButtonEnabled = {false}
        autoPlayInterval = {4000}
        autoPlayDirection = "ltr"
        responsive = {responsive}
        disableAutoPlayOnAction = {true}
      />
      </div>
)
    }
  }
  const mapStateToProps = state => {
    return {store: state};
  }

  const mapDispatchToProps = dispatch => ({

    toggleMustVisitInfo: isOpenModal => {
      dispatch(toggleModalAction(isOpenModal));
    },

    setMustVisitInfo: info => {
      dispatch(setMustVisitInfoAction(info));
    }

 })

export default connect(mapStateToProps, mapDispatchToProps)(MustVisitList);