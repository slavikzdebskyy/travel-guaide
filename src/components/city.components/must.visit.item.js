import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import './styles.city.scss'

const galleryItems = itemsArray => {
  return (
    itemsArray.map((item, index) => (
      <div
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

const MustVisitItem = ({mustVisitList}) => (
  <AliceCarousel
        items = {galleryItems(mustVisitList)}
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
)

export default MustVisitItem;