import { useEffect, useState } from "react";
import { Alumno } from "../interfaces/listaUsuarios";



const CalcularPromedio = () => {
   
    const [alumnos, setAlumnos] = useState<Alumno[]>([
      { name: 'Viviana', edad: 19, calificacion: 10 },
      { name: 'Wendy', edad: 20, calificacion: 8 },
      { name: 'Gerson', edad: 18, calificacion: 9 },
    ]);
  
  
    const [promedio, setPromedio] = useState<number>(0);
  
    
    const calcularPromedio = (alumnos: Alumno[]): number => {
      const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
      return totalCalificaciones / alumnos.length;
    };
  
   
    useEffect(() => {
      const nuevoPromedio = calcularPromedio(alumnos);
      setPromedio(nuevoPromedio); 
    }, [alumnos]); 
  
    return (
      <div>
        <p>El promedio de las calificaciones es: {promedio}</p>
      </div>
    );
  };
  
  export default CalcularPromedio;

