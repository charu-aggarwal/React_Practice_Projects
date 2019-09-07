import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloWorld'; 
import Counter from './components/Counter';
//import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
     
      <HelloWorld />
      <Counter 
        text="Increment"
        text1="Decrement"
      />
    </div>
  );
}

export default App;

