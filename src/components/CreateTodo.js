import React, { useState } from "react";
import { useDispatch,  } from "react-redux";
import { userActions } from "../store/user-slice";
import "../index.css";
import Input from "../UI/Input";
function CreateTodo() {
  const [todo, setTodo] = useState("");
  const handleName = (e) => {
    setTodo(e.target.value);
  };

  const dispatch = useDispatch();

  const creatNewTodo = () => {
    if (todo === "") {
      alert("todo must not be empty");
      return;
    }
    dispatch(userActions.createTodo({ name: todo }));
    setTodo("");
  };

  return (
    <div className="h-100 justify-around w-full flex m-1 ">
      <Input
        value={todo}
        onChange={handleName}
        className="border-inherit bg-red-50 rounded-md p-2"
      />
      <button
        onClick={creatNewTodo}
        className="flex-no-shrink bg-amber-100 p-2 ml-4 mr-2 border-2 rounded text-green border-green "
      >
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
