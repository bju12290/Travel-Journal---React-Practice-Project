import React from 'react'
import {FaEarthAmericas} from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav >
            <a href="index.html" className="navbar">
                <FaEarthAmericas className="navbar--icon"/>
                <h1>my travel journal</h1>
            </a>
        </nav>
    )
}