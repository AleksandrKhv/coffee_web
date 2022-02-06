import React from 'react';
import st from './Header.module.css'
import logo from './../../images/logo.png'
import Nav from '../Navbar/Nav';

const Header = () => {
    return (
        <header className={st.header}>
            <a href="#" className={st.logo}>
                <img src={logo} alt=""/>
            </a>
            <Nav/>
        </header>
    );
};

export default Header;