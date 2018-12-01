import React, { Component } from 'react';
import { withRouter, Switch , Route} from 'react-router-dom';
import { connect } from 'react-redux';

import TopButton from '../top.button';
import CitiesList from '../cities.list';
import Description from '../description';
import ErrorComponent from '../error';

import setCurrentLocationsAction from '../../redux/actions/set.current.location.action';
import setHeaderBackgroundReducer from '../../redux/actions/set.header.background.action';
import './styles.country.scss';
import cityComponent from '../city.components/city.component';

class CountryComponent extends Component {

  componentDidMount() {
    this.props.setCurrentCountry(this.props.match.params.country);
    this.props.setHeaderBackground(this.props.counrtryInfo.bg_image);
  }

  render () {
    return (  
     <Switch>
      <Route exact path = '/:country'> 
        { this.props.counrtryInfo ?
          <div className = 'country-component-container'>
            <Description
              title = {this.props.counrtryInfo.title}
              description = {this.props.counrtryInfo.about}
            />
            <CitiesList citiesList = {this.props.counrtryInfo.cities} />
            <TopButton />  
          </div>: <ErrorComponent /> }
        </Route> 
        <Route path = '/:country/:city' component = {cityComponent} />
      </Switch> 
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {counrtryInfo: state.countries.find(item => item.country === ownProps.match.params.country)};
}
const mapDispatchToProps = dispatch => ({ 
  setCurrentCountry: (currCountry) => {
    dispatch(setCurrentLocationsAction({currentCountry: currCountry}))
  },
  setHeaderBackground : (bgUrl) => {
    dispatch(setHeaderBackgroundReducer(bgUrl))
  }
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CountryComponent)) ;
