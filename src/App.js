import React from 'react';
import Navbar from "./components/UI/Navbar/Navbar";
import './styles/App.css'
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import About from "./components/About";
import Weather from "./components/Weather";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Weather/>} path={'/'} />
                <Route element={<About/>} path={'/about'} />
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;