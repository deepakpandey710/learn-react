import {Component, useState} from 'react';
import './App.css';
import User from './User';
function App(){
  const [name,setName]=useState("deepak");
  return(
    <div className="App">
      <User name={name}/>
      {/* <button onClick={()=>setName("pandey")}>update name</button> */}
    </div>
  )
}


export default App;
