import { useState } from "react"

export const Acumulador = () => {
  //hook useState: cambiar el estado de un componente, variable, arreglo, etc
  //estructura useState: const [variable, setVariable]
  const [valor, setValor] = useState<number>(0);
  // Funcion qie se encargue de cambiar el estado de valor
  const acumulador = (numero: number) => {

    setValor(valor + numero);
  }

  return (
    <div>
      <h5>Acumulador: <small>{valor}</small></h5>
      <button className="btn btn-primary" onClick={()=> acumulador(5)}>+5

      </button>
      &nbsp;
      
      <button className="btn btn-primary" onClick={() => acumulador(-5)}>-5

      </button>


    </div>
  )
}

export default Acumulador
