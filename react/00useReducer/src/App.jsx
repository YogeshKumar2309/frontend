
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";
import UndoRedo from "./pages/UndoRedo";
import Cart from "./pages/Cart";




const App = () => {
  return (
    <>
      <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
         <Link to="/todo">Todo</Link>
        <Link to="/undo/redo">undo/redo</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
        <Route path="/undo/redo" element={<UndoRedo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </>
  )
}

export default App;