import React, { Component } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

class TopButton  extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisibleTopBtn: false
    }    
  }

  scrollToTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollListener = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.setState({
        isVisibleTopBtn: true
      });
    } else {
      this.setState({
        isVisibleTopBtn: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render () {
    return (
      <div>      
        {
          this.state.isVisibleTopBtn 
          ? <button 
              onClick = {this.scrollToTop} 
              className = 'topBtn'>
              <IoIosArrowUp size = {36}/>              
            </button> 
          : null 
        }
      </div>
    )
  } 
}

export default TopButton;