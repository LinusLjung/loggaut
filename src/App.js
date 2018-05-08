import React, { Component } from 'react';
import './App.css';
import Loader from './components/Loader';

class App extends Component {
  state = {
    isLoggedIn: true,
    isLoading: false
  };

  handleButtonClick = (e) => {
    e.preventDefault();

    this.setState({
      isLoading: true
    });

    window.setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isLoading: false
      });
    }, 1500);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event: 'logout'});
  };

  render() {
    return (
      <div className='app'>
        <div className='content'>
          { this.state.isLoading ? (
            <Loader />
          ) : this.state.isLoggedIn ? (
            <div>
              <div className='text'>{ 'Du är inloggad!' }</div>
              <div
                className='button'
                onClick={ this.handleButtonClick }
              >{ 'Logga ut' }</div>
            </div>
          ) : (
            <div>
              <div className='text'>{ 'Du har loggat ut.' }</div>
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default App;
