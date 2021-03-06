import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Menu/>
            <Products/>
            <Review/>
            <Contact/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default App;
