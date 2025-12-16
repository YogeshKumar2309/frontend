import { ACTION_TYPE } from "./todoActionTypes";

export const initilaState = {
    todos: [],
    filter: 'all', //'all', 'completed', 'pending'
    sort: 'asc', // 'asc' or 'desc'
}

export function todoReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload], completed: false
            };

        case ACTION_TYPE.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case ACTION_TYPE.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
            }

        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? todo.completed
                            ? todo
                            : { ...todo, completed: true } : todo
                )
            }

        case ACTION_TYPE.FILTER_TODO:
            return {
                ...state,
                filter: action.payload
            };

        case ACTION_TYPE.SORT_TODO:
            return {
                ...state,
                todos: [...state.todos].sort((a, b) =>
                    action.payload === 'asc'
                        ? a.text.localeCompare(b.text)
                        : b.text.localeCompare(a.text)
                )
            }
        default:
            return state;
    }
}