import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="nav-container">
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <nav className={isOpen ? "open" : ""}>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about me</Link></li>
                        <li><Link to="/work-experience">work experience</Link></li>
                        <li><Link to="/projects">projects</Link></li>
                        <li><Link to="/skills">skills</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
