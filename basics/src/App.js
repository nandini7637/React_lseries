import React , { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Classcomp from './components/Classcomp';
import Jsxdiff from './components/Jsxdiff';

 class App extends Component {
   render() {
  return (
    <div className="App">
      <Hello />
      <Classcomp />
      <Jsxdiff />
    </div>
  );
}
 }

export default App;
