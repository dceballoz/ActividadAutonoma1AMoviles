import './App.css'
import Acumulador from './Components/Acumulador'
import AreaCuadrado from './Components/AreaCuadrado'
import Funcionmap from './Components/FuncionMap'
import ObjetosAlumno from './Components/ObjetosAlumno'
import SumaArreglo from './Components/SumaArreglo'

function App() {

  return (
    <>
      <h1>EJERCICIOS TYPESCRIPT - REACT</h1>
      <h3>calcular el área de un cuadrado.</h3>
      <AreaCuadrado />
      <h3>suma de los elementos del arreglo</h3>
      <SumaArreglo />
      <h3>nuevo arreglo con los valores divididos para 5.</h3>
      Recomendación emplear función map.
      <Funcionmap />
      <h3>Crear un arreglo con objetos "alumno" y calcular promedio </h3>
      <ObjetosAlumno />
      <h3>Acumulador</h3>
      <Acumulador/>
    </>
  )
}

export default App
