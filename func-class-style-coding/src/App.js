// import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2} date={new Date().toString()}></FuncComp>
      <ClassComp initNumber={2} date={new Date().toString()}></ClassComp>
    </div>
  );
}

//함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양이 된다.
function FuncComp(props) {
  //React.useState()//이렇게 호출하면 귀찮기 때문에 React를 import할 때 { useState } 를 같이 import 를 선언하면 된다.
  var numberState = useState(props.initNumber); //state를 만들고 싶다면 useState에 어떤 값을 전달하면 우리가 만드는 그 state의 초기값이 된다. 
  var number = numberState[0]; //클래스로 state를 정의한 것과 같다.
  //console.log(numberState); //return 된 것을 확인해보니 2개의 값으로 이루어진 배열이다. 배열이 가지고 있는 첫번째 값이 우리가 원하는 state 값이 될 것이다.  
  var setNumber = numberState[1]; //이게 클래스 방식에서 setState 해주는 것과 같다. 함수가 담겨져 있는데 함수를 통해서 state 값을 변경할 수 있다.
  
  var dateState = useState(props.date);
  var date = dateState[0];
  var setDate = dateState[1];
  // console.log(dateState);

  //var [date, setDAte] = useState(props.date); //얘는 24 - 26line 과 같은 한 줄짜리 코드다임마!!
  
  return (
    <div className="container">
      <h2>function style component</h2>
      {/* <p>Number : {props.initNumber}</p> */}
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        } //.bind(this) 이 코드는 class 방식 컴포넌트에서 이벤트를 연결하기 위해 넣어주는 것이기 때문에 함수 방식 컴포넌트에서는 제거해준다.
      }></input>
      <p>Date : {date}</p>
      <input type="button" value="update" onClick={
        function() {
          setDate(new Date().toString());
        }
      }>
      </input>
    </div>
  )
}

var classStyle = 'color:red';
//클래스 스타일은 render()메소드를 정의해서 걔 리턴 값이 UI, 즉 실제 모양이 된다.
class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date: this.props.date,
  } //state를 초기화 하고 그 state 값을 사용하고 , 변경하는 이 과정을 예전 함수 방식 컴포넌트에서는 할 수 없었다.
  //함수 방식 컴포넌트는 props로 전달되는 값을 화면에 표시해주는 용도로 간단하게 사용할 컴포넌트에서만 머물렀음
  //그러나 이제 hook을 통해서 함수 방식에서도 state를 사용할 수 있게 됨.
  
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true
  }

  componentWillUpdate() {
    console.log('%cclass => componentWillUpdate', classStyle);
  }

  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        {/* <p>Number : {this.props.initNumber}</p>  */}
        {/* 초기값을 설정해주지 않았을 때는 props값을 그대로 정의했는데 (이렇게, this.props.initNumber) */}
        <p>Number : {this.state.number}</p>
        {/* props값을 state로 줬기 때문에 state값을 바꿀때마다 render 메소드가 호출되면서 새로 달라진 state의 값이 시각적인 요소에 반영된다. */}
        <input type="button" value="random" onClick={
          function() {
            this.setState({number:Math.random()});
          }.bind(this) //.bind(this) 이 코드는 class 방식 컴포넌트에서 이벤트를 연결하기 위해 넣어주는 것
        }></input> 
        {/* this.setState에 의해서 state안에 있는 number 값이 바뀌고 바뀌면 render 메서드가 다시 호출되면서 바뀐 결과가 반영된다. */}
        <p>Date : {this.state.date}</p>
        <input type="button" value="update" onClick={
          function() {
            this.setState({date: new Date().toString()});
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;