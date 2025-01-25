
const Funcionmap = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    // use of map() method 
    const nuevoArreglo =arreglo.map((val: number, index: number) => {
        // printing element
       return val/5;
    });

  return (
    <div>
        <p>Del Arreglo: {arreglo.join("-")}</p>
      <p>El nuevo arreglo dividido para 5 es:{nuevoArreglo.join("-")}</p>
    </div>
  );
};

export default Funcionmap;
