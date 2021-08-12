import React, { Component, createContext } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import Weather from './Weather';

// 8 line ~ 19 line이 컴포넌트를 만드는 곳
class App extends Component {
  //컴포넌트가 실행될 때 constructor() 함수가 있다면 걔가 젤 먼저 실행되고 초기화를 담당한다.
  constructor(props) {
    super(props);
    //state값 초기화
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      subject: {title: 'Web', sub: 'World Wide Web'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title:'HTML', desc:'HTML is Hyper Text...'},
        {id: 2, title:'CSS', desc:'CSS is Cascading Style...'},
        {id: 3, title:'JavaScript', desc:'JavaScript is for interactive..'}
      ]
    }
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i]
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title, _desc, _article, _content = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;
        // 아래와 같이 state의 값을 직접 변경하면 react가 변경되었느지 알지 못한다. 따라서 this.setState로 갱신해줘야 한다.
        // this.state.contents.push({id: this.max_content_id, title: _title, desc: _desc}) //array에 요소 값 추가할 때 원본데이터를 바꾸는 push()를 쓰지말고 concat()을 쓰자
        var _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc})
        // this.setState({
        //   contents: this.state.contents
        // })
        this.setState({
          contents: _contents,
          // selected_content_id: _contents.length,
          selected_content_id: this.max_content_id,
          mode: "read"
        })
      }.bind(this)}></CreateContent>;
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc) {
          // 아래와 같이 state의 값을 직접 변경하면 react가 변경되었느지 알지 못한다. 따라서 this.setState로 갱신해줘야 한다.
          // this.state.contents.push({id: this.max_content_id, title: _title, desc: _desc}) //array에 요소 값 추가할 때 원본데이터를 바꾸는 push()를 쓰지말고 concat()을 쓰자
          // var _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc})
          var _contents = Array.from(this.state.contents);
          // this.setState({
          //   contents: this.state.contents
          // })

          var i = 0;
          while(i < _contents.length) {
            if(_id === _contents[i].id) {
              // _content.title = _title;
              // _content.desc = _desc;
              _contents[i] = {id: _id, title: _title, desc: _desc}
              break
            }
            i = i + 1;
          }

          this.setState({
            contents: _contents,
            mode: "read"
          })
        }.bind(this)}></UpdateContent>;
    }
    return _article
  }

  render() {
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
          onChangePage={function(id) {
              this.setState({
                mode: 'read',
                selected_content_id : Number(id)
              });
            }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode) {
          if (_mode === "delete") {
            if(window.confirm("정말 삭제하시겠습니까?")) {
              // console.log(this.state.selected_content_id);
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break
                }
                i = i + 1
              }
            }
            this.setState({
              contents: _contents,
              mode: "welcome"
            });
            alert("deleted!!");
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}

        <Weather></Weather>
      </div>
      // 리턴된 값 중 가장 바깥태그는 하나여야만 한다! 
    )
  }
}

export default App;
//react : 정리정돈 도구로 보자!