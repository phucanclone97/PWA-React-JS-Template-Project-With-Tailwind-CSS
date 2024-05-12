import React from "react";
import useAboutStore from "../stores/AboutStore";

function About() {
  const aboutStore = useAboutStore();
  return (
    <div className="text-center bg-red-400 mx-auto">
      <h1>{aboutStore.count}</h1>
      <h1>about2</h1>
    </div>
  );
}

export default About;
