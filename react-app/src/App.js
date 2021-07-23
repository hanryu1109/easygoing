import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class Subject extends Component {
  render() {
    return (
      <header>
          <h1>Web</h1>
          World Wide Web!
      </header>   
    );
  }
}


// 7 line ~ 16 line이 컴포넌트를 만드는 곳
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
      </div>
      // 리턴된 값 중 가장 바깥태그는 하나여야만 한다! 
    )
  }
}

export default App;
