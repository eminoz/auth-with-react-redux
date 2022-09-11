import React from "react";

function Input({ onChange, className }) {
  return <input type="text" onChange={onChange} className={`${className}`} />;
}

export default Input;
