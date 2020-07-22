import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            todo: {
                id: new Date(),
                item: '',
                completed: false
            }
        };
    }

    handleChanges(e){
        this.setState({
            ...this.state.todo,
            [e.target.name]: e.target.value
        });

        console.log('form: ', this.state.todo);
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.addTodoDispatch({ type: 'ADD_TODO ', payload: this.state.todo});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    className='todo-item'
                    type='text'
                    name='newTodoText'
                    value={this.state.todo.item}
                    onChange={this.handleChanges}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;