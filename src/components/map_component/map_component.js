import React, { Component } from 'react';

import AmCharts from '@amcharts/amcharts3-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import countryActions from '../../redux/actions/coutry_actions';
import './map_component.scss';

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
          this.props.updateData(event.mapObject.title);          
        }
      }]
    };

    return (  
     
      
      <div className = 'chartwrapper'>
       <div>
        <Link to={'/country/ghjk'}>Culture & Indetity</Link>
        </div> 
        <AmCharts.React className = 'map' options={config} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {countries: state.countries}
}

const mapDispatchToProps = dispatch => {
  return dispatch(countryActions())
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);