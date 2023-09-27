import React from "react";
import { Link } from "react-router-dom";
import Logoimg from "../Img/OIP.jpg";

export default function Headers() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={Logoimg} alt="" className="icono"></img>
      </Link>
      <h4>Tienda de pilchas</h4>
      <nav >
        <Link to={"/"} >Productos</Link>
        <Link to={"/favoritos"} >Favoritos</Link>
      </nav>
    </header>
  );
}
