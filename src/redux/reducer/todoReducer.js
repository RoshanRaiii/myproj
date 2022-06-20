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
      default:
        return state;  
    }
};

export default todoReducer;