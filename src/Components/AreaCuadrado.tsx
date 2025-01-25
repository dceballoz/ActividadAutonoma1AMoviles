

const AreaCuadrado = () => {

    const calculo = (numero:number)=>{
        return numero * numero
    }

  return (
    <div>
      <p>El area del cuadrado de 20 es:{calculo(20)}</p>
    </div>
  )
}

export default AreaCuadrado


