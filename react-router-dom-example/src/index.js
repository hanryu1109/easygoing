import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  HashRouter,
  NavLink,
  useParams
} from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>home...</p>
    </div>
  )
}

var contents = [
  {id: 1, title: 'HTML', description: 'HTML is...' },
  {id: 2, title: 'JS', description: 'JS is...' },
  {id: 3, title: 'REACT', description: 'REACT is...' }
]

function Topic() {

  var param = useParams();
  var topic_id = param.topic_id;
  var selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  }

  // console.log(param);

  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) { //topic_id 가 문자열이라서 숫자로 바꿔줬다.
      selected_topic = contents[i];
      break
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.description}</p>
    </div>
  )
}

function Topics() {
  var lis = []; 
  for (var i = 0; i < contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>)
  }

  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
      <ul>
        { lis }
      </ul>
      <Route path="/topics/:topic_id"><Topic></Topic></Route>
    </div>
  )
}

// function Topics() {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <p>Topics...</p>
//       <ul>
//         <li><NavLink to="/topics/1">HTML</NavLink></li>
//         <li><NavLink to="/topics/2">JS</NavLink></li>
//         <li><NavLink to="/topics/3">REACT</NavLink></li>
//       </ul>
//       <Switch>
//         <Route path="/topics/1">HTML is...</Route>
//         <Route path="/topics/2">JS is...</Route>
//         <Route path="/topics/3">REACT is...</Route>
//       </Switch>
//     </div>
//   )
// }

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact....</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
