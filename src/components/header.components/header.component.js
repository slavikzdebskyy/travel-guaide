import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar';
import Title from './title';

class HeaderComponent extends Component { 

  render() { 
    return (   
      <header>
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
  return {location : state.currentLocation};
}

export default connect(mapStateToProps)(HeaderComponent);