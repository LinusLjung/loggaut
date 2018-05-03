import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: true
  };

  handleButtonClick = (e) => {
    e.preventDefault();

    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <div className='app'>
        <div className='content'>
          { this.state.isLoggedIn ? (
            <div>
              <div className='text'>Du är inloggad!</div>
              <div
                className='button'
                onClick={ this.handleButtonClick }
              >Logga ut</div>
            </div>
          ) : (
            <div>
              <div className='text'>Du har loggat ut.</div>
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default App;
