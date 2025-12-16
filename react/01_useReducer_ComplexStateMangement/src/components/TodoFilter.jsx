import React, { useState } from 'react'
import { TODO_ACTIONS } from '../actions/todo.actions'

const TodoFilter = ({ dispatch }) => {
  const [activeMenu, setActiveMenu] = useState("all");
  return (
    <div className='flex gap-2 mb-2'>
      <button
        className={`border px-2 py-1 rounded-xl  ${activeMenu === "all" ? "bg-blue-600" : "bg-yellow-100"}`}
        onClick={() => {
          setActiveMenu("all")
          dispatch({
            type: TODO_ACTIONS.FILTER,
            payload: "ALL"
          })
        }}
      > All
      </button>

      <button
        className={`${activeMenu === "active" ? "bg-blue-600" : "bg-yellow-100"} border px-2 py-1 rounded-xl `}
        onClick={() => {
          setActiveMenu("active")
          dispatch({
            type: TODO_ACTIONS.FILTER,
            payload: "ACTIVE"
          })
        }}
      > Active
      </button>

      <button
        className={`${activeMenu === "completed" ? "bg-blue-600" : "bg-yellow-100"} border px-2 py-1 rounded-xl `}
        onClick={() => {
          setActiveMenu("completed")
          dispatch({
            type: TODO_ACTIONS.FILTER,
            payload: "COMPLETED"
          })
        }}
      > Completed
      </button>
    </div>
  )
}

export default TodoFilter