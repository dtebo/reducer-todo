
export const initialState = {
    todos: [
        {
            item: "Test API",
            completed: false,
            id: 3892987589
        }
    ]
};

//Todo Reducer
export const todoReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
};