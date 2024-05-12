import React from "react";

import useHomeStore from "./stores/HomeStore";
import Home from "./pages/Home";
import useAboutStore from "./stores/AboutStore";
import About from "./pages/About";

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
    <div>
      <h1>Home Count: {homeCount}</h1>
      <button onClick={homeIncrement}>Increment</button>
      <button onClick={homeDecrement}>Decrement</button>
      <Home />
      <h1>About Count: {aboutCount}</h1>
      <button onClick={aboutIncrement}>Increment</button>
      <button onClick={aboutDecrement}>Decrement</button>
      <About />
    </div>
  );
}

export default App;
