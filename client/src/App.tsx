import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegForm/>
    </div>
  );
}

export default App;
