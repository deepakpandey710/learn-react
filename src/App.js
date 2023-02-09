import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App(){
  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  function getFormData(e) {
    console.log(name,tnc,interest);
    e.preventDefault();
  }
  
  return(
    <div className="App">
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name"  onChange={(e)=>setName(e.target.value)} /> <br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>select option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and condtions</span>
        <br/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}











// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       data:1
//     }
//   }
//   update(){
//     this.setState({
//       data:this.state.data+1
//     })
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>hi {this.state.data}</h1>
//         <button onClick={()=>this.update()}>click me</button>
//       </div>
//     );
//   }
// }
export default App;
