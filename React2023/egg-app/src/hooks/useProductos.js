import { useState, useEffect } from "react";
import { obtenerProductos } from "../servicios/productoServicio";


export default function useProductos() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setfavorito] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
    });
  }, []);

  function agregarFav(producto) {
    const newFav = [...favoritos];
    newFav.push(producto);
    setfavorito(newFav);
  }
  function eliminarFav(producto) {
    const newFav = favoritos.filter((e) => e.id !== producto.id);
    setfavorito(newFav);
  }

  return { productos,favoritos, agregarFav, eliminarFav };
}
