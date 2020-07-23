import React, { useReducer } from 'react';

import { todoReducer, initialState } from '../../reducers/index';

import Todo from './Todo';
import TodoForm from '../todoform/TodoForm';

const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <>
            {
                state.todos && state.todos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} />
                    );
                })
            }
            {
                state.editing ? (
                <TodoForm state={state} dispatch={dispatch} />
                ) : (
                    <button
                        onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
                    >
                        Add Todo
                    </button>
                )
            }
        </>
    );
};

export default TodoList;