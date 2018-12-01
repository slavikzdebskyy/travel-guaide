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
      <div className = 'city-list-container'>
        <h2>Cities</h2>
         <ul>
      {this.props.citiesList.map((city, index) => {
        return (         
          <li 
            key = {index}
            className={index === this.state.selectedIndex ? 'city selected' : 'city'} 
            onClick = {() => this.selectCity(index)}            
            >
            {city}
          </li>          
        )
      })
        }
        </ul>
      </div>
    );
  }
}

export default withRouter(CitiesList);
