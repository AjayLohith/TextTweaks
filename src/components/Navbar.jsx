import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  

export default function NavBar(props) {
    const [mode, setmode] = useState("light");
    const [isOpen, setIsOpen] = useState(false);

    const toggleMode = () => {
        if (mode === 'light') {
            setmode('dark');
        } else {
            setmode('light');
        }
    }

    // Function to correctly toggle the navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the navbar when clicking on links
    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    // Effect to update body padding when navbar opens/closes
    useEffect(() => {
        document.body.style.paddingTop = isOpen && window.innerWidth < 992
            ? (document.querySelector('.navbar-collapse')?.offsetHeight + 56) + 'px'
            : '56px';
    }, [isOpen]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} fixed-top`} 
             style={{ 
                backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa',
                zIndex: 1030
             }}>
            <style>{`
                .navbar-collapse {
                    transition: all 0.3s ease;
                }
                body {
                    transition: padding-top 0.3s ease;
                    padding-top: 56px;
                }
                @media (max-width: 991.98px) {
                    .navbar-collapse {
                        padding: 1rem;
                        margin-top: 0.5rem;
                        border-radius: 0.25rem;
                        background: ${props.mode === 'dark' ? '#343a40' : '#e9ecef'};
                    }
                    .navbar-nav {
                        margin-bottom: 1rem;
                    }
                    .form-switch {
                        display: flex;
                        justify-content: center;
                        margin-top: 0.5rem;
                    }
                }
                /* Prevent navbar from taking too much space on small screens */
                @media (max-width: 576px) {
                    .navbar {
                        padding: 0.5rem;
                    }
                    .navbar-brand {
                        font-size: 1.1rem;
                    }
                    .navbar-toggler {
                        padding: 0.4rem 0.6rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
            <div className="container-fluid">
                <Link className="navbar-brand me-2" to="/"><b>{props.title}</b></Link>
                <button className="navbar-toggler" type="button" 
                        aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation"
                        onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav" style={{ columnGap: '10px' }}>
                        <li className="nav-item">
                            <Link className="nav-link active mx-4" to="/" onClick={handleNavLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about" onClick={handleNavLinkClick}>About</Link>
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