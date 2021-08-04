// import React from 'react';
import React, { useState, useEffect } from 'react'; //useState, useEffect hook 을 include 
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function() {
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove class" onClick={function() {
        setClassShow(false);
      }}></input>
      { funcShow ? <FuncComp initNumber={2} date={new Date().toString()}></FuncComp> : null }
      { classShow ? <ClassComp initNumber={2} date={new Date().toString()}></ClassComp> : null }
    </div>
  );
}

var funcStyle = 'color:blue';
var funcId = 0;

//함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양이 된다.
function FuncComp(props) {
  //React.useState()//이렇게 호출하면 귀찮기 때문에 React를 import할 때 { useState } 를 같이 import 를 선언하면 된다.
  var numberState = useState(props.initNumber); //state를 만들고 싶다면 useState에 어떤 값을 전달하면 우리가 만드는 그 state의 초기값이 된다. 
  var number = numberState[0]; //클래스로 state를 정의한 것과 같다.
  //console.log(numberState); //return 된 것을 확인해보니 2개의 값으로 이루어진 배열이다. 배열이 가지고 있는 첫번째 값이 우리가 원하는 state 값이 될 것이다.  
  var setNumber = numberState[1]; //이게 클래스 방식에서 setState 해주는 것과 같다. 함수가 담겨져 있는데 함수를 통해서 state 값을 변경할 수 있다.
  
  var dateState = useState(props.date);
  var _date = dateState[0];
  var setDate = dateState[1];
  // console.log(dateState);

  //var [date, setDAte] = useState(props.date); //얘는 24 - 26line 과 같은 한 줄짜리 코드다임마!!

  //sideEffect : 주 업무에서 벗어난 것을 react sideEffect 라고 한다. 렌더링 과정 이외의 작업들을 side effect라고 한다
  //useEffect 는 첫번째 인자로 함수가 들어와야 한다. 
  //useEffect는 처음에 렌더가 끝났을 때 실행되고 렌더가 또 실행될때마다 실행됨. class에서는 componentDidMount, componentDidUpdate 와 등가
  //use Effect 는 여러개 설치 가능!
  useEffect(function() {
    console.log('%cfunc => useEffect Number(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = number; //만약 넘버값이 바뀌었을 때만 다음 return 함수를 반환하고 싶다면 return ,fucntion, 2번째 인자로 바뀌는 값의 변수를 넣어주면 된다.
    //document.title = `number : ${_date}` //이 명령은 이 컴포넌트 자체의 렌더링과는 상관없는 다른 거를 예외적으로 바꾼 것. 이런 거를 side effect라고 하면서 
    // side effect가 적당한 타이밍에 실행되도록 하는 것이 class에서는 componentDidMount, componentDidUpdate 거였는데 함수형 방식에서는 useEffect

    return (function() {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }) //useEffect 의 return 값은 함수 | 콘솔창에서 render - useEffect - render - useEffect return - useEffect 순으로 | 정리 정돈 clean-up
  }, [number]); //여기서는 number 만 참조하고 있기 때문에 date 버튼을 눌러도 useEffect 함수가 실행되지 않는다. 
  //useEffect 의 두번째 인자의 배열값만 참조하기 때문에 그 값이 변경되었을 때만 해당 useEffect가 실행된다.

  useEffect(function() {
    console.log('%cfunc => useEffect Date(componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    // document.title = number; //만약 넘버값이 바뀌었을 때만 다음 return 함수를 반환하고 싶다면 return ,fucntion, 2번째 인자로 바뀌는 값의 변수를 넣어주면 된다.
    //document.title = `number : ${_date}` //이 명령은 이 컴포넌트 자체의 렌더링과는 상관없는 다른 거를 예외적으로 바꾼 것. 이런 거를 side effect라고 하면서 
    // side effect가 적당한 타이밍에 실행되도록 하는 것이 class에서는 componentDidMount, componentDidUpdate 거였는데 함수형 방식에서는 useEffect

    return (function() {
      console.log('%cfunc => useEffect date return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }) //useEffect 의 return 값은 함수 | 콘솔창에서 render - useEffect - render - useEffect return - useEffect 순으로 | 정리 정돈 clean-up
  }, [_date]);

  //componentDidMount 경우에만 실행하고 싶을 때
  useEffect(function() {
    console.log('%cfunc => useEffect (componentDidMount) '+(++funcId), funcStyle);
    // document.title = number; //만약 넘버값이 바뀌었을 때만 다음 return 함수를 반환하고 싶다면 return ,fucntion, 2번째 인자로 바뀌는 값의 변수를 넣어주면 된다.
    //document.title = `number : ${_date}` //이 명령은 이 컴포넌트 자체의 렌더링과는 상관없는 다른 거를 예외적으로 바꾼 것. 이런 거를 side effect라고 하면서 
    // side effect가 적당한 타이밍에 실행되도록 하는 것이 class에서는 componentDidMount, componentDidUpdate 거였는데 함수형 방식에서는 useEffect

    return (function() {
      console.log('%cfunc => useEffect return (componentwillUnMount) '+(++funcId), funcStyle);
    }) //useEffect 의 return 값은 함수 | 콘솔창에서 render - useEffect - render - useEffect return - useEffect 순으로 | 정리 정돈 clean-up
  }, []); //컴포넌트가 생성될 때 최초로만 실행된다.

  console.log('%cfunc => render '+(++funcId), funcStyle);

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
      <p>Date : {_date}</p>
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
  
  // componentWillMount() {
  //   console.log('%cclass => componentWillMount', classStyle);
  // }
  
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true
  }

  // componentWillUpdate() {
  //   console.log('%cclass => componentWillUpdate', classStyle);
  // }

  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', classStyle);
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