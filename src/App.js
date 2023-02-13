import {Component, useState} from 'react';
import './App.css';
function App(){
  const students=[
    {name:"deepak",email:"deepak@test.com",contact:"888"},
    {name:"siddhu",email:"sddgek@test.com",contact:"248"},
    {name:"ritik",email:"dzdfs@test.com",contact:"348"}
  ]
  return(
    <div className='App'>
      <h1>Map function working</h1>
      <table border="1">
        <tr>
          <td>name</td>
          <td>email</td>
          <td>contact</td>
        </tr>
        {
          students.map((item)=>
            <tr>
              <td >{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default App;

