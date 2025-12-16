import React from 'react'
import { TODO_ACTIONS } from '../actions/todo.actions';

const TodoInput = ({ input, setInput, dispatch }) => {

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch({
             type: TODO_ACTIONS.ADD, 
             payload: input 
            });
        setInput("");
    }
    return (
        < >
            <form 
            onSubmit={(e) => addTodo(e)}
            className='flex gap-2 my-4'
            >
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='border p-2 flex-1'
                    placeholder='Add Todo'
                />
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-3'
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoInput