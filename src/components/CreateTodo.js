import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo-slice";
import "../index.css";
import Input from "../UI/Input";
function CreateTodo() {
  const [todo, setTodo] = useState("");
  const handleName = (e) => {
    setTodo(e.target.value);
  };

  const dispatch = useDispatch();

  const creatNewTodo = () => {
    dispatch(todoActions.createTodo({ name: todo }));
  };
  let user = useSelector((state) => state.todox.user);
  console.log(user);
  useEffect(() => {
    dispatch(todoActions.getUser());
  }, [dispatch]);
  return (
    <div className="h-100 justify-around w-full flex m-1 ">
      <Input
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
