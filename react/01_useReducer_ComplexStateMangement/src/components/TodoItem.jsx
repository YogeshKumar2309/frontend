import React, { useState } from 'react'
import { TODO_ACTIONS } from '../actions/todo.actions'

const TodoItem = ({ dispatch, visibleTodos }) => {

    const [editTable, setEditTable] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleEdit = (todo) => {
        if (editTable === todo.id) {
            dispatch({
                type: TODO_ACTIONS.EDIT,
                payload: {
                    id: todo.id,
                    text: editValue
                }
            })
            setEditTable(null);
            setEditValue("");
        } else {
            setEditTable(todo.id);
            setEditValue(todo.text);
        }
    }

    return (
        <div>

            <h2 className='text-center text-blue-700 font-semibold '>TodoItem</h2>
            <ul className='mt-6 list-decimal ps-4 border'>
                {visibleTodos.map(todo => (
                    <li key={todo.id} className='ms-2 py-2 border'>


                        {editTable === todo.id ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        handleEdit(todo)
                                    }
                                }}
                                className='border-2 text-blue-500 rounded-sm px-2 mx-2 p-1 flex-1'
                            />
                        ) : (
                            <>  <span className={`ms-2 p-1  border-2 rounded-4xl ${todo.completed ? "text-green-600 bg-green-100 " : "text-red-400 bg-rose-100"}`}>
                                {todo.completed ? "done" : "undone"}
                            </span>
                                < p
                                    onClick={() => (
                                        dispatch({
                                            type: TODO_ACTIONS.TOGGEL,
                                            payload: todo.id
                                        })
                                    )}
                                    className={`px-4 w-60 inline-block  cursor-pointer capitalize ${todo.completed ? "line-through text-gray-500" : ""}`}>{todo.text}

                                </p>

                            </>
                        )}


                        {/* edit */}
                        <button
                            onClick={() => handleEdit(todo)}
                            className='px-4 border-2 rounded-2xl border-blue-500 text-blue-500'
                        >
                            {editTable === todo.id ? "save" : "edit"}
                        </button>

                        {/* delete */}
                        <button
                            onClick={
                                () => dispatch({
                                    type: TODO_ACTIONS.DELETE,
                                    payload: todo.id
                                })
                            }
                            className='px-4 border-2  mx-2 rounded-2xl border-red-500 text-red-500'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoItem