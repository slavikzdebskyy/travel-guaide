import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CitiesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1    
    };
  }  

  setSelectedCity () {
    if (this.props.match.params.city) {
      const index = this.props.citiesList.indexOf(this.props.match.params.city);
      this.setState({ selectedIndex: index });
    }
  }

  selectCity = (index) => {
    this.setState({ selectedIndex: index });
    const pathName = '/' + this.props.match.params.country + '/' + this.props.citiesList[index];    
    this.props.history.push(pathName);
  };

  componentDidMount() {
    this.setSelectedCity();
  }

  render() {
    return (
         <ul className = 'city-list-container'>
           <li><h2 className = 'cities-list'>Cities</h2></li>
      {this.props.citiesList.map((city, index) => {
        return (         
          <li 
            key = {index}
            className = 'city' 
            onClick = {() => this.selectCity(index)}            
            >
            {city}
          </li>          
        )
      })
        }
        </ul>
    );
  }
}

export default withRouter(CitiesList);
