import '../styles/header.css'
import Logo from './Logo.jsx'
import WorldIcon from './WorldIcon.jsx'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdow.jsx';
import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';



function Header() {

    const { language } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <Logo />
            </Link>
            <button className="burger-menu" onClick={toggleMenu}>
                &#9776;
            </button>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link className="underline-on-hover" to="/app-team-sodaas/About_us">{about_us[language]}</Link>
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