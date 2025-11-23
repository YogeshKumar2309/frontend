import React, { useReducer, useState } from 'react'
import { initilaState, todoReducer } from '../reducer/todoReducer'
import { ACTION_TYPE } from '../reducer/todoActionTypes';

const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initilaState);
    const [inputValue, setInputValue] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleUpdate = (id) => {
        if (editText.trim() === '') return;
        dispatch({ type: ACTION_TYPE.EDIT_TODO, payload: { id, text: editText } });
        setEditTodoId(null);
        setEditText('');
    }

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === "COMPLETED") return todo.completed;
        if (state.filter === "PENDING") return !todo.completed;
        return true; //ALL
    })

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold text-center mb-6'>Todo App</h1>

            {/* input & btn */}
            <div className='flex gap-2 mb-4'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder='Enter todo'
                    className='border flex-1 p-2 rounded'
                />
                <button
                className='mx-5 border border-blue-400 bg-green-100 px-4 py-2 rounded text-blue-700'
                    onClick={() => {
                        if (inputValue.trim() === '') return; //empty todo check
                        dispatch({
                            type: ACTION_TYPE.ADD_TODO,
                            payload: { id: Date.now(), text: inputValue },
                        })
                        setInputValue('');
                    }
                    }
                >
                    Add Todo
                </button>

            </div>

            <div className='flex gap-3 mb-4 flex justify-between'>
                <div className=''>
                    <button
                        className='px-3 py-1 border rounded mx-2'
                        onClick={() => dispatch({ type: ACTION_TYPE.FILTER_TODO, payload: "ALL" })}
                    >
                        All
                    </button>

                    <button
                        className='px-3 py-1 border rounded'
                        onClick={() => dispatch({ type: ACTION_TYPE.FILTER_TODO, payload: "COMPLETED" })}
                    >
                        Completed
                    </button>

                    <button
                        className='px-3 py-1 border rounded mx-2'
                        onClick={() => dispatch({ type: ACTION_TYPE.FILTER_TODO, payload: "PENDING" })}
                    >
                        Pending
                    </button>
                </div>

                {/* SORT_TODO */}
                <div>
                    <button
                        className='m-2 border-1 border-blue-400 bg-blue-100 px-4 py-1 rounded'
                        onClick={() => dispatch({
                            type: ACTION_TYPE.SORT_TODO,
                            payload: 'asc'
                        })}
                    >
                        Sort A-Z
                    </button>
                    <button
                        className='m-2 border-1 border-blue-400 bg-blue-100 px-4 py-1 rounded'
                        onClick={() => dispatch({
                            type: ACTION_TYPE.SORT_TODO,
                            payload: 'desc'
                        })}
                    >
                        Sort Z-A
                    </button>
                </div>

            </div>

            {/* Todo list */}
            <ul className='mt-5 border rounded border-gray-200'>
                {filteredTodos.map((todo) => (
                    < li className='flex m-4'
                        key={todo.id}>
                        {editTodoId === todo.id ? (
                            <>
                                <input
                                    type='text'
                                    value={editText}
                                    onChange={e => setEditText(e.target.value)}
                                    className="border p-1 rounded flex-1"
                                />
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className='px-3 py-1 bg-green-400 text-white rounded mx-4'
                                >
                                    update
                                </button>
                                <button
                                    onClick={() => setEditTodoId(null)}
                                    className="px-3 py-1 bg-red-300 rounded"
                                >
                                    Cancel
                                </button>

                            </>
                        ) : (
                            <>
                                <li
                                    className='mb-2 flex-1'

                                >
                                    {todo.text}

                                </li>
                                <button
                                    onClick={() => {
                                        setEditTodoId(todo.id);
                                        setEditText(todo.text);
                                    }}
                                    className='border border-blue-400 boder-4 rounded px-4 py-2 text-blue-400 bg-blue-50 mx-2'
                                >
                                    Edit Todo
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: todo.id });
                                    }}
                                    className='border border-red-400 boder-4 rounded px-4 py-2 text-red-400 bg-rose-50'
                                >
                                    Delete Todo
                                </button>
                                <button
                                    className={`px-4 py-1 rounded mx-5 ${todo.completed ? "bg-green-300" : "bg-yellow-200"}`}
                                    onClick={() => (
                                        dispatch({ type: ACTION_TYPE.TOGGLE_TODO, payload: { id: todo.id } })
                                    )}

                                >
                                    {todo.completed ? 'completed' : 'Do complet'}
                                </button>

                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp