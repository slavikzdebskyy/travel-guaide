import React, { Component } from 'react';

import AmCharts from '@amcharts/amcharts3-react';
import { connect } from 'react-redux';

import countryActions from '../../redux/actions/country.actions';
import './map.component.scss';

class MapComponent extends Component {

  render () {  
    
    const config = {
      'type': 'map',
      'theme': 'light',  
      'dataProvider': {
        'map': 'worldLow',
        'getAreasFromMap': true
      },
      'areasSettings': {
        'autoZoom': false,
        'rollOverColor': '#ef7c45',
        'color': '#e6f2ff',
        'selectedColor': '#ef7c45',
        'selectable': true
      } ,
      'listeners': [{
        'event': 'clickMapObject',
        'method': event => {          
          this.props.getCountry(event.mapObject.title);          
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

const mapStateToProps = state => {
  return {countries: state.countries}
}

const mapDispatchToProps = (dispatch, state) => {
  return dispatch(countryActions())
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);