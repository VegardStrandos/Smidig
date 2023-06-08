import './Profil.css';
import React from 'react';
import logo from './logo.png';
import profil from './profil.png';



function Profil() {

    return (
        <div>
            <img className="logoImg" src={logo} alt="Vizrt Logo"></img>
            <img className="profilImg" src={profil} alt="profil Logo"></img>
            <h1 className='Header'>Easystream</h1>
            <h2 className='Header2'>Lag en konto</h2>
            <h2 className='username'>Brukernavn</h2>
            <div className='box'>Skriv her</div>
            <h2 className='Header3'>Email</h2>
            <div className='box2'>Skriv her</div>
            <h2 className='Header4'>Passord</h2>
            <div className='box3'>Skriv her</div>
            <h2 className='Header5'>Gjenta passord</h2>
            <div className='box4'>Skriv her</div>
            <h1 className='Header6'>Full Navn</h1>
            <div className='box5'>Skriv her</div>
            <button className='Header7'>Ferdig</button>
            
          
        </div>
    )
}



export default Profil;