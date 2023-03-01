import React from 'react';
import Navbar from './components/Navbar';
import Dictionary from './components/Dictionary';
import './App.css';


function App() {

  return (
    <div className="App"> 
      <main className="wrapper">
        <Navbar/>
        <Dictionary />
      </main>
    </div>
  )
}

export default App
