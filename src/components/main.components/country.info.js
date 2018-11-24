import React from 'react';

import './styles.main.scss';

const  CountryInfo = (info) => {   
  return (
     
    <div className = 'countries'>    
      { info.countryInfo.about.map((item, index) => {
        return (
          <div className = 'country-item' key = {index}>
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
