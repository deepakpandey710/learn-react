import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav'
import Filter from './components/Filter'
import Contact from './components/Contact';
import Channel from './components/Channel';
import Other from './components/Other';
import Login from './components/Login';
import Protect from './components/Protect';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Protect comp={Home}/>} />
                    {/* <Route path="/" element={<Home/>}/> */}
                    <Route path="/about" element={<About />} />
                    {/* <Route path='/*' element={<h1>page not found</h1>}/> */}
                    <Route path='/*' element={<Navigate to="/" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/contact' element={<Contact />}>
                        <Route path='channel' element={<Channel />} />
                        <Route path='other' element={<Other />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;


