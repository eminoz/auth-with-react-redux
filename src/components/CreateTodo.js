import React, { useState } from "react";
import "../index.css";
import Input from "../UI/Input";
function CreateTodo() {
  const [todo, setTodo] = useState("");
  const handleName = (e) => {
    setTodo(e.target.value);
  };
  console.log(todo);
  return (
    <div className="h-100 justify-around w-full flex m-1 ">
      <Input
        onChange={handleName}
        className="border-inherit bg-red-50 rounded-md p-2"
      />
      <button className="flex-no-shrink bg-amber-100 p-2 ml-4 mr-2 border-2 rounded text-green border-green ">
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
