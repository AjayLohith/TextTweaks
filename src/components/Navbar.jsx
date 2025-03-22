import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  

export default function NavBar(props) {
    const [mode, setmode] = useState("light");

    const toggleMode = () => {
        if (mode === 'light') {
            setmode('dark');
        } else {
            setmode('light');
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} fixed-top`} style={{ backgroundColor: 'transparent' }}>
            <div className="container-fluid">
                <Link className="navbar-brand me-4" to="/"><b>{props.title}</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" style={{ columnGap: '10px' }}>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-auto mx-3`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Dark Mode</b></label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string
};

NavBar.defaultProps = {
    title: 'Title Here',
    aboutUs: 'write'
};