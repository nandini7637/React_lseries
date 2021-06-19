import React , { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Classcomp from './components/Classcomp';

 class App extends Component {
   render() {
  return (
    <div className="App">
      <Hello />
      <Classcomp />
    </div>
  );
}
 }

export default App;
