import { useEffect, useState } from "react";
import { Alumno } from "../interfaces/listaUsuarios";



const CalcularPromedio = () => {
    // Estado para manejar los alumnos
    const [alumnos, setAlumnos] = useState<Alumno[]>([
      { name: 'Viviana', edad: 19, calificacion: 10 },
      { name: 'Wendy', edad: 20, calificacion: 8 },
      { name: 'Gerson', edad: 18, calificacion: 9 },
    ]);
  
    // Estado para el promedio calculado
    const [promedio, setPromedio] = useState<number>(0);
  
    // Función para calcular el promedio de las calificaciones
    const calcularPromedio = (alumnos: Alumno[]): number => {
      const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
      return totalCalificaciones / alumnos.length;
    };
  
    // Efecto para recalcular el promedio cada vez que cambian los alumnos
    useEffect(() => {
      const nuevoPromedio = calcularPromedio(alumnos);
      setPromedio(nuevoPromedio); // Actualizamos el estado con el nuevo promedio
    }, [alumnos]); // Dependencia: se ejecutará cada vez que el arreglo de alumnos cambie
  
    return (
      <div>
        <p>El promedio de las calificaciones es: {promedio}</p>
      </div>
    );
  };
  
  export default CalcularPromedio;

