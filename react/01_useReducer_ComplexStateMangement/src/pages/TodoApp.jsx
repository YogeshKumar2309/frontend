import React, { useReducer, useState } from 'react'
import { initialTodoState, todoReducer } from '../reducer/TodoReducer'
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import TodoFilter from '../components/TodoFilter';
import TodoSort from '../components/TodoSort';

const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialTodoState);
    const [input, setInput] = useState("");

    //filter logic
    let visibleTodos = state.todos;

    if (state.filter === "ACTIVE") {
        visibleTodos = visibleTodos.filter(todo => !todo.completed)
    }
    if (state.filter === "COMPLETED") {
        visibleTodos = visibleTodos.filter(todo => todo.completed);
    }

    //sort logic
    if (state.sort == "OLDEST") {
        visibleTodos = [...visibleTodos].sort((a,b) => a.id - b.id);
    } else {
        visibleTodos = [...visibleTodos].sort((a,b) => b.id - a.id)
    }


    return (
        <div className='mx-4 my-6'>
            <h2 className='text-blue-500 font-bold'>Build a todo app with useReducer (add, delete, edit, filter, sort)</h2>

            <TodoInput
                input={input}
                setInput={setInput}
                dispatch={dispatch}
            />
            <div className='flex justify-around items-center'>

                <TodoFilter
                    dispatch={dispatch}
                />

                <TodoSort
                    dispatch={dispatch}
                />

            </div>
            <TodoItem
                visibleTodos={visibleTodos}
                dispatch={dispatch}
            />
        </div>
    )
}

export default TodoApp