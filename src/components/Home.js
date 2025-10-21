import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import './portfolio.css';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
