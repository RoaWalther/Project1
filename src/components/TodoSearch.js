import React from "react";
import '../css/TodoSearch.css';

function TodoSearch(props){
    

    const onChangeValue=(event)=>{
        console.log(event.target.value)
        props.setSearchValue(event.target.value)
    }

    return (
        <input className="TodoSearch" placeholder='Search '  value={props.searchValue}
        onChange={onChangeValue} disabled={props.loading}
        ></input>
    );
}

export {TodoSearch};