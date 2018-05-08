import React, { Component } from 'react';
import './css.css';

class Loader extends Component {
  render() {
    return <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  }
}

export default Loader;
