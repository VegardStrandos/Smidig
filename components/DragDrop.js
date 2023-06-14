import React, { useState } from "react";
import Overlays from "./OverlaysDrag";
import { useDrop } from "react-dnd";
import "../App.css";
import { BsFillCameraFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import overlay1 from "../Assets/overlay1.jpeg";
import overlay2 from "../Assets/overlay2.jpeg";
import overlay5 from "../Assets/Overlay5.jpeg";
import overlay6 from "../Assets/overlay6.png";
import overlay8 from "../Assets/Overlay8.jpeg";
import overlay10 from "../Assets/Overlay10.png";
import previews from "../Assets/Preview.png";
import overlay11 from "../Assets/overlay11-removebg-preview.png";

const OverlaysList = [
  {
    id: 1,
    url: overlay11,
  },
  {
    id: 2,
    url: overlay2,
  },
  {
    id: 3,
    url: overlay1,
  },
  {
    id: 4,
    url: overlay5,
  },
  {
    id: 5,
    url: overlay6,
  },
  {
    id: 6,
    url: overlay8,
  },
  {
    id: 7,
    url: overlay10,
  },
];

function DragDrop() {
  const [preview, setPreview] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addOverlayToPreview(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addOverlayToPreview = (id) => {
    const overlaysList = OverlaysList.filter((overlays) => id === overlays.id);
    setPreview([overlaysList[0]]);
  };
  return (
    <>
      <div className="container-overlays-box">
        <div className="container-overlays">
          <div className="search-overlays-container">
            <h3 className="text-search">Søk etter Overlays</h3>
            <BsSearch className="search-icon" />
          </div>

          {OverlaysList.map((overlays) => {
            return <Overlays url={overlays.url} id={overlays.id} />;
          })}

          <div className="overlays">
            Legg til flere
            <GrAdd className="add-icon" />
          </div>
        </div>

        <div className="preview-container">
          <div className="icons-camera">
            <div className="camera-add">
              <BsFillCameraFill className="camera" />
              <GrAdd className="camera" />
            </div>
            <div className="camera1">
              <BsFillCameraFill className="camera" />
              <TbSquareRoundedNumber2Filled className="camera" />
            </div>
            <div className="camera1">
              <BsFillCameraFill className="camera" />
              <TbSquareRoundedNumber1Filled className="camera" />
            </div>
          </div>
          <h4 className="preview-text">Forhåndsvisning</h4>

          <div className="Preview" ref={drop}>
            <img className="image-preveiw" src={previews} alt="Preview" />
            <div className="overlay-preview">
              {preview.map((overlays) => {
                return <Overlays url={overlays.url} id={overlays.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DragDrop;
