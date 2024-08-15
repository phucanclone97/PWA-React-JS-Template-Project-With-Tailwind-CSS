import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import useHomeStore from "./stores/HomeStore";
import useAboutStore from "./stores/AboutStore";

function App() {
  const {
    count: homeCount,
    increment: homeIncrement,
    decrement: homeDecrement,
  } = useHomeStore();
  const {
    count: aboutCount,
    increment: aboutIncrement,
    decrement: aboutDecrement,
  } = useAboutStore();

  return (
    <Router>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                count={homeCount}
                increment={homeIncrement}
                decrement={homeDecrement}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                count={aboutCount}
                increment={aboutIncrement}
                decrement={aboutDecrement}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
