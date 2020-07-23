import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from '../../reducers/index';

import Todo from './Todo';
import TodoForm from '../todoform/TodoForm';

import './Todo.css';

const TodoList = (props) => {
    const [todo, setTodo] = useState({});

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const getTodo = (todo) => {
        setTodo(todo);
    }

    return(
        <div className='todo-list'>
            {
                state.todos && state.todos.map((todo) => {
                    return (
                        <Todo 
                            key={todo.id}
                            todo={todo}
                            getTodo={getTodo}
                            dispatch={dispatch}
                        />
                    );
                })
            }
            {
                state.editing ? (
                <TodoForm state={state} dispatch={dispatch} />
                ) : (
                    <>
                        <button
                            onClick={() => {
                                console.log('from todolist add todo button', state);
                                dispatch({ type: 'TOGGLE_EDITING' });
                            }}
                        >
                            Add Todo
                        </button>
                        <button
                            onClick={() => {
                                dispatch({ type: 'CLEAR_COMPLETED' });
                            }}
                        >
                            Clear Completed
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default TodoList;