import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './navbar';
import Title from './title';

class HeaderComponent extends Component { 
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    this.setState({
      pathNamesArray: this.props.pathname.split('/').filter(el => el !== '')
    })
  }

  getCountryName () {
    return this.props.pathname.split('/').filter(el => el !== '');
     
  }

  render() {
    return (   
      <header>
        <NavBar 
         info = {this.getCountryName()}
        />
        {
          this.props.pathname === '/' ?
            <h1>
              Choose the country which you are going to visit or about which you want to tell
            </h1> :
          <Title array = {this.getCountryName()}/>
        }       
      </header>
    );
  }
}


const mapStateToProps = state => {
  return {pathname: state.routing.locationBeforeTransitions.pathname}
}

export default connect(mapStateToProps)(HeaderComponent);