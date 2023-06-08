import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import profil from './profil.png';
import bilderad from './bilderrad.png';


function Startsiden() {
    return (
        <div>
            <nav >
                <h2 className="Navbar" id='kontakt-nav'>Kontakt oss </h2>
                <h2 className="Navbar" id='produkter-nav'>Produkter </h2>
                <h2 className="Navbar" id='hjelp-nav'>Hjelp Service </h2>
                <h2 className="Navbar" id='nyhet-nav'>Nyheter</h2>
            </nav>

            <h1 className="Start-header">Easystream</h1>

            <img className="bilderImg" src={bilderad} alt="bilderrad" />

            <img className="logoImg" src={logo} alt="Vizrt Logo" />
            <Link to="/Profil">
                <img className="profilImg" src={profil} alt="profil Logo" />
            </Link>

            <Link to="/Download">
                <button className='kom-igang-btn'>Trykk her for å komme igang</button>
            </Link>
        </div>
    );
}

export default Startsiden;
