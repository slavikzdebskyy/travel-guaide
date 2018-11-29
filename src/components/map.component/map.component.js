import React, { Component } from 'react';

import AmCharts from '@amcharts/amcharts3-react';
import { withRouter } from 'react-router';

import './map.component.scss';

class MapComponent extends Component {

  goToCountry (countryName) {
    this.props.router.push(countryName);
  }

  render () {     
    const config = {
      'type': 'map',
      'theme': 'light',  
      'dataProvider': {
        'map': 'worldLow',
        'getAreasFromMap': true
      },
      'areasSettings': {
        'autoZoom': true,
        'rollOverColor': '#ef7c45',
        'color': '#e6f2ff',
        'selectedColor': '#ef7c45',
        'selectable': true
      } ,
      'listeners': [{
        'event': 'clickMapObject',
        'method': event => {          
          this.goToCountry(event.mapObject.title);          
        }
      }]
    };

    return (  
     
      
      <div className = 'chartwrapper'>      
        <AmCharts.React className = 'map' options={config} />
      </div>
    );
  }
}

export default withRouter(MapComponent);