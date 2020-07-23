import React from 'react';

import * as MUI from '../../materialui/index';
import * as FA from '../../fontawesome/index';

const Todo = (props) => {
    const { todo } = props;

    return(
        <div className='todo-item'>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.CardHeader
                        className='todo-header'
                        action={
                            <FA.FontAwesomeIcon icon={FA.faCheck} />
                        }
                    >
                    </MUI.CardHeader>
                    <MUI.Typography>
                        {todo.item}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </div>
    );
};

export default Todo;