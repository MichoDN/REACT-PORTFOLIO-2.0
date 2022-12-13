import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Knowledge from '../components/Knowledge';
import Portfolio from '../components/Portfolio';

const SectionDisplayer = ({ currentComp }) => {
    const showComponent = () => {
        switch (currentComp) {
            case "KNOWLEDGE":
                return <Knowledge />

            case "ABOUT ME":
                return <About />

            case "PORTFOLIO":
                return <Portfolio />

            case "CONTACT":
                return <Contact />
                
            default:
                return <About />
        }
    }
    return showComponent()
};

export default SectionDisplayer;