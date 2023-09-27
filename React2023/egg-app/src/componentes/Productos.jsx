

import Pilchas from './Pilchas';

export default function Productos({productos, agregarFav, eliminarFav}) {
  
  return (
<div className='productos'>
{
   productos.length > 0 ? productos.map(producto => 
   <Pilchas key={producto.id} producto={producto} 
   agregarFav={agregarFav} eliminarFav={eliminarFav}/>)
   : <p>No hay productos en el Carrito</p>
}
</div>
  );
}
