import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import medicanLogo from '../images/medican-logo.png'

const Navbar = () => {
    const [hideHomeAbout, setHideHomeAbout] = useState("vsible");
    useEffect(() => {
    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if (scroll > 0) {
            setHideHomeAbout("hidden");
        } else {
            setHideHomeAbout("visible");
        }
    });

    return () => {
        window.removeEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if (scroll > 0) {
                setHideHomeAbout("hidden");
            } else {
                setHideHomeAbout("visible");
            }
        });
        
    };
}, []);
        return (
            <>
                <nav className="navbar navbar-expand-lg do">
                    <div className="container-fluid do">
                        <Link className="navbar-brand do" to="/"><img className='logo do' src={medicanLogo} alt="Medican"></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse do" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item do">
                                    <Link className="nav-link active do" style={{visibility: `${hideHomeAbout}`}} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item do">
                                    <Link className="nav-link active do" style={{visibility: `${hideHomeAbout}`}} aria-current="page" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    };

    export default Navbar