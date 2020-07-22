import React, { useState, useEffect } from 'react';

import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;

    return(
        <>
            {
                todos && todos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} />
                    );
                })
            }
        </>
    );
};

export default TodoList;