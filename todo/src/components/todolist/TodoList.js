import React, { useEffect, useReducer } from 'react';

import { todoReducer, initialState } from '../../reducers/index';

import Todo from './Todo';

const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    useEffect(() => {
        dispatch({
            type: "GET_TODOS",
            payload: props.todos
        });
    }, [props.todos]);

    return(
        <>
            {state.todos && state.todos.map((todo) => {
                return (<Todo todo={todo} />);
            })}
        </>
    );
};

export default TodoList;