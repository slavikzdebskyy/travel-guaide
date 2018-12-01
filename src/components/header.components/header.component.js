import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';
import Title from './title';

class HeaderComponent extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      defaultBackground: {backgroundImage : 'url(http://fullhdwallpapers.ru/image/city/22873/arhitektura-nochnogo-goroda.jpg)'}
    }
  }

  render() {
    return (   
      <header 
        style = {
          this.props.location.currentCountry ? 
          {backgroundImage : `url(${this.props.backgroundImg})`}  :
          this.state.defaultBackground
          }
      >
        <NavBar />
        {
          !this.props.location.currentCountry ?
            <h1>
              Choose the country which you are going to visit or about which you want to tell
            </h1> :
          <Title location = {this.props.location}/>
        }       
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    location : state.currentLocation,
    backgroundImg: state.headerBackground
  };
}

export default withRouter(connect(mapStateToProps)(HeaderComponent));