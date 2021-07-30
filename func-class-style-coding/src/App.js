import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  );
}

//함수 스타일은 return 값만 만들어주면 걔가 바로 컴포넌트의 실제 모양이 된다.
function FuncComp() {
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  )
}

//클래스 스타일은 render()메소드를 정의해서 걔 리턴 값이 UI, 즉 실제 모양이 된다.
class ClassComp extends React.Component{
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
      </div>
    )
  }
}

export default App;