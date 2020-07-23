import React from 'react';
const Todo = (props) => {
    const { todo } = props;

    return(
        <div className='todo-item'>
            <h3>{todo.item}</h3>
        </div>
    );
};

export default Todo;