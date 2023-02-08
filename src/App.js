import logo from './logo.svg';
import './App.css';

function App() {
  let data ="deepak";
  function apple(){
    data="ritik";
    alert(data);
  }
  return (
    <div className="App">
      <h1>hello it's {data}</h1>
      <button onClick={apple}>click me</button>
    </div>
  );
}

export default App;
