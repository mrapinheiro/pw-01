import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header>
            <div className="hero">
                <h1>Mario Pinheiro - 30015420</h1>
                <p>Passionate Front-End Developer specializing in creating responsive and user-friendly web applications.</p>
            </div>
            <nav>
                <NavLink smooth to="/#about">About</NavLink>
                <NavLink smooth to="/#projects">Projects</NavLink>
                <NavLink smooth to="/#skills">Skills</NavLink>
                <NavLink smooth to="/#contact">Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
