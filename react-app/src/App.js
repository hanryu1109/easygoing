import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Contents';

// 8 line ~ 19 line이 컴포넌트를 만드는 곳
class App extends Component {
  //컴포넌트가 실행될 때 constructor() 함수가 있다면 걔가 젤 먼저 실행되고 초기화를 담당한다.
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'Web', sub: 'World Wide Web'},
      contents: [
        {id: 1, title:'HTML', desc:'HTML is Hyper Text...'},
        {id: 2, title:'CSS', desc:'CSS is Cascading Style...'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for interactive..'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC
          data={this.state.contents}
        ></TOC>
        <Content title="HTML" desc="!HTML is HyperText Markup Language"></Content>
      </div>
      // 리턴된 값 중 가장 바깥태그는 하나여야만 한다! 
    )
  }
}

export default App;
//react : 정리정돈 도구로 보자!