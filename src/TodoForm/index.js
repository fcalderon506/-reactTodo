import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const[newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onWrite = (event) => {        
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };    

    return(
        <form onSubmit={onSubmit} >
            <label></label>
            <textarea 
                value={newTodoValue}
                onChange={onWrite}
                placeholder="Descripción" />
            <div>
                <button
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};