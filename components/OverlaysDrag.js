import React from "react";
import { useDrag } from "react-dnd";

function OverlaysDrag({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <img className="overlay-image" ref={drag} src={url} alt="Overlay" />;
}

export default OverlaysDrag;
