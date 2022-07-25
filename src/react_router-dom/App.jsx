import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <h1>React Router Dom</h1>
            <hr />
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App