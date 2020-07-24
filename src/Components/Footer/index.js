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
            <p className="credit">Icons and illustrations from <a href="https://undraw.co/illustrations">Undraw</a> &amp; <a href="https://www.freepik.com/">Freepik</a></p>
        </div>
    );
}

export default Footer;