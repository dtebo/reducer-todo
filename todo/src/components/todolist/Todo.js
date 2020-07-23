import React, { useEffect } from 'react';

import * as MUI from '../../materialui/index';
import * as FA from '../../fontawesome/index';

const Todo = (props) => {
    const { todo, getTodo, dispatch } = props;

    useEffect(() => {
        getTodo(todo);
    }, [todo]);

    return(
        <div className='todo-item'>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.CardHeader
                        className='todo-header'
                        action={ !todo.completed ? (
                                <FA.FontAwesomeIcon 
                                    icon={FA.faSquare}
                                    className='toggle-icon'
                                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: {
                                        ...todo,
                                        completed: !todo.completed
                                    } })} />
                            ) : (
                                <FA.FontAwesomeIcon
                                    icon={FA.faCheckSquare}
                                    className='toggle-icon'
                                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: {
                                        ...todo,
                                        completed: !todo.completed
                                    } })}
                                />
                            )
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