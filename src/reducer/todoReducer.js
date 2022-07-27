import { createSlice } from "@reduxjs/toolkit";
const initialState= [
    // {
    //     id: 0,
    //     title : "Write something",
    //     description : "for todolist",
    //     date: "2022-09-12",
    // },
    // {
    //     id: 1,
    //     title : "do something",
    //     description : "coding task",
    //     date: "2022-07-28",
    // }
];

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        AddTodo(state,action){
            state=[...state,action.payload];
            console.log(state);
            return state;
        },
        UpdateTodo(state,action){
            const updateState = state.map((todo)=>todo.id === action.payload.id ? action.payload : todo);    
            state= updateState;
            return state;

        },
        DeleteTodo(state,action){
            const filterTodo = state.filter(todo=>todo.id!== action.payload ? todo : null);
            state = filterTodo;
            return state;
        },
        DeleteAll(state){
            state = [];
            return state;
        }
    }
})

export const { AddTodo,DeleteAll,DeleteTodo,UpdateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;