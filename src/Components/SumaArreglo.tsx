
const SumaArreglo = () => {


  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


  const suma = (array: number[]) => {
    return array.reduce((acc, value) => acc + value, 0);
  };

  return (
    <div>
      <p>La suma del arreglo es:{suma(arreglo)}</p>
    </div>
  )

}
export default SumaArreglo;
