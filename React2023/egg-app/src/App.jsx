import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footers from "./componentes/Footers";
import Headers from "./componentes/Headers";
import Productos from "./componentes/Productos";
import useProductos from "./hooks/useProductos";
import Detalle from './componentes/Detalle';

function App() {
  const { productos, favoritos, agregarFav, eliminarFav } = useProductos()

  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Productos productos={productos} eliminarFav={eliminarFav} agregarFav={agregarFav}/>}/>
        <Route path='/favoritos' element={<Productos productos={favoritos} eliminarFav={eliminarFav} agregarFav={agregarFav}/>}/>
        <Route path='/producto/:id' element={<Detalle/>}/>
      </Routes>
      <Footers />
    </BrowserRouter>
  )
}
 
export default App;

// const [mostrar, setMostrar] = useState(false); 'Hook useState'

// const [count, setCount] = useState(0);
// let contador2 = 0;

// useEffect(() => {
//   console.log("useEffect")
// }, [count ]);
// 'Entre corchetes se determina a que variable se esta mirando, si no hay datos se ejecuta siempre que ocurra un cambio'

// function sumarCont1() {
//   setCount(count + 1);
// }
// function sumarCont2() {
//   contador2 += 1;
// }
{
  /* <h1>Jugando a programar !!!!!!!</h1>

      <p>{count}</p>
      <button onClick={sumarCont1}>Sumar contador 1</button>

      <p>{contador2}</p>
      <button onClick={sumarCont2}>Sumar contador 2</button>

      <p>{ mostrar && "Muestro el texto"}</p>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar texto</button> */
}
