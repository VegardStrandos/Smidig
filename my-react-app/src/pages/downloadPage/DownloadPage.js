import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import profil from '../../assets/profil.png'
import video from '../../assets/video.png';
import LastNed from '../../assets/LastNed.png';
import './DownloadPage.scss'

export function DownloadPage() {
    return (
        <div>
            <h1 className="Easystream-header">EasyStream</h1>
            <img className="logoImg" src={logo} alt="Vizrt Logo" />
            <img className="videoImg" src={video} alt="video" />

            <Link to="/Profil">
                <img className="profilImg" src={profil} alt="profil Logo" />
            </Link>

            <p className="par1">For lettere Streaming</p>
            <ul>
                <li className="li1">
                    Designe hvordan du vil at live-sendingen din skal se ut
                </li>
                <li className="li2">
                    Planlegge programmet for live-sendingen din
                </li>
                <li className="li3">Bytte kamera under live-sendingen</li>
                <li className="li4">Starte en live-sending</li>
            </ul>

            <p className="par2">Informasjon om vårt produkt</p>
            <ul>
                <li className="liA">
                    Velg hvilke templates, hvor mange skjermer, manus og evt
                    reklame og logo som skal brukes på sendinig
                </li>
                <li className="liB">
                    Lag sendingsplan, se over manus, innstillinger på kamera
                    etc.
                </li>
                <li className="liC">
                    Go-live. Dra evt overlays og templates du vil bruke fra
                    hamburgermenyen. Du har muligheten til å importere/kjøpe
                    overlays til streamen. Det er to skjermer som viser hvordan
                    det ser ut uten overlays og en med
                </li>
            </ul>

            <img className="lastNedImg" src={LastNed} alt="Last ned" />
        </div>
    )
}

export default DownloadPage;
