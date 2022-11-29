import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary rounded" onClick={() => { props.colorPalette('primary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        <div className="bg-secondary rounded mx-2" onClick={() => { props.colorPalette('secondary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                        <div className="bg-ligh rounded" onClick={() => { props.colorPalette('light') }} style={{ height: "30px", width: "30px", cursor: "pointer", border: "1px solid grey" }}></div>
                        <div className="bg-dark rounded mx-2" onClick={()=>{props.colorPalette('dark')}} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                    </div> */}
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} className="form-check-input" />
                        <label htmlFor="flexSwitchCheckDefault" className="form-check-label">{props.switchMode}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Textutils Tool",
    about: "About Textutils"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}