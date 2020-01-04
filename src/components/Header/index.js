import React from 'react';
import { Link } from "react-router-dom"

import './Header.css';
import {logo, camera} from "../../assets"

export default function Header() {
  return (
    <header id="main__header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
        <Link to="/new-post">
          <img src={camera} alt="enviar publicação"/>
        </Link>
      </div>
    </header>
  );
}

