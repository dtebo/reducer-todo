import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm';

const TodoForm = (props) => {
    const { state, dispatch } = props;

    const [todo, setTodo] = useState({});

    const [values, handleChanges, clearForm] = useForm({});

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