import React from "react";
import useHomeStore from "../stores/HomeStore";

function Home() {
  const homeStore = useHomeStore();
  return (
    <div className="text-center bg-blue-300">
      <h1>{homeStore.count}</h1>
      <h1>home2</h1>
    </div>
  );
}

export default Home;
