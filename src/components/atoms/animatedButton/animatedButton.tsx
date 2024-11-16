import React, { FC } from "react";
import "./index.css";

const AnimatedButton: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="animated-button8 w-full">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export { AnimatedButton };
