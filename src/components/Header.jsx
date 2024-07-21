import '../styles/header.css'
import Logo from './Logo.jsx'
import WorldIcon from './WorldIcon.jsx'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdow.jsx';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';



function Header() {

    const { language } = useContext(LanguageContext);

    const about_us = {
        en: 'About Us',
        pl: 'O Nas'
    };
    const commitments = {
        en: 'Commitments',
        pl: 'Zobowiązania'
    };
    const products = {
        en: 'Products',
        pl: 'Produkty'
    }


    return (
        <header className="header">
            <Link to="/" className="logo">
                <Logo />
            </Link>
            <nav className="nav-links">
                <Link className="underline-on-hover" to="/about">{about_us[language]}</Link>
                <Link className="underline-on-hover" to="/commitments">{commitments[language]}</Link>
                <Link className="underline-on-hover" to="/products">{products[language]}</Link>
                <div className='lang-menu'>
                    <WorldIcon />
                    <Dropdown />
                </div>
                
            </nav>
        </header>
    );
  }
  
  export default Header;