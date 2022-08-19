import React from "react";
import { useLocalStorage } from "./useLocalstorage";

function useTodo(){
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        sincronize: sincronizeTodos,
      }= useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue]= React.useState('');

      const [openModal, setOpenModal]= React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length
      const totalTodos = todos.length;
    
      let searchTodos = [];
    
      if(!searchValue.length){
        searchTodos = todos;
      }else{
        searchTodos = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      };

      const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos);
      }
    
      const completedTodo = (text)=>{
        const index = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = (!newTodos[index].completed)?true: false;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text)=>{
        const index = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      }
    return({
            error,           
            loading,           
            totalTodos,          
            completedTodos,          
            searchValue,            
            setSearchValue,          
            searchTodos,           
            completedTodo,  
            addTodo,         
            deleteTodo,
            openModal,
            setOpenModal,
            sincronizeTodos,      
        }
    );
}

export {useTodo};
