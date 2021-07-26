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
    //state값 초기화
    this.state = {
      mode: 'read',
      subject: {title: 'Web', sub: 'World Wide Web'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title:'HTML', desc:'HTML is Hyper Text...'},
        {id: 2, title:'CSS', desc:'CSS is Cascading Style...'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for interactive..'}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} //리액트에서는 props를 따옴표를 붙여주면 문자가 되고 자바스크립 코드로서 실행되게 하고 싶다면 중괄호를 쓰면 된다.
          sub={this.state.subject.sub}
          onChangePage={function() {
            alert('hihi!!');
            this.setState({
              mode : "welcome"
            });
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault(); //기본 동작을 지워버린다.
            // debugger;
            // this.state.mode = 'welcome'; // 이벤트가 실행되는 이 함수 안에서는 this가 이 컴포넌트를 가리키는 것이 아니라 아무것도 가리키지 않는다.
            this.setState({
              mode: 'welcome',
            })
            // state값이 바뀔 때는 setState 함수로!
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>    */}
        <TOC
          onChangePage={
            function() {
              alert('hellowwwww😋');
              this.setState({mode: 'read'});
            }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
      // 리턴된 값 중 가장 바깥태그는 하나여야만 한다! 
    )
  }
}

export default App;
//react : 정리정돈 도구로 보자!