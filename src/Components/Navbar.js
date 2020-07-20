import React from 'react';
import './Navbar.scss';
import {
    Link
} from "react-router-dom";
import Resume from '../assets/images/KetakiRao_Resume.pdf';

export default function ButtonAppBar() {

    return (
        <div className="nav-wrapper">
            <div className='navbar'>
                <div className="line"></div>
            </div>
            <div className="navbar-overlay">
                <div className="brand hide-on-small">
                    <Link to="/">Ketaki Rao</Link>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li>
                            <Link to="/">Porfolio</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <a href={Resume} target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}