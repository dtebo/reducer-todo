import { useState } from 'react';
import { initialState } from '../reducers';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialState);

    const handleChanges = e => {
        e.persist();

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const clearForm = e => {
        setValues(initialValues);
    }

    return [values, handleChanges, clearForm];
}