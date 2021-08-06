import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, NavLink, Route, Switch, useParams
} from "react-router-dom"

var contents = [
  {id: 1, title: 'HTML', description: 'HTML is...'},
  {id: 2, title: 'JS', description: 'JS is...'},
  {id: 3, title: 'REACT', description: 'REACT is...'}
]

function Home() {
  return(
    <div>
      <h3>Home</h3>
      <p>This is home!</p>
    </div>
  )
}

function Topic() {
  var param = useParams();
  var topic_id = param.topic_id;
  var selected_id = {
    title: 'Sorry',
    description: 'Not Found'
  }

  for (var i=0; i < contents.length; i++) {
    if (contents[i].id === topic_id) {
      selected_id = contents[i]
      break
    }
  }

  return(
    <div>
      <h5>{selected_id.title}</h5>
      <p>{selected_id.description}</p>
    </div>
  )
}

function Topics() {
  var lis = [];
  for (var i=0; i < contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}></NavLink></li>)
  }
  return(
    <div>
      <h3>Topics</h3>
      <ul>
        { lis }
      </ul>
    <Route path="/topics:topic_id"><Topic></Topic></Route>
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h3>Contact</h3>
      <p>This is Contact!</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <h3>React Router Dom Example</h3>
      <ul>
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/topics">TOPICS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
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
