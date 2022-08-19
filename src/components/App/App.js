
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../../modal';
import {TodoForm} from '../../TodoForm';
import { TodoHeader } from "../../Todoheader";
import { useTodo } from "./useTodo";
import { ChangeAlert } from "../../ChangeAlert"

function App() {
  const {error, loading,searchTodos,
    completedTodo,deleteTodo, openModal, setOpenModal,
    totalTodos,completedTodos,searchValue, setSearchValue,addTodo,sincronizeTodos,}= useTodo();
  

    return (
      <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter  totalTodos={totalTodos} completedTodos={completedTodos} />
            
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            </TodoHeader>

            <TodoList
                loading ={loading}
                error = {error}
                searchTodos={searchTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                searchResult= {(searchText) => <p>No hay resultados para {searchText}</p>}
                render ={todo=> (
                <TodoItem 
                key={todo.text} 
                text= {todo.text}
                completed= {todo.completed}
                onCompleted = {()=> completedTodo(todo.text)}
                onDelete ={()=> deleteTodo(todo.text)}
                />
                )}
            >
                {/* {todo=> (
                <TodoItem 
                key={todo.text} 
                text= {todo.text}
                completed= {todo.completed}
                onCompleted = {()=> completedTodo(todo.text)}
                onDelete ={()=> deleteTodo(todo.text)}
                />
                )} */}
                </TodoList>

          {openModal && (
              <Modal>
                  <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}
                  ></TodoForm>
              </Modal>
          )}
          
          <CreateTodoButton openModal={setOpenModal}/>

          <ChangeAlert
            sincronizaItem={sincronizeTodos}
          />

      </React.Fragment>
  );
}

export default App;
