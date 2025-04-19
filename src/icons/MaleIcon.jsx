import React from "react";

const MaleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    {/* Simpler and standard Mars Symbol (♂) */}
    <circle cx="10" cy="14" r="5.25" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75L19.5 4.5m0 0h-4.5m4.5 0v4.5"
    />
  </svg>
);

export default MaleIcon;
