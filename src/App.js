import React from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header';
import School from './components/School/School';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>ই<img style={{height:"40px"}} src={logo} className="App-logo" alt="logo" />স্কুল </h1>
        </div>
      </header>
      <Header></Header>
      <School></School>
    </div>
  );
}

export default App;