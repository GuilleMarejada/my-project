import React from "react";

const Card = ({ imagen, titulo, recuperados, disponibles }) => {
  return (
    <div className="container flex justify-center">
        <div>
      <img src={imagen} className="rounded-full w-56 h-56"></img>
      <h2>{titulo}</h2>
      <span>{recuperados} muebles recuperados</span>
      <br />
      <span>
        <strong>{disponibles} muebles disponibles</strong>
      </span>
      </div>
    </div>
  );
};

export default Card;
