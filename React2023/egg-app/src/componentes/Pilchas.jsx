import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavImg from "../Img/Corazon-lleno.jpg";
import NoFav from "../Img/Corazon-vacio.jpg";

export default function Pilchas({ producto, agregarFav, eliminarFav }) {
  const [favorito, setFavorito] = useState(false);

  function handleClick() {
    if (favorito) {
      eliminarFav(producto);
      setFavorito(false);
    } else {
      agregarFav(producto);
      setFavorito(true);
    }
  }
  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} alt="" />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {favorito ? (
        <img className="favIcon" onClick={handleClick} src={FavImg} alt="" />
      ) : (
        <img className="favIcon" onClick={handleClick} src={NoFav} alt="" />
      )}
    </div>
  );
}
