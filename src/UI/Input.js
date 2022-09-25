import React from "react";

function Input({ onChange, className ,value}) {
  return <input type="text" value={value} onChange={onChange} className={`${className}`} />;
}

export default Input;
