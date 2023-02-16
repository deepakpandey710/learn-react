import About from './components/About';
import Home from './components/Home';
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
    return(
        <div className='App'>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path='/*' element={<h1>page not found</h1>}/> */}
                <Route path='/*' element={<Navigate to="/" />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )    
    
}

export default App;


