import React from "react";
import "./navigation.css";

import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav id="navigation">
            <Link to="/" className="link">Home</Link>
            <Link to="/Works" className="link">Works</Link>
        </nav>
    )
}

export default Navigation;