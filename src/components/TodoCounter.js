import React from "react";
// import { TodoContext } from "../context";
import '../css/TodoCounter.css'

function TodoCounter(props){
   
   return (
    <h2 className={`TodoCounter ${props.loading && "TodoCounter--loading"}`}
    >Has completado {props.completedTodos} de {props.totalTodos} Tareas</h2>
   );
}

export {TodoCounter};