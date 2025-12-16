
import { Routes, Route, Link, NavLink } from "react-router-dom";
import TodoApp from "./pages/TodoApp";

const Home = () => {
  return (

    <>
      <div className="px-4 py-6">
        <h2 className="text-blue-700">
          Hands-on Practice
        </h2>
        <ul className="p-2 text-yellow-700 list-disc">
          <li>
            <Link to="/todo-app">
              Build a todo app with useReducer (add, delete, edit, filter, sort)
            </Link>
          </li>
          <li>   Implement undo/redo functionality using reducer pattern</li>
          <li>   Create a shopping cart with complex state updates</li>
        </ul>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-red-700">   Project - Expense Tracker</h2>
        <ul className="p-2  text-cyan-400 list-disc">
          <li>
            Multiple categories, transactions, filtering</li>
          <li>
            Complex calculations (totals, percentages, monthly summaries)</li>
          <li>      State persists in localStorage</li>
          <li>
            Tech Stack: React, useReducer, localStorage</li>
        </ul>

      </div>
    </>
  )
}


const App = () => {
  return (
    <>
      <div>
        <nav className="p-4 bg-gray-100 flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" :
                "text-gray-600"
            }
          >Home</NavLink>
          <NavLink
            to="/todo-app"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" :
                "text-gray-600"
            }>Todo-App</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-app" element={<TodoApp />} />

        </Routes>
      </div>
    </>
  )
}

export default App;