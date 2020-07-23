import React, { useReducer, useState } from 'react';

import { useForm } from '../../hooks/useForm';

import { todoReducer, initialState } from '../../reducers/index';

const initialValue = {
    id: null,
    item: '',
    completed: false
};

const TodoForm = (props) => {
    // const [todo, setTodo] = useState(initialValue);

    const [values, handleChanges, clearForm] = useForm(initialValue);

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                item: values.newTodoText,
                completed: false
            }
        });
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                className='todo-item'
                type='text'
                name='newTodoText'
                value={values.item}
                onChange={(e) => handleChanges(e)}
            />
            <button>Submit</button>
        </form>
    );
}

export default TodoForm;