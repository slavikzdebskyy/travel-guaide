import React from 'react';

import './styles.country.scss';

const  CountryInfo = (info) => {   
  return (
     
    <div className = 'country-info-container'>    
      { info.countryInfo.about.map((item, index) => {
        return (
          <div className = 'country-info-item' key = {index}>
            { index < 1 ? <h2>{info.countryInfo.title}</h2> : null }
            { item.subtitle ? <h3>{item.subtitle}</h3> : null }
            { item.picture ? <img src = {item.picture} alt = '#'/> : null }
            { item.text ? <p>{item.text}</p> : null }
          </div>                        
        )
      }) }      
    </div>
    
  );
};

export default  CountryInfo;
