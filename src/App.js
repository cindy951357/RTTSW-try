import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

import './styles.css';


const App = () => {
    return (
        <>
            <div id='app-component' className='bg-green-400'>
                <h1>Welcome to RTTSW-try</h1>
            </div>
            <Router>
                <div className="wrapper">
                    <div className="nav">
                        <Link to="/">{'About  '}</Link>
                        <Link to="/about">{'About  '}</Link>
                        <Link to="/contact">{'Contact  '}</Link>
                    </div>

                    <Routes>
                        <Route exact path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;