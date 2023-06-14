import React, { useState } from "react";
import "./Overlays.css";
import { CiUser } from "react-icons/ci";
import DragDrop from "./components/DragDrop";

function Overlays() {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>Logo</h2>
        </div>
        <ul className='"nav-menu'>
          <h1 className="nav-name">EasyStream</h1>
        </ul>
        <div className="nav-profile">
          <CiUser className="icon" />
        </div>
      </div>

      <DragDrop />

      <div className="footer">
        <div className="foot-buy">
          <h2>Kjøp</h2>
        </div>

        <div className="foot-back">
          <h2 className="foot-back-text">Fortsett</h2>
        </div>
      </div>
    </>
  );
}

export default Overlays;
