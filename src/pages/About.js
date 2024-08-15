import React from "react";

function About({ count, increment, decrement }) {
  return (
    <div className="text-center bg-red-100 p-4 rounded shadow-md mx-auto max-w-md">
      <h2 className="text-xl font-semibold mb-2">About Count: {count}</h2>
      <div>
        <button
          onClick={increment}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
      <h1 className="text-2xl font-bold mt-4">About Page</h1>
    </div>
  );
}

export default About;
