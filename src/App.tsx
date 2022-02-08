import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Menu/>
        </div>
    );
}

export default App;
