import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NavBar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Docs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tutorials">Tutorial</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/community">Community</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  ) //dans le navbar: on a change le tag a par link et le href par to => pour puvoir sauter par les liens sans raffraichir a chaquefois
  //on a utilise le navlik: pour pouvoir ajouter une classe active dans un link par example => on pourra le styliser 
}

export default Menu;
