
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
        case "ADD_TODO":
            console.log(state, action.payload)
            //Return updated the list of todos after adding the new item
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};