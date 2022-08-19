import React from "react";
import '../css/TodoList.css';

function TodoList(props){
     const valueState = props.children || props.render;
    return(
        <section>
            {props.loading && <p> ¡Cargando tareas!</p>}
            {props.error && <p>¡Hubo un error!</p>}
            {(!props.loading && !props.totalTodos)  && <p>!No hay tarea en la lista!</p>}
            {(!!props.totalTodos && !props.searchTodos.length)  && props.searchResult(props.searchText)}

            {(!props.loading && !props.error) &&props.searchTodos.map(valueState)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};