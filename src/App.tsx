import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Menu/>
            <Products/>
        </div>
    );
}

export default App;
