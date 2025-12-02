
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";




const About = () => <h1>About Page</h1>;



const Contact = () => <h1>Contact Page</h1>;



const App = () => {
  return (
    <>
      <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
         <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App;