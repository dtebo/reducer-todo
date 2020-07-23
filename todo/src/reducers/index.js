
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
    editing: true
};

//Todo Reducer
export const todoReducer = (state, action) => {
    switch(action.type){
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            };
        case "ADD_TODO":
            console.log(action.payload);
            //Return updated the list of todos after adding the new item
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        item: action.payload.item,
                        completed: false
                    }
                ]
            };
        default:
            return state;
    }
};