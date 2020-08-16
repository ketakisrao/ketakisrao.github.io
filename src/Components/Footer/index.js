import React from 'react';
import './index.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <p>© <span>Ketaki Rao</span> 2020</p>
            <p className="credit">Designed &amp; code by me!</p>
        </div>
    );
}

export default Footer;