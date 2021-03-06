import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';
import Title from './title';
import LoginComponent from '../login.component/login';

class HeaderComponent extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      loginEnable : false,
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
              Choose the country which you are going to visit
            </h1> :
          <Title location = {this.props.location}/>
        }       
        {this.props.isVisibleLogin ?
          <LoginComponent />
        : null}
      </header>
    );
  }
};

const mapStateToProps = state => {
  return {
    location : state.currentLocation,
    backgroundImg: state.headerBackground,
    isVisibleLogin : state.isVisibleLogin
  };
};


export default withRouter(connect(mapStateToProps)(HeaderComponent));