import React from "react";
import '../css/CreateTodoButton.css'

function CreateTodoButton(props){

    const onclickButton = ()=>{
        props.openModal(preState => !preState)
    }

    return(
        <button className="CreateTodoButton"
        onClick={onclickButton}
        >+</button>
    );
}

export {CreateTodoButton};