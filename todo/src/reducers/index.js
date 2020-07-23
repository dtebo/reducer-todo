
export const initialState = {
    todos: [
        {
            item: "Test API",
            completed: false,
            id: 3892987589
        },
        {
            item: "Go Shopping",
            completed: false,
            id: 1732957584
        }
    ],
    editing: false
};

//Todo Reducer
export const todoReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE_EDITING":
            return {
                ...state,
                editing: !state.editing
            };
        case "TOGGLE_COMPLETED":
            console.log('from todo reducer toggle completed action', action);
            return {
                ...state,
                todos: [
                    ...state.todos.map((item, index) => {
                        if(item.id !== action.payload.id){
                            return item
                        }

                        return {
                            ...item,
                            ...action.payload
                        }
                    })
                ]
            }
        case "CLEAR_COMPLETED":
            console.log('from todo reducer clear completed action', action);
            return {
                    ...state,
                    todos: [
                        ...state.todos.map((todo) => {
                            return !todo.completed
                        })
                    ]
                }
        case "ADD_TODO":
            //Return updated the list of todos after adding the new item
            return {
                ...state,
                todos: [...state.todos, action.payload],
                editing: false //Set editing back to false so that the todo button is accessible again
            };
        default:
            return state;
    }
};