import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

//import FormHelperText from '@material-ui/core/FormHelperText';
import Select  from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import { statement } from '@babel/template';


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //javascript & functions
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() *1000}
        ]);
        setInputText(" ");
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value);

    }

    return (
        <form>
            <input value={inputText}
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    );
} ;

export default Form;