import React from 'react';

import * as MUI from '../../materialui/index';

const Todo = (props) => {
    const { todo } = props;

    return(
        <div className='todo-item'>
            <MUI.Card>
                {todo.item}
            </MUI.Card>
        </div>
    );
};

export default Todo;