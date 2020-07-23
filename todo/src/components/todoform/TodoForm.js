import React, { useReducer, useState } from 'react';

import { useForm } from '../../hooks/useForm';

import { todoReducer, initialState } from '../../reducers/index';

// const initialValue = {
//     item: '',
//     completed: false,
//     id: null
// };

const TodoForm = (props) => {
    // const [todo, setTodo] = useState(initialValue);

    const [values, handleChanges, clearForm] = useForm({});

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TODO',
            payload: {
                item: values.newItem,
                completed: false,
                id: Date.now()
            }
        });
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                className='todo-item'
                type='text'
                name='newItem'
                value={values.item}
                onChange={(e) => handleChanges(e)}
            />
            <button>Submit</button>
        </form>
    );
}

export default TodoForm;