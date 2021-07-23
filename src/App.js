import Header from "./component/header";
import React, { useState, useEffect } from "react";
//importing components
import Form from "./component/inputFilter/inputBox";
import TodoList from "./component/theList/todoList";

import './App.css';

function App() {
  
  //States
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([ ]);
  const [status, setStatus] = useState ("all");
  const [filteredTodos, setFilteredTodos] = useState([ ]);
  //Use Effect
  useEffect (() => {
    filterHandler();
  }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed ===false));
        break; 
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // //Save to Local
  // const saveLocalTodos = () => {
  //   if (localStorage.getItem("todos") ===null){
  //       localStorage.setItem('todos', JSON.stringify([ ]));
  //   }else {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }

  // };

  return (
    <div className="App">
    <Header/>
    <h1>  </h1>
    <Form
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      setFilteredTodos={setFilteredTodos}
    />
    < TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>

  );
}

export default App;
