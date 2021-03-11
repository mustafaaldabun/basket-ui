import React, {Component} from 'react';
import {Basket} from './containers/Basket';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Basket />
      </div>
    )
  }
}

export default App;
