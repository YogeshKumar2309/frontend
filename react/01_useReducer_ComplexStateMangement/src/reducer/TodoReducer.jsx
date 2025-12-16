import { TODO_ACTIONS } from "../actions/todo.actions";
import { addTodo, deleteTodo, editTodo, completedTodo, filterTodo,sortTodo } from "./todohandler";


export const initialTodoState = {
    todos: [],
    filter: "ALL", // ALL | ACTIVE | COMPLETED
    sort: "NEWEST",// NEWEST | OLDEST
}


//REDUCER
export function todoReducer(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return addTodo(state, action.payload);
        case TODO_ACTIONS.DELETE:
            return deleteTodo(state, action.payload);
        case TODO_ACTIONS.EDIT:
            return editTodo(state, action.payload);
        case TODO_ACTIONS.TOGGEL:
            return completedTodo(state, action.payload);
        case TODO_ACTIONS.FILTER:
            return filterTodo(state, action.payload); 
       case TODO_ACTIONS.SORT:
            return sortTodo(state, action.payload);
        default:
            return state;
    }
}