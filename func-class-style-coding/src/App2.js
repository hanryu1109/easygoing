import React, { useState, useEffect } from "react";

function App2() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return(
    <div className="container">
      <h1>Hello World!</h1>
      <input type="button" value="remove Func" onClick={function(){setFuncShow(false)}}></input>
      <input type="button" value="remove Class" onClick={function(){setClassShow(false)}}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={4}></ClassComp> : null}
    </div>
  )
}

function FuncComp(props) {
  
  var [_number, setNumber] = useState(props.initNumber);

  useEffect(function() {
    console.log("컴포넌트가 처음 실행될때만 나옴")
  }, [])

  useEffect(function() {
    return (
      function() {
        console.log("컴포넌츠가 사라질 때 실행")
      }
    )
  })

  return (
    <div className="container">
      <h2>함수 스타일 컴포넌트</h2>
      <p>함수 initNumber : {_number}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random())
        }
      }></input>
    </div>
  )
}

class ClassComp extends React.Component{
  
  state = {
    number: this.props.initNumber
  }

  render() {
    return (
      <div className="container">
        <h2>클래스 스타일 컴포넌트</h2>
        <p>클래스 initNumber : {this.state.number}</p>
        <input type="button" value="random" onClick={function() {
          this.setState({number: Math.random()})
        }.bind(this)}></input>
      </div>
    )
  }
}

export default App2;