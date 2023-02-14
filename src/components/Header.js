import React from "react"
import logo from "../../src/images/troll-face.png";
import "../components/Header.css"

export default function Header() {
    return (
        <header className="header">
            <img src={logo}  className="header--image" alt="Logo"/>
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}