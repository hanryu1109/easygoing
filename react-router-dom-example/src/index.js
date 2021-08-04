import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>home...</p>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
    </div>
  )
}

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
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
