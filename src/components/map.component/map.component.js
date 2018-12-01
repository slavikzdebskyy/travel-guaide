import React, { Component } from 'react';

import AmCharts from '@amcharts/amcharts3-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import setCurrentLocationsAction from '../../redux/actions/set.current.location.action';
import './map.component.scss';

class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.props.resetCurrentLocation();
  }

  goToCountry (countryName) {
    this.props.history.push(countryName);
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

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({  
  
  resetCurrentLocation: () => {
    dispatch(setCurrentLocationsAction())
  }  
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapComponent));