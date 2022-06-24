const initialState= [
    {
        id: 0,
        title : "eat something",
        description : "brunch at office",

    },
    {
        id: 1,
        title : "do something",
        description : "coding task",

    }
];

const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'AddTodo':
            state=[...state,action.payload];
            return state;
        case 'UpdateTodo':
            const updateState = state.map((todo)=>todo.id === action.payload.id ? action.payload : todo);    
            state= updateState;
            return state;
        case 'DeleteTodo':
             const filterTodo = state.filter(todo=>todo.id!== action.payload ? todo : null);
             state = filterTodo;
             return state;
        case 'DeleteAll':
              state = [];
             return state;
        default:
        return state;  
    }
};

export default todoReducer;