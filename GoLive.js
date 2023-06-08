import './GoLive.css';
import React, { useState } from 'react';
import logo from './logo.png';
import Overlay from './Overlay.png';
import profil from './profil.png';
import Kamera from './Kamera.png';
import Skjerm from './Skjerm.png';
import Ikoner from './Ikoner.png';
import sendingsplan from './sendingsplan.png';
import { Link } from 'react-router-dom';
import Timer from './Timer';





function GoLive() {
    const [isClicked, setIsClicked] = useState(false);
    const [buttonText, setButtonText] = useState('Go Live');

    const handleClick = () => {
        setIsClicked(!isClicked);
        setButtonText(isClicked ? 'Go Live' : 'End Live');
    };

    return (
        <div>
           
            <img className="logoImg" src={logo} alt="Vizrt Logo"></img>
            <img className="overlayImg" src={Overlay} alt="overlay"></img>


            <Link to="/Profil">
                <img className="profilImg" src={profil} alt="profil Logo" />
            </Link>


            <h1 className='tittel'>SENDINGSTITTEL</h1>

            <img className="kameraImg" src={Kamera} alt="kamera"></img>
            <img className="skjermImg" src={Skjerm} alt="skjerm"></img>

            <img className="ikonerImg" src={Ikoner} alt="ikoner"></img>

          <h2 className='manus-title'>Manus</h2>
            <div className="ManusBox" >
                <div id="ScrollableManusBox" style={{ height: '400px', overflow: 'scroll' }}>
                    Hei! Velkommen tilbake til min stream! <br></br><br></br>
                    Tusen takk for alle donasjoner. Det hjelper meg til å kjøpe flere overlays!  <br></br><br></br>
                    Nå skal vi fyre opp noe Warzone i noen timer, så håper at så mange som mulig vil se på. <br></br><br></br>
                    Del gjerne streamen med alle dere kjenner da jeg blir live langt ute på natten!
                    <textarea style={{ width: '100%', height: '100%', resize: 'none', fontSize: '20px', fontFamily:'sans-serif', borderBlockColor:'white'}} />
                </div>
                </div>

            <h2 className='sendingsplan'>SENDINGSPLAN</h2>

            <img className="sendingsplanImg" src={sendingsplan} alt="sendingsplan"></img>
            <Timer />
        </div>
    )
}



export default GoLive;