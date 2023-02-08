import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data,setdata]=useState("deepak");
  function update(){
    setdata("ritik");
    
  }
  console.warn("helloo----");
  return (
    <div className="App">
      <h1>hello it's {data}</h1>
      <button onClick={update}>click me</button>
    </div>
  );
}

export default App;
