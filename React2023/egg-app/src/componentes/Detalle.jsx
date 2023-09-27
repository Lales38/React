import { useParams } from "react-router-dom";
import { obtenerProductosPorId } from "../servicios/productoServicio";
import { useEffect, useState } from "react";

export default function Detalle() {
  
  const[producto, setProductos]= useState({})
  
  const {id} = useParams();

  useEffect(() => {
    obtenerProductosPorId(id).then((data) => {
      setProductos(data);
    });
  }, [id]);


  return (
    <div className="detalle">
      <img className="img" src={producto.image} alt="" />
      <div>
        <h3>{producto.title}</h3>
        <blockquote>{producto.description }</blockquote>
        <mark>{producto.price}</mark>
      </div>
    </div>
  );
}
