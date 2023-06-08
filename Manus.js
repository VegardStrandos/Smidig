import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import profil from './profil.png';
import manusImg2 from './manusImg2.png';

function Manus() {

    /** <img className='manusImg2' src={manusImg2} alt="manus 2"></img> */
    return (
        <div>
            <h1 className="Manus-header">Manus Gjennomgang</h1>
            <img className="logoImg" src={logo} alt="Vizrt Logo" />
            <Link to="/Profil">
                <img className="profilImg" src={profil} alt="profil Logo" />
            </Link>



            <button className='søk-manus-btn'>Søk etter manus</button>
            <button className='skriv-manus-btn'>Skriv manus</button>

            <button className='sponsor-btn'>Sponsor Manus</button>
            <button className='fotball-btn'>Fotball Manus</button>
            <button className='review-btn'>Review Manus</button>
            <button className='start-btn'>Start Stream Manus</button>

            <button className='tilbake-btn'>Tilbake til planlegger</button>


            <div className="ManusBox" >
                <div id="ScrollableTextBox" style={{ height: '400px', overflow: 'scroll' }}>
                    Hei! Velkommen tilbake til min stream! <br></br><br></br>
                    Tusen takk for alle donasjoner. Det hjelper meg til å kjøpe flere overlays!  <br></br><br></br>
                    Nå skal vi fyre opp noe Warzone i noen timer, så håper at så mange som mulig vil se på.
                    Del gjerne streamen med alle dere kjenner da jeg blir live langt ute på natten!
                    <textarea style={{ width: '100%', height: '100%', resize: 'none', fontSize: '20px', fontFamily:'sans-serif', borderBlockColor:'white'}} />
                </div>
                </div>

            <Link to="/GoLive">
                <button className='til-oversikt-btn'>Til Sendingsoversikt</button>
            </Link>

        </div>
    );
}

export default Manus;
