import React from 'react';

const Title = ({location}) => {console.log('YITLE=>', location)
 return (
  <div>
        {
          location.currentCity ? 
          <h1> 
            <span className = 'country-name'>
              {location.currentCountry}
            </span> 
            <br/>
            {location.currentCity}
          </h1> : 
          <h1>{location.currentCountry}</h1> 
        }
  </div>  
)}

export default Title;