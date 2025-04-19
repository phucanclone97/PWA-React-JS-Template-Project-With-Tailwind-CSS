import React from "react";

const FemaleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    {/* Standard Venus Symbol (♀) Path */}
    <circle cx="12" cy="9.5" r="5.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v7m-3-3h6" />
  </svg>
);

export default FemaleIcon;
