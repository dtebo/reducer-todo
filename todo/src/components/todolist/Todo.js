import React from 'react';

import * as MUI from '../../materialui/index';

const Todo = (props) => {
    const { todo } = props;

    return(
        <div className='todo-item'>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.Typography>
                        {todo.item}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </div>
    );
};

export default Todo;