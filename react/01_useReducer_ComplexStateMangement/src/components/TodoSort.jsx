import React from 'react'
import { TODO_ACTIONS } from '../actions/todo.actions'

const TodoSort = ({dispatch}) => {
    return (
        <div className=''>
            <select
                onChange={(e) => dispatch({
                    type: TODO_ACTIONS.SORT,
                    payload: e.target.value,
                })}
                className='border p-1 rounded-md'
            >
                <option value="NEWEST">Newest</option>
                <option value="OLDEST">Oldest</option>
            </select>
        </div>
    )
}

export default TodoSort