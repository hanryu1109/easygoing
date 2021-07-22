import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React!!!
      </div>
      // 리턴된 값 중 가장 바깥태그는 하나여야만 한다! 
    )
  }
}

export default App;
