import React from "react";
import '../css/form.css';

function TodoForm (props){
    const [value,setValue]= React.useState('');

    const onChange = (event)=>{
        setValue(event.target.value);
    }

    const onCancel = ()=>{
        props.setOpenModal(false);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(value.trim()){
            props.addTodo(value);
            props.setOpenModal(false);
        }else{
            alert('Ingresa una tarea');
        }
        
    }

    return (
        
        <form onSubmit={onSubmit}>
            <label> Tareas</label>
            <textarea value={value} onChange={onChange} placeholder=" Ingresa la Tarea"/>
            <div>
                <button type="button" 
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel} >Cancelar</button>
                <button type="submit" 
                className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
        
    );
}

export {TodoForm};