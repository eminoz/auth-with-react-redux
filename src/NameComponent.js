import React from "react";

function NameComponent(props) {
  return (
    <div>
      <div>{props.sayi}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default NameComponent;
